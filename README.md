# ScorLabs official website

Static official site for `scorlabs-ai.com`. It uses the supplied ScorLabs mark and local system fonts, with no build step, external scripts, analytics, or CDN dependencies.

Serve this directory with any static HTTP server for preview. Production hosting must provide HTTPS. `_headers` is a deployment template for hosts that support that file format; other servers must configure equivalent response headers themselves.

Workspace calls to action open `https://platform.scorlabs-ai.com/`, a static HTTPS entry with local-service instructions. It does not run or expose the research backend. The homepage also retains an explicit local-workspace link to `http://127.0.0.1:8000`; visitors must first start the service on the same device. The research workspace uses the ScorResearch plugin. This public site does not publish private plugin source code or internal contracts, and does not host account, credential, API, or private plugin functionality. The capability notice describes the current local evaluation boundary and must be updated only when actual validation supports it.

## Static platform entry maintenance

`platform/` contains exactly `index.html` and `_headers`. The independent platform entry is an assets-only Cloudflare Worker, separate from the official site's GitHub Pages publication. To update it with an authorized Cloudflare login, run `npm exec --yes --package=wrangler@4.163.0 -- wrangler deploy --config wrangler.platform.jsonc`. The config uploads only `platform/`, contains no account credential, and preserves the existing worker name. Do not upload private runtime files, backend code, data, secrets, or credential configuration.

The entry contains no scripts, cookies, forms, third-party assets, or API proxy. `_headers` supplies CSP, no-sniff, referrer and no-store policies. Its `style-src` SHA-256 must match the exact inline `<style>` content in `index.html`; update the hash whenever the CSS changes. After each upload, verify the custom domain's TLS, rendered content and actual response headers. A static entry deployment does not mean the public research backend is deployed.

The supplied logo's image pixels are unchanged. The asset copy was checked for and stripped of PNG text/EXIF metadata chunks if present. No private project paths, release artifacts, or account data are included in the public site files.
