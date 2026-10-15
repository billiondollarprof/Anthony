// Cloudflare Pages Function: /api/chat
// Reads MAKE_WEBHOOK_URL and SITE_TOKEN from environment variables.
// Allows only https://anthony.stellaxafe.com and forwards the request to the Make webhook.
const ALLOWED_ORIGIN = 'https://anthony.stellaxafe.com';
const jsonText = (body, status = 200, extraHeaders = {}) => new Response(body, {
  status,
  headers: {
    'content-type': 'text/plain; charset=utf-8',
    'access-control-allow-origin': ALLOWED_ORIGIN,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'Content-Type, X-Site-Token, Origin',
    ...extraHeaders
  }
});

function sameText(a, b) {
  const x = new TextEncoder().encode(a), y = new TextEncoder().encode(b);
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0;
}

export async function onRequestOptions({ request }) {
  const origin = request.headers.get('Origin');
  if (origin && origin !== ALLOWED_ORIGIN) {
    return jsonText('Forbidden', 403);
  }
  return jsonText('', 204, {
    'access-control-allow-origin': ALLOWED_ORIGIN,
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'Content-Type, X-Site-Token, Origin'
  });
}

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get('Origin');
  if (origin && origin !== ALLOWED_ORIGIN) {
    return jsonText('Forbidden', 403);
  }

  const webhookUrl = env.MAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    return jsonText('Server is not configured', 500);
  }

  const siteToken = env.SITE_TOKEN;
  if (!siteToken) {
    return jsonText('Server is not configured', 500);
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return jsonText('Bad request', 400);
  }

  const message = String(form.get('message') || '').slice(0, 1000).trim();
  const history = String(form.get('history') || '').slice(-6000);
  const token = String(form.get('token') || '');

  if (!message && !history) {
    return jsonText('No message was sent', 400);
  }

  if (!sameText(token, String(siteToken))) {
    return jsonText('Invalid token', 401);
  }

  const upstreamBody = new URLSearchParams({ message, history, token: siteToken });

  try {
    const upstream = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-Site-Token': String(siteToken)
      },
      body: upstreamBody.toString()
    });

    const raw = await upstream.text();
    const reply = raw && raw.trim() ? raw.trim() : 'No reply came back from the assistant.';

    return jsonText(reply, upstream.ok ? 200 : upstream.status, {
      'access-control-allow-origin': ALLOWED_ORIGIN
    });
  } catch {
    return jsonText('The assistant is unavailable right now. Please email anthony@stellaxafe.com.', 502);
  }
}
