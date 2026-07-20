import Link from "next/link";
import { CATEGORIES, formatPrice, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/store/${product.slug}`}
      className="card group flex flex-col rounded-2xl p-6"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-line px-3 py-1 text-xs uppercase tracking-wider text-ink-faint">
          {CATEGORIES[product.category].label}
        </span>
        <span className="font-display text-lg font-semibold text-gold-bright">
          {formatPrice(product.price)}
        </span>
      </div>
      <h3 className="mt-4 font-display text-xl font-bold group-hover:grad-text">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-ink-dim">{product.tagline}</p>
      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-faint">
        {product.description}
      </p>
      <span className="mt-5 text-sm font-medium text-gold">
        View details →
      </span>
    </Link>
  );
}
