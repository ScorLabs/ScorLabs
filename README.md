# ScorLabs official website

Static official site for `scorlabs-ai.com`. It uses the supplied ScorLabs mark and local system fonts, with no build step, external scripts, analytics, or CDN dependencies.

Serve this directory with any static HTTP server for preview. Production hosting must provide HTTPS. `_headers` is a deployment template for hosts that support that file format; other servers must configure equivalent response headers themselves.

Workspace calls to action lead to the capability and availability section, which contains an explicit local-workspace link to `http://127.0.0.1:8000`. Visitors must first start the local service on the same device. `platform.scorlabs-ai.com` is the planned public entry and is not yet open; enable its direct link only after deployment validation. The research workspace uses the ScorResearch plugin. This public site does not publish private plugin source code or internal contracts, and does not host account, credential, API, or private plugin functionality. The capability notice describes the current local evaluation boundary and must be updated only when actual validation supports it.

The supplied logo's image pixels are unchanged. The asset copy was checked for and stripped of PNG text/EXIF metadata chunks if present. No private project paths, release artifacts, or account data are included in the public site files.
