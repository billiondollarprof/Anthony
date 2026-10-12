Anthony Nwobosi site (Cloudflare Pages)

Files: index.html and functions/api/content.js (keep this exact folder path).



Put both in your GitHub repo root. Connect the repo to Cloudflare Pages (no build command, output folder: /).

Cloudflare > Storage > KV: create a namespace (e.g. site-content).

Pages project > Settings > Bindings: add KV namespace, variable name CONTENT.

Pages project > Settings > Variables and Secrets: add EDIT_PASSWORD as a Secret. Use a long password.

Redeploy. Open the site, tap the faint dotted line at the very bottom of the page, enter the password.

In index.html, set WEBHOOK_URL (Make) before you commit.

