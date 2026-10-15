# Current status

This file tracks what is live and what is in progress.

## Live

- The personal portfolio site is live at `https://anthony.stellaxafe.com`.
- Cloudflare Pages is serving the static HTML site.
- The editing system uses `/api/content` and Cloudflare KV.
- The chat is proxied through `/api/chat` to the Make webhook.

## In progress

- The website upgrade branch is `portfolio-upgrade`.
- Server-side chat proxy and content hardening are in place.
- The next work is content migration and stronger accessibility and SEO updates.

## Notes

- The site should continue to work with the existing editor structure.
- Any new content fields should stay compatible with the current JSON object shape.

