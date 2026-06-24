# Brand Motion Studios — brandmotion.in

Premium one-page website for **Brand Motion Studios** — a creative studio making
social media ads, brand videos and websites for growing businesses.

Pure static site (HTML / CSS / vanilla JS) — **no build step**, deploys directly to GitHub Pages.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole site (all sections) |
| `styles.css` | Styling, theme, responsive layout |
| `script.js` | Nav, scroll reveals, contact form |
| `assets/` | Favicon + social share image |
| `CNAME` | Custom domain (`brandmotion.in`) for GitHub Pages |
| `.nojekyll` | Tells Pages to serve files as-is |
| `robots.txt` / `sitemap.xml` | SEO |

## Preview locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this directory to your repo (`main` branch):
   ```bash
   git add .
   git commit -m "Launch Brand Motion Studios website"
   git push origin main
   ```
2. On GitHub: **Settings → Pages → Source** = `Deploy from a branch`,
   branch = `main`, folder = `/ (root)`. Save.
3. Under **Settings → Pages → Custom domain**, enter `brandmotion.in` (the `CNAME`
   file already sets this).
4. At your domain registrar, point DNS to GitHub Pages:
   - **A records** for `brandmotion.in` →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME** for `www` → `ruturajjena.github.io`
5. Tick **Enforce HTTPS** once the certificate is issued (can take a few minutes).

## Editing tips

- **Add a portfolio item:** copy a `.work-card` block in the Work section of `index.html`.
- **Change colors:** edit the CSS variables at the top of `styles.css` (`--gold`, `--silver`, `--grad`).
- **Logo:** save your logo PNG as `assets/logo.png` — it's used as the social-share / link-preview image. The gold-B / silver-M monogram in the nav and the favicon are vector recreations and need no file.
- **Contact form:** submits via the visitor's email client to `studiosbrandmotion@gmail.com`.
  To collect submissions on a server instead, swap the form handler in `script.js`
  for a service like [Formspree](https://formspree.io).
