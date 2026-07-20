import Link from "next/link";
import { notFound } from "next/navigation";
import PreviewThumb from "@/components/PreviewThumb";
import UnlockButtons from "@/components/UnlockButtons";
import { PRODUCTS, formatPrice, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product?.name ?? "Product",
    description: product?.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      <Link href="/store" className="text-sm text-ink-faint transition hover:text-ink">
        ← Back to store
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink-faint"
              >
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            <span className="grad-text">{product.name}</span>
          </h1>
          <p className="mt-3 text-lg text-ink-dim">{product.tagline}</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-dim">
            {product.description}
          </p>

          <div className="mt-10">
            <PreviewThumb product={product} />
          </div>

          {product.previewUrl && (
            <div className="card mt-6 overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <span className="text-sm text-ink-faint">Live reference build</span>
                <a
                  href={product.previewUrl}
                  target="_blank"
                  className="text-sm text-gold transition hover:text-gold-bright"
                >
                  Open full screen ↗
                </a>
              </div>
              <iframe
                src={product.previewUrl}
                title={`${product.name} preview`}
                className="h-[480px] w-full bg-black"
                loading="lazy"
              />
            </div>
          )}
        </div>

        <aside className="h-fit lg:sticky lg:top-24">
          <div className="card rounded-2xl p-7">
            <div className="flex items-baseline gap-3">
              {product.prices.prompt && (
                <p className="font-display text-3xl font-bold text-gold-bright">
                  {formatPrice(product.prices.prompt)}
                  <span className="ml-1 text-sm font-normal text-ink-faint">
                    prompt
                  </span>
                </p>
              )}
              {product.prices.source && (
                <p className="font-display text-3xl font-bold text-silver">
                  {formatPrice(product.prices.source)}
                  <span className="ml-1 text-sm font-normal text-ink-faint">
                    source
                  </span>
                </p>
              )}
            </div>
            <p className="mt-1 text-sm text-ink-faint">
              One-time purchase or All-Access subscription
            </p>
            <div className="mt-6">
              <UnlockButtons
                slug={product.slug}
                name={product.name}
                prices={product.prices}
                size="lg"
              />
            </div>
            <h2 className="mt-8 font-display text-sm font-bold uppercase tracking-wider text-ink-dim">
              What&apos;s included
            </h2>
            <ul className="mt-4 space-y-3">
              {product.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-dim">
                  <span className="text-gold">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
