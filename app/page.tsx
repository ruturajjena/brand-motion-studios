import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { ALL_ACCESS, PRODUCTS, formatPrice } from "@/lib/products";

const categories = [
  {
    key: "prompts",
    label: "Prompts",
    blurb:
      "Battle-tested AI prompt packs that produce premium, ready-to-ship websites.",
  },
  {
    key: "design",
    label: "Design",
    blurb:
      "Polished visual systems — layouts, tokens and asset packs you can lift straight into your brand.",
  },
  {
    key: "source-code",
    label: "Source Code",
    blurb:
      "Complete, production-ready sites. Clean code you own outright.",
  },
];

const steps = [
  {
    title: "Watch the build",
    body: "Every product opens with a recording of the real website — see exactly what the prompt produces before you pay.",
  },
  {
    title: "Unlock what you need",
    body: "Copy the prompt, grab the source code, or subscribe once for All-Access to everything.",
  },
  {
    title: "Ship something premium",
    body: "Paste the prompt, drop in the code, or apply the design system. You own what you make with it.",
  },
];

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-24 text-center sm:pt-32">
        <p className="mx-auto w-fit rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink-faint">
          The Brand Motion Store
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          <span className="grad-text">Prompts, design & code</span>
          <br />
          <span className="text-ink">for websites that move.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-dim">
          The exact prompt packs, design systems and source code behind our
          studio builds — packaged so you can ship the same quality yourself.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/store" className="btn-gold rounded-full px-8 py-3.5">
            Browse all products
          </Link>
          <a
            href="/studio.html"
            className="rounded-full border border-line px-8 py-3.5 text-ink-dim transition hover:border-line-strong hover:text-ink"
          >
            Need custom work?
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.key}
              href={`/store?category=${c.key}`}
              className="card rounded-2xl p-7"
            >
              <h2 className="font-display text-2xl font-bold gold-text w-fit">
                {c.label}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                {c.blurb}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold">Featured drops</h2>
          <Link href="/store" className="text-sm text-gold transition hover:text-gold-bright">
            View all →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <h2 className="text-center font-display text-3xl font-bold">
            Simple process. <span className="gold-text">Serious output.</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="card rounded-2xl p-7">
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

      {/* All-Access */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-20">
        <div className="card flex flex-col items-start justify-between gap-6 rounded-2xl border-line-strong p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">
              <span className="gold-text">{ALL_ACCESS.name}</span> —{" "}
              {formatPrice(ALL_ACCESS.price)}/mo
            </h2>
            <p className="mt-2 max-w-xl text-sm text-ink-dim">{ALL_ACCESS.blurb}</p>
          </div>
          <Link
            href="/store"
            className="btn-gold shrink-0 rounded-full px-7 py-3 text-sm"
          >
            Unlock everything
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl font-bold">
          Ready to make your next build{" "}
          <span className="grad-text">unmistakably premium?</span>
        </h2>
        <Link href="/store" className="btn-gold mt-8 inline-block rounded-full px-8 py-3.5">
          Start browsing
        </Link>
      </section>
    </>
  );
}
