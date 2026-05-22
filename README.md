# J. Rich Management Group Website

This version is intentionally static: no Next.js, no React, no Tailwind, no npm install, and no build step. It avoids the Vercel npm install failure completely.

## Vercel setup

In Vercel Project Settings:
- Framework Preset: Other
- Build Command: leave blank
- Output Directory: leave blank
- Install Command: leave blank

Upload these files at the root of the GitHub repo:
- index.html
- styles.css
- README.md

Delete old app, package.json, package-lock.json, postcss, tailwind, and next config files before uploading this version.
