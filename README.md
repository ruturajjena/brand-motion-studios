# Brand Motion Studios — brandmotion.in

The Brand Motion Studios storefront — selling **AI prompt packs, design systems
and production-ready source code** for websites that move.

Built with **Next.js 16 (App Router) + Tailwind CSS v4 + Lemon Squeezy Checkout**.

## Structure

| Path | Purpose |
|------|---------|
| `app/` | Storefront pages — home, `/store`, `/store/[slug]`, `/success` |
| `app/api/checkout/` | Creates Lemon Squeezy checkouts |
| `lib/products.ts` | The product catalog (edit here to add/remove products) |
| `lib/lemonsqueezy.ts` | Lemon Squeezy client + plan↔variant mapping |
| `components/` | Navbar, Footer, ProductCard, BuyButton |
| `public/` | Legacy static site — old URLs like `/taj-mahal.html` still work; the old studio homepage lives at `/studio.html` |

## Develop

```bash
npm install
cp .env.example .env.local   # add your Lemon Squeezy API key
npm run dev                  # http://localhost:3000
```

Without `LEMONSQUEEZY_API_KEY` the site runs fine; the Buy button reports
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
2. Set env vars: `LEMONSQUEEZY_API_KEY`, `LEMONSQUEEZY_WEBHOOK_SECRET`,
   `LEMONSQUEEZY_STORE_ID`, `LEMONSQUEEZY_VARIANT_MONTHLY`,
   `LEMONSQUEEZY_VARIANT_YEARLY`, `LEMONSQUEEZY_VARIANT_LIFETIME`,
   `NEXT_PUBLIC_SITE_URL=https://brandmotion.in`.
3. Add `brandmotion.in` under Project → Domains and update DNS as Vercel
   instructs (this replaces the old GitHub Pages A-records).

`CNAME` and `.nojekyll` at the repo root only matter for the old GitHub Pages
deployment and can be deleted once DNS points at Vercel.
