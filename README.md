# Brand Motion Studios — brandmotion.in

The Brand Motion Studios storefront — selling **AI prompt packs, design systems
and production-ready source code** for websites that move.

Built with **Next.js 16 (App Router) + Tailwind CSS v4 + Stripe Checkout**.

## Structure

| Path | Purpose |
|------|---------|
| `app/` | Storefront pages — home, `/store`, `/store/[slug]`, `/success` |
| `app/api/checkout/` | Creates Stripe Checkout sessions |
| `lib/products.ts` | The product catalog (edit here to add/remove products) |
| `lib/stripe.ts` | Stripe client |
| `components/` | Navbar, Footer, ProductCard, BuyButton |
| `public/` | Legacy static site — old URLs like `/taj-mahal.html` still work; the old studio homepage lives at `/studio.html` |

## Develop

```bash
npm install
cp .env.example .env.local   # add your Stripe secret key
npm run dev                  # http://localhost:3000
```

Without `STRIPE_SECRET_KEY` the site runs fine; the Buy button reports
"Payments are not configured yet".

## The model

Each product is one website. Its card shows a preview (screen recording or
screenshot) with two gated actions — **Copy prompt** and **Source code**.
Clicking either opens the paywall: buy that item once, or subscribe to the
**All-Access Pass** (`ALL_ACCESS` in `lib/products.ts`).

After a verified prompt purchase, `/success` displays the full prompt with a
copy button (loaded from `content/prompts/<slug>.txt`). Source purchases are
fulfilled by email for now.

## Add a product

Add an entry to `PRODUCTS` in `lib/products.ts` — the store grid, product page
and checkout pick it up automatically. Set `previewUrl` to a page in `public/`
to embed a live reference build, and put the sellable prompt text in
`content/prompts/<slug>.txt` (for legacy pages, `node scripts/extract-prompts.mjs`
regenerates these).

## Preview media

Drop files in `public/previews/`, named by product slug:

- `<slug>.webp` — screenshot, used as card image / video poster
- `<slug>.mp4` or `<slug>.webm` — screen recording; auto-detected at build
  time and plays (muted loop) in the preview box

After adding a recording, rebuild/redeploy for it to be picked up.

## Deploy (Vercel)

1. Import the repo at vercel.com, framework auto-detects Next.js.
2. Set env vars: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_SITE_URL=https://brandmotion.in`.
3. Add `brandmotion.in` under Project → Domains and update DNS as Vercel
   instructs (this replaces the old GitHub Pages A-records).

`CNAME` and `.nojekyll` at the repo root only matter for the old GitHub Pages
deployment and can be deleted once DNS points at Vercel.
