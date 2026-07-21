import Link from "next/link";
import CinematicHero from "@/components/experience/CinematicHero";
import MagneticButton from "@/components/experience/MagneticButton";
import ProductCard from "@/components/ProductCard";
import { getPreviewMedia } from "@/lib/media";
import { PLANS, PRODUCTS, formatPrice } from "@/lib/products";

export default function Home() {
  const entries = PRODUCTS.map((product) => ({
    product,
    media: getPreviewMedia(product.slug),
  }));
  const heroCards = PRODUCTS.map((p) => ({ slug: p.slug, name: p.name }));

  return (
    <>
      {/* Scene 1→5 cinematic intro that lands you inside the archive */}
      <CinematicHero cards={heroCards} />

      {/* The marketplace */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <p className="mx-auto w-fit text-xs uppercase tracking-[0.35em] text-ink-faint">
            The archive
          </p>
          <h2 className="mt-5 font-tight text-4xl font-semibold tracking-tight sm:text-6xl">
            Every idea, <span className="gold-text">in motion.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-ink-dim">
            Explore the full collection. Each is a living website — copy the
            prompt behind it, own the source, or unlock everything.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {entries.map(({ product, media }, i) => (
            <div
              key={product.slug}
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 0.08}s` } as React.CSSProperties}
            >
              <ProductCard product={product} media={media} />
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center" data-reveal>
          <MagneticButton href="/store" variant="glass">
            Open the full store
          </MagneticButton>
        </div>
      </section>

      {/* All-Access */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24">
        <div className="text-center" data-reveal>
          <h2 className="font-tight text-4xl font-semibold tracking-tight sm:text-6xl">
            One pass. <span className="gold-text">Every design.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Link
              key={plan.id}
              href="/pricing"
              className={`glass glass-panel block p-8 text-center transition-transform hover:-translate-y-1.5 ${
                plan.highlight ? "ring-1 ring-[color:var(--border-strong)]" : ""
              }`}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <p className="font-display font-bold">{plan.name}</p>
              <p className="mt-4 font-tight text-5xl font-semibold text-gold-bright">
                {formatPrice(plan.price)}
                <span className="ml-1 text-sm font-normal text-ink-faint">
                  {plan.cadence}
                </span>
              </p>
              <p className="mt-4 text-sm text-ink-dim">{plan.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto w-full max-w-6xl px-6 py-28 text-center">
        <h2 className="mx-auto max-w-3xl font-tight text-5xl font-semibold tracking-tight sm:text-7xl" data-reveal>
          The most premium website archive
          <span className="gold-text"> you&apos;ve ever scrolled.</span>
        </h2>
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
          data-reveal
          style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
        >
          <MagneticButton href="/store">Enter the archive</MagneticButton>
          <MagneticButton href="/pricing" variant="glass">
            See All-Access
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
