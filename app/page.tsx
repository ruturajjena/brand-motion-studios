import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getPreviewMedia } from "@/lib/media";
import { PLANS, PRODUCTS, formatPrice } from "@/lib/products";

const steps = [
  {
    title: "Watch the build",
    body: "Every product opens with a recording of the real website — see exactly what the prompt produces before you pay.",
  },
  {
    title: "Unlock what you need",
    body: "Copy the prompt, grab the source code, or go All-Access — monthly, yearly or lifetime.",
  },
  {
    title: "Ship something premium",
    body: "Paste the prompt, drop in the code, or apply the design system. You own what you make with it.",
  },
];

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).map((product) => ({
    product,
    media: getPreviewMedia(product.slug),
  }));

  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 pb-24 pt-24 text-center sm:pt-32">
        <div className="hero-ring" aria-hidden />
        <p
          className="mx-auto w-fit rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink-faint"
          data-reveal
        >
          The Brand Motion Store
        </p>
        <h1
          className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          data-reveal
          style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
        >
          <span className="shimmer">Prompts, design & code</span>
          <br />
          <span className="text-ink">for websites that move.</span>
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl text-lg text-ink-dim"
          data-reveal
          style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
        >
          The exact prompt packs, design systems and source code behind our
          studio builds — packaged so you can ship the same quality yourself.
        </p>
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          data-reveal
          style={{ "--reveal-delay": "0.3s" } as React.CSSProperties}
        >
          <Link href="/store" className="btn-gold rounded-full px-8 py-3.5">
            Browse the store
          </Link>
          <Link
            href="/pricing"
            className="rounded-full border border-line px-8 py-3.5 text-ink-dim transition hover:border-line-strong hover:text-ink"
          >
            See All-Access plans
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between" data-reveal>
          <h2 className="font-display text-3xl font-bold">Featured drops</h2>
          <Link href="/store" className="text-sm text-gold transition hover:text-gold-bright">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(({ product, media }, i) => (
            <div
              key={product.slug}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <ProductCard product={product} media={media} />
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-center font-display text-3xl font-bold" data-reveal>
            Simple process. <span className="gold-text">Serious output.</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="card rounded-2xl p-7"
                data-reveal
                style={{ "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties}
              >
                <span className="font-display text-sm font-bold text-gold">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans teaser */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-20">
        <h2 className="text-center font-display text-3xl font-bold" data-reveal>
          <span className="gold-text">All-Access</span> — one pass, every design.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Link
              key={plan.id}
              href="/pricing"
              className={`card rounded-2xl p-7 text-center ${
                plan.highlight ? "border-line-strong" : ""
              }`}
              data-reveal
              style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <p className="font-display font-bold">{plan.name}</p>
              <p className="mt-3 font-display text-4xl font-bold text-gold-bright">
                {formatPrice(plan.price)}
                <span className="ml-1 text-sm font-normal text-ink-faint">
                  {plan.cadence}
                </span>
              </p>
              <p className="mt-3 text-sm text-ink-dim">{plan.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold" data-reveal>
          Ready to make your next build{" "}
          <span className="shimmer">unmistakably premium?</span>
        </h2>
        <div data-reveal style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}>
          <Link href="/store" className="btn-gold mt-8 inline-block rounded-full px-8 py-3.5">
            Start browsing
          </Link>
        </div>
      </section>
    </>
  );
}
