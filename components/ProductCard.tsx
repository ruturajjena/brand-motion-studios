import Link from "next/link";
import PreviewThumb from "@/components/PreviewThumb";
import { CATEGORIES, formatPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/store/${product.slug}`}
      className="card group flex flex-col rounded-2xl p-3"
    >
      <PreviewThumb product={product} />
      <div className="flex flex-1 flex-col p-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-snug">
            {product.name}
          </h3>
          <span className="font-display text-lg font-semibold text-gold-bright">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="mt-1 flex-1 text-sm text-ink-dim">{product.tagline}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink-faint">
            {CATEGORIES[product.category].label}
          </span>
          {product.previewUrl && (
            <span className="rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink-faint">
              Live preview
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
