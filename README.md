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

## Add a product

Add an entry to `PRODUCTS` in `lib/products.ts` — the store grid, product page
and checkout pick it up automatically. Set `previewUrl` to a page in `public/`
to embed a live reference build.

## Deploy (Vercel)

1. Import the repo at vercel.com, framework auto-detects Next.js.
2. Set env vars: `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_SITE_URL=https://brandmotion.in`.
3. Add `brandmotion.in` under Project → Domains and update DNS as Vercel
   instructs (this replaces the old GitHub Pages A-records).

`CNAME` and `.nojekyll` at the repo root only matter for the old GitHub Pages
deployment and can be deleted once DNS points at Vercel.
