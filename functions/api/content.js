// Cloudflare Pages Function: /api/content
// Needs: KV binding named CONTENT, and a secret/variable named EDIT_PASSWORD.
const json = (o, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

function sameText(a, b) {
  const x = new TextEncoder().encode(a), y = new TextEncoder().encode(b);
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0;
}

export async function onRequestGet({ env }) {
  const v = env.CONTENT ? await env.CONTENT.get('site') : null;
  return new Response(v || '{}', { headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
}

export async function onRequestPost({ request, env }) {
  const pin = request.headers.get('x-pin') || '';
  if (!env.EDIT_PASSWORD || !env.CONTENT || !sameText(pin, String(env.EDIT_PASSWORD))) {
    await new Promise(r => setTimeout(r, 1000));
    return json({ error: 'Wrong password or server not set up' }, 401);
  }
  if (new URL(request.url).searchParams.has('check')) return json({ ok: true });
  const body = await request.text();
  if (body.length > 4000000) return json({ error: 'Too large' }, 413);
  try { const d = JSON.parse(body); if (!d || typeof d !== 'object') throw 0; } catch { return json({ error: 'Bad data' }, 400); }
  await env.CONTENT.put('site', body);
  return json({ ok: true });
    }
