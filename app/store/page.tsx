import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, type Product } from "@/lib/products";

export const metadata = { title: "Store" };

const FILTERS: Record<string, { label: string; test: (p: Product) => boolean }> = {
  prompts: { label: "Prompts", test: (p) => p.prices.prompt !== undefined },
  "source-code": {
    label: "Source Code",
    test: (p) => p.prices.source !== undefined,
  },
  design: {
    label: "Design",
    test: (p) => p.tags.some((t) => ["design tokens", "css", "figma-ready"].includes(t)),
  },
};

export default async function StorePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category && FILTERS[category] ? category : undefined;
  const products = active ? PRODUCTS.filter(FILTERS[active].test) : PRODUCTS;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-bold">
        <span className="grad-text">
          {active ? FILTERS[active].label : "Everything in the store"}
        </span>
      </h1>
      <p className="mt-3 max-w-xl text-ink-dim">
        Every website comes with a preview of the real build — unlock the
        prompt behind it, the complete source code, or both.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/store"
          className={`rounded-full border px-4 py-1.5 text-sm transition ${
            !active
              ? "border-line-strong text-gold-bright"
              : "border-line text-ink-dim hover:text-ink"
          }`}
        >
          All
        </Link>
        {Object.entries(FILTERS).map(([key, f]) => (
          <Link
            key={key}
            href={`/store?category=${key}`}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active === key
                ? "border-line-strong text-gold-bright"
                : "border-line text-ink-dim hover:text-ink"
            }`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
