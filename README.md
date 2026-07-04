# Ryan's Sloyd

A single-page site for **Ryan's Sloyd** — handcarved wooden spoons, kitchen tools, and treen ware made in Hampshire County, WV in the Nordic sloyd tradition.

Plain HTML/CSS/JS, no build step, no framework. Instagram (**@ryanssloyd**) is linked in the nav, the hero, a full-width callout section, the shop cards, the commissions section, and the footer.

## Files
- `index.html` — page content (logo and favicons are embedded directly as base64, so the page works even opened standalone with no other files)
- `style.css` — design system (wood-tone palette, Fraunces/Inter/JetBrains Mono type)
- `script.js` — footer year
- `vercel.json` — static-site config for Vercel
- `assets/` — source PNGs (kept for reference/editing; not required at runtime since they're inlined in `index.html`)

## Put it on GitHub

```bash
cd ryans-sloyd
git init
git add .
git commit -m "Ryan's Sloyd site"
```

Then on github.com:
1. Click **New repository**, name it something like `ryans-sloyd` (public is fine).
2. Don't initialize with a README (you already have one).
3. Copy the commands GitHub shows under "…or push an existing repository":

```bash
git remote add origin https://github.com/rmkenv/ryans-sloyd.git
git branch -M main
git push -u origin main
```

## Deploy on Vercel

**Easiest path (no CLI):**
1. Go to [vercel.com/new](https://vercel.com/new) and sign in with your GitHub account.
2. Import the `ryans-sloyd` repo.
3. Framework preset: choose **Other** (it's static — no build command needed).
4. Click **Deploy**. You'll get a live URL like `ryans-sloyd.vercel.app` in under a minute.

**CLI path:**
```bash
npm i -g vercel
cd ryans-sloyd
vercel        # follow prompts, links repo + deploys a preview
vercel --prod # promotes to your production URL
```

## Customizing later
- Swap the SVG "swatch" cards in the Shop section for real product photos whenever you have them shot — just replace `.grain-swatch` spans with `<img>` tags.
- Add a custom domain (e.g. `ryanssloyd.com`) under the Vercel project's **Settings → Domains**.
- If you want a contact form or email instead of Instagram DMs only, that's a quick add.
