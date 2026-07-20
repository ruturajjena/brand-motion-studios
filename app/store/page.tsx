import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/products";

export const metadata = { title: "Store" };

const isCategory = (v: string | undefined): v is Category =>
  v !== undefined && v in CATEGORIES;

export default async function StorePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = isCategory(category) ? category : undefined;
  const products = active
    ? PRODUCTS.filter((p) => p.category === active)
    : PRODUCTS;

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-bold">
        {active ? (
          <span className="grad-text">{CATEGORIES[active].label}</span>
        ) : (
          <span className="grad-text">Everything in the store</span>
        )}
      </h1>
      <p className="mt-3 max-w-xl text-ink-dim">
        {active
          ? CATEGORIES[active].blurb
          : "Prompt packs, design systems and complete source code — every product backed by a live reference build."}
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
        {(Object.keys(CATEGORIES) as Category[]).map((key) => (
          <Link
            key={key}
            href={`/store?category=${key}`}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              active === key
                ? "border-line-strong text-gold-bright"
                : "border-line text-ink-dim hover:text-ink"
            }`}
          >
            {CATEGORIES[key].label}
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
