import Link from "next/link";
import LiquidGlass from "@/components/LiquidGlass";
import PlanButton from "@/components/PlanButton";
import { PLANS, formatPrice } from "@/lib/products";

export const metadata = {
  title: "Pricing",
  description:
    "All-Access to every Brand Motion prompt pack and source download — monthly, yearly or lifetime.",
};

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="text-center" data-reveal>
        <p className="mx-auto w-fit rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink-faint">
          All-Access
        </p>
        <h1 className="mx-auto mt-5 max-w-2xl font-display text-5xl font-bold tracking-tight">
          <span className="shimmer">One pass.</span>{" "}
          <span className="text-ink">Every design.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-dim">
          Unlock every prompt pack and source download in the store — plus
          everything we release next. Or buy items one at a time, no pass
          needed.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <div
            key={plan.id}
            data-reveal
            style={{ "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties}
            className={plan.highlight ? "lg:-mt-3 lg:mb-3" : ""}
          >
            <LiquidGlass
              className={`flex h-full flex-col p-8 ${
                plan.highlight ? "ring-1 ring-[color:var(--border-strong)]" : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-bright to-gold px-4 py-1 text-xs font-semibold text-black">
                  Most popular
                </span>
              )}
              <h2 className="font-display text-xl font-bold">{plan.name}</h2>
              <p className="mt-4 font-display text-5xl font-bold text-gold-bright">
                {formatPrice(plan.price)}
                <span className="ml-1 text-base font-normal text-ink-faint">
                  {plan.cadence}
                </span>
              </p>
              <p className="mt-3 text-sm text-ink-dim">{plan.blurb}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-sm text-ink-dim">
                    <span className="text-gold">✦</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PlanButton plan={plan.id} highlight={plan.highlight} />
              </div>
            </LiquidGlass>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ink-faint" data-reveal>
        Prefer a single design? Every item can be bought once from{" "}
        <Link href="/store" className="text-gold transition hover:text-gold-bright">
          the store
        </Link>
        . Questions? Check the{" "}
        <Link href="/faq" className="text-gold transition hover:text-gold-bright">
          FAQ
        </Link>
        .
      </p>
    </div>
  );
}
