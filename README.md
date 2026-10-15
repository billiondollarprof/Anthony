# Anthony portfolio site

This repository is the personal portfolio site for Anthony Nwobosi. It is hosted on Cloudflare Pages and uses a small serverless function for editing content and another serverless function for the chat proxy.

## Overview

- `index.html` contains the full site markup, styles, behavior, chat UI, and the in-page editor.
- `functions/api/content.js` stores and reads the editable site content in a Cloudflare KV namespace.
- `functions/api/chat.js` receives chat requests from the browser, enforces the allowed origin, and forwards the request to the Make webhook.

## Folder structure

```text
.
├── index.html
├── functions/
│   └── api/
│       ├── chat.js
│       └── content.js
├── README.md
├── CLAUDE.md
├── AGENTS.md
├── CURRENT.md
├── SESSIONS.md
├── PENDING-DEPLOYS.md
└── .gitignore
```

## Editing content and sections

The site uses a JSON object stored in KV under the key `site`.

The current shape is similar to this:

```json
{
  "photo": "data:image/jpeg;base64,...",
  "texts": {},
  "sections": [
    {
      "type": "cards",
      "title": "What I built",
      "items": [
        { "t": "Amara", "b": "Guest experience and CRM for hotels.", "l": "Amara", "u": "https://amara.ng" }
      ]
    }
  ],
  "links": {
    "email": "mailto:anthony@stellaxafe.com",
    "linkedin": "https://www.linkedin.com/in/anthony-nwobosi-575b3717a",
    "github": "https://github.com/billiondollarprof"
  }
}
```

The editor is still the in-page editor already built into `index.html`. It loads the saved JSON from `/api/content`, lets you add or edit sections, and saves the JSON back to KV.

## Local development

Use a static preview or a Cloudflare Pages local preview flow. The site itself is plain HTML and JavaScript; there is no build step required.

Typical local steps:

```bash
# from the repo root
python3 -m http.server 8000
```

Then open the page in a browser. For server-side functions, preview with Cloudflare Pages or a local environment that supports Pages Functions.

## Cloudflare Pages deployment

1. Create or connect the Pages project.
2. Set the Pages root to the repo root.
3. Add the KV binding named `CONTENT`.
4. Add environment variables for the function runtime.
5. Deploy the site.

## Required environment variables

Names only, not values:

- `CONTENT`
- `EDIT_PASSWORD`
- `MAKE_WEBHOOK_URL`
- `SITE_TOKEN`

## Chat flow

1. Visitor types a message in the browser.
2. The browser calls `/api/chat`.
3. The Pages Function checks the request origin and allows only `https://anthony.stellaxafe.com`.
4. The function reads `MAKE_WEBHOOK_URL` and `SITE_TOKEN` from environment variables.
5. The function sends the request to the Make webhook with the `X-Site-Token` header.
6. Make reaches Gemini and returns plain text.
7. The function returns that plain text to the browser.

## Security notes

- Do not place `MAKE_WEBHOOK_URL` or `SITE_TOKEN` in the client code.
- Keep all secrets in Cloudflare environment variables.
- The browser does not hold any private webhook URL or secret.
- The site should only accept requests from `https://anthony.stellaxafe.com`.
- Add a Cloudflare rate-limiting rule for `/api/content` and `/api/chat`.
- The editor PIN is protected by a short delay and a rate-limited lockout after repeated wrong tries.

## Troubleshooting

### The page loads but the editor does not unlock

- Check that `EDIT_PASSWORD` is set in Cloudflare.
- Check that the KV binding is named exactly `CONTENT`.
- Verify that the request to `/api/content?check=1` returns a successful response.

### The chat does not reply

- Check the Cloudflare environment variables for `MAKE_WEBHOOK_URL` and `SITE_TOKEN`.
- Check the browser console for fetch errors.
- Confirm the site is running from the correct origin.

### The content does not show

- Check the KV namespace and the key name `site`.
- Verify the saved JSON is valid.
- Check the Cloudflare Pages function logs.

## Writing rules for any edits

When changing text or code, follow the repo requirements:

- Write in plain first person.
- Keep sentences short and concrete.
- Use specific facts only.
- No invented clients, testimonials, logos, prices, or metrics.
- No hype words.
- No emojis.
- Never add secrets into code.
- Show changes before editing and keep the site easy to reverse.

## Notes for AI agents

- Read this README before changing the site.
- Do not invent facts.
- Keep changes small and easy to revert.
- Respect the existing editing system and do not break the content JSON contract.
- Do not hard-code secrets in the browser.

