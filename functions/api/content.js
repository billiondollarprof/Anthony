// Cloudflare Pages Function: /api/content
// Needs: KV binding named CONTENT, and a secret/variable named EDIT_PASSWORD.
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

const MAX_FAILS = 5;     // wrong PINs allowed per visitor address ...
const LOCK_SECONDS = 900; // ... within this window (15 minutes)

function sameText(a, b) {
  const x = new TextEncoder().encode(a), y = new TextEncoder().encode(b);
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0;
}

const isObj = v => v && typeof v === 'object' && !Array.isArray(v);

// Returns an error message if the content is not the shape the page expects.
function problem(d) {
  if (!isObj(d)) return 'Content must be an object';
  if (d.texts !== undefined) {
    if (!isObj(d.texts)) return 'texts must be an object';
    for (const k of Object.keys(d.texts)) if (typeof d.texts[k] !== 'string') return 'texts must hold only text';
  }
  if (d.photo !== undefined && d.photo !== '' && !(typeof d.photo === 'string' && d.photo.startsWith('data:image/'))) return 'photo must be an image';
  if (d.sections !== undefined) {
    if (!Array.isArray(d.sections) || d.sections.length > 40) return 'sections must be a list of 40 or fewer';
    for (const s of d.sections) {
      if (!isObj(s) || !['text', 'cards', 'image'].includes(s.type)) return 'unknown section type';
      if (s.type === 'cards' && !Array.isArray(s.items)) return 'cards section needs items';
    }
  }
  return '';
}

export async function onRequestGet({ env }) {
  let v = null;
  try { v = env.CONTENT ? await env.CONTENT.get('site') : null; } catch (e) { v = null; }
  let out = '{}';
  if (v) { try { JSON.parse(v); out = v; } catch (e) { out = '{}'; } }
  return new Response(out, { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
}

export async function onRequestPost({ request, env }) {
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const key = 'fail:' + ip;
  let fails = 0;
  if (env.CONTENT) {
    try { fails = parseInt(await env.CONTENT.get(key), 10) || 0; } catch (e) { fails = 0; }
    if (fails >= MAX_FAILS) return json({ error: 'Too many wrong attempts. Try again in 15 minutes.' }, 429);
  }

  const pin = request.headers.get('x-pin') || '';
  if (!env.EDIT_PASSWORD || !env.CONTENT || !sameText(pin, String(env.EDIT_PASSWORD))) {
    if (env.CONTENT) { try { await env.CONTENT.put(key, String(fails + 1), { expirationTtl: LOCK_SECONDS }); } catch (e) {} }
    await new Promise(r => setTimeout(r, 1000));
    return json({ error: 'Wrong password or server not set up' }, 401);
  }
  if (fails) { try { await env.CONTENT.delete(key); } catch (e) {} }

  if (new URL(request.url).searchParams.has('check')) return json({ ok: true });

  const body = await request.text();
  if (body.length > 4000000) return json({ error: 'Too large' }, 413);
  let d;
  try { d = JSON.parse(body); } catch (e) { return json({ error: 'Bad data' }, 400); }
  const p = problem(d);
  if (p) return json({ error: p }, 400);
  await env.CONTENT.put('site', body);
  return json({ ok: true });
}
