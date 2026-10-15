# Pending deploys

- Cloudflare Pages environment variables to add:
  - `CONTENT`
  - `EDIT_PASSWORD`
  - `MAKE_WEBHOOK_URL`
  - `SITE_TOKEN`

- Cloudflare rate-limit rule for `/api/content` and `/api/chat`.
- Deploy the `portfolio-upgrade` branch after final validation.
- Verify chat works through `/api/chat` with the live domain.
- Verify the editor unlock flow still works after deployment.

