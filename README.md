# Vanguard Shield Website
Static multi-page site (HTML, CSS, vanilla JS). No build step.

## Run
Open `index.html`, or serve the folder: `python3 -m http.server`.

## Deploy
- **GitHub Pages:** push to a repo, then Settings > Pages > deploy from `main` / root.
- **Netlify / Cloudflare Pages:** drag the folder in, or connect the repo (no build command, publish directory `/`).

## Before launch
1. Add images listed in `images/README.txt`.
2. Set `WHATSAPP_NUMBER` at the top of `script.js` (digits with country code). The contact form and consultation button then open WhatsApp with a pre-filled message.
3. Replace every `[... to be confirmed]` placeholder (phone, email, location, licences, company history).
4. Add the official Infinity Holdings logo in the footer/About if supplied.

Fonts (Bodoni Moda, Manrope) load from Google Fonts; fallbacks are built in. Animations respect `prefers-reduced-motion`.
