import Link from "next/link";
import { notFound } from "next/navigation";
import AccessPanel from "@/components/AccessPanel";
import { hasAllAccess } from "@/lib/entitlements";
import { getPreviewMedia } from "@/lib/media";
import { PRODUCTS, getProduct } from "@/lib/products";
import { loadPrompt } from "@/lib/prompts";
import { getServerUser } from "@/lib/supabase/server";

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
  const media = getPreviewMedia(product.slug);

  const user = await getServerUser();
  const entitled = user ? await hasAllAccess(user.id) : false;
  const promptText = entitled ? await loadPrompt(product.slug) : null;

  return (
    <>
      {/* Immersive full-bleed hero — the site itself, edge to edge */}
      <section className="relative h-[72vh] min-h-[460px] w-full overflow-hidden">
        {media.video ? (
          <video
            className="product-hero-media"
            src={media.video}
            poster={media.poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : media.poster ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            className="product-hero-media"
            src={media.poster}
            alt={`${product.name} design preview`}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(212,175,55,0.22),transparent_60%)]" />
        )}
        {/* scrims for navbar + overlaid title legibility */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg via-bg/60 to-transparent" />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-full max-w-6xl px-6 pb-10">
            <Link
              href="/store"
              className="text-sm text-ink-faint transition hover:text-ink"
            >
              ← Back to store
            </Link>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {product.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line bg-bg/40 px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink-dim backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
              <span className="grad-text">{product.name}</span>
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-ink-dim">{product.tagline}</p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="max-w-2xl leading-relaxed text-ink-dim">
              {product.description}
            </p>

            {product.previewUrl && (
              <div className="card mt-10 overflow-hidden rounded-2xl">
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
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                Included in All-Access
              </p>
              <h2 className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-ink-dim">
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
              <AccessPanel
                slug={product.slug}
                name={product.name}
                signedIn={!!user}
                entitled={entitled}
                promptText={promptText}
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
