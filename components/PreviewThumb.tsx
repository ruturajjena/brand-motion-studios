import type { Product } from "@/lib/products";

/**
 * Design preview box (getlayers-style card thumbnail).
 *
 * Shows a real screenshot of the product's reference build
 * (captured at 1280x800, stored in /public/previews/<slug>.webp).
 * The product detail page embeds the fully live build; cards stay light.
 */
export default function PreviewThumb({ product }: { product: Product }) {
  return (
    <div className="preview-thumb relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-black">
      {product.previewUrl ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/previews/${product.slug}.webp`}
            alt={`${product.name} design preview`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </>
      ) : (
        /* Products without a reference build get a token-swatch tile */
        <div className="flex h-full w-full flex-col justify-between bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(212,175,55,0.22),transparent_60%)] p-5">
          <div className="flex gap-2">
            {["#d4af37", "#f0d488", "#cdd1d8", "#0e0e10"].map((c) => (
              <span
                key={c}
                className="h-8 w-8 rounded-full border border-line"
                style={{ background: c }}
              />
            ))}
          </div>
          <div>
            <p className="font-display text-2xl font-bold grad-text w-fit">Aa</p>
            <div className="mt-2 h-1.5 w-2/3 rounded-full bg-gradient-to-r from-gold-bright via-gold to-transparent" />
            <div className="mt-1.5 h-1.5 w-1/3 rounded-full bg-surface-2" />
          </div>
        </div>
      )}
    </div>
  );
}
