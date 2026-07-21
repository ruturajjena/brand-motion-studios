"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const clamp = (v: number, min = 0, max = 1) => Math.min(Math.max(v, min), max);
/** smoothstepped sub-progress of p across [a, b] */
const seg = (p: number, a: number, b: number) => {
  const t = clamp((p - a) / (b - a));
  return t * t * (3 - 2 * t);
};

/** [start, end] of each scene in overall banner progress (0 → 1). */
const RANGES: [number, number][] = [
  [-0.25, 0.3], // brand statement (visible immediately)
  [0.24, 0.56], // watch the real build (floating previews)
  [0.5, 0.8], // copy the prompt / own the code
  [0.74, 1.01], // all-access + CTAs (stays)
];

const FLOATERS = [
  { slug: "apex-motors-hypercar", cls: "story-float-a" },
  { slug: "taj-mahal-keynote", cls: "story-float-b" },
  { slug: "br-velluto-cafe", cls: "story-float-c" },
];

/**
 * Scroll-story banner. The section is ~3.4 viewports tall; its inner viewport
 * is pinned (sticky) while scroll progress drives four narrative scenes —
 * what the store is, live build previews, what you unlock, and the CTA.
 */
export default function ScrollBanner() {
  const root = useRef<HTMLElement>(null);
  const orbs = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const scenes = useRef<(HTMLDivElement | null)[]>([]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = root.current;
        if (!el) return;
        const total = el.offsetHeight - window.innerHeight;
        const p = clamp(-el.getBoundingClientRect().top / total);

        if (orbs.current)
          orbs.current.style.transform = `translateY(${p * -16}%) rotate(${p * 40}deg)`;
        if (bar.current) bar.current.style.transform = `scaleX(${p})`;

        scenes.current.forEach((s, i) => {
          if (!s) return;
          const [a, b] = RANGES[i];
          const enter = seg(p, a, a + (b - a) * 0.35);
          const exit = i === RANGES.length - 1 ? 0 : seg(p, b - (b - a) * 0.25, b);
          const vis = enter * (1 - exit);
          s.style.opacity = String(vis);
          s.style.transform = `translateY(${(1 - enter) * 70 - exit * 70}px) scale(${
            0.95 + vis * 0.05
          })`;
          s.style.pointerEvents = vis > 0.5 ? "auto" : "none";
          // some browsers park autoplay for media that mounted invisible —
          // nudge the floating previews as their scene comes in
          if (i === 1 && vis > 0.3) {
            s.querySelectorAll("video").forEach((v) => {
              if (v.paused) v.play().catch(() => {});
            });
          }
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  /* Reduced motion: one static, readable hero instead of the scroll story */
  if (reduced) {
    return (
      <section className="relative overflow-hidden px-6 py-28 text-center">
        <p className="mx-auto w-fit rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-ink-faint">
          Brand Motion Studios
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl">
          <span className="shimmer">Websites that move.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink-dim">
          Watch real builds, copy the exact prompt behind them, or own the
          complete source code — every product is a living website.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
    );
  }

  return (
    <section ref={root} className="relative h-[340vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Drifting background orbs */}
        <div ref={orbs} className="absolute inset-0 will-change-transform" aria-hidden>
          <div
            className="story-orb"
            style={{ width: 380, height: 380, top: "8%", left: "10%", background: "#d4af37" }}
          />
          <div
            className="story-orb"
            style={{ width: 420, height: 420, bottom: "4%", right: "8%", background: "#8a7bb8", opacity: 0.35 }}
          />
        </div>

        {/* Scene 1 — brand statement */}
        <div
          ref={(el) => { scenes.current[0] = el; }}
          className="story-scene"
          style={{ opacity: 1 }}
        >
          <p className="mx-auto w-fit rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-ink-faint">
            Brand Motion Studios
          </p>
          <h1 className="mt-7 font-display text-6xl font-bold leading-[1.02] tracking-tight sm:text-8xl">
            <span className="shimmer">Websites</span>
            <br />
            <span className="text-ink">that move.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-md text-lg text-ink-dim">
            A store of cinematic, scroll-driven website experiences — from a
            studio obsessed with motion.
          </p>
          <div className="mt-14 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-faint">
            Scroll
            <span className="story-chevron" aria-hidden>⌄</span>
          </div>
        </div>

        {/* Scene 2 — living previews */}
        <div
          ref={(el) => { scenes.current[1] = el; }}
          className="story-scene"
          style={{ opacity: 0 }}
        >
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            {FLOATERS.map((f) => (
              <video
                key={f.slug}
                className={`story-video ${f.cls}`}
                src={`/previews/${f.slug}.mp4`}
                poster={`/previews/${f.slug}.webp`}
                autoPlay
                muted
                loop
                playsInline
              />
            ))}
          </div>
          <h2 className="relative font-display text-5xl font-bold tracking-tight sm:text-6xl">
            <span className="grad-text">Watch the real build.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-md text-lg text-ink-dim">
            Every preview is the actual website running — not a mockup, not a
            render. What you see is what you ship.
          </p>
        </div>

        {/* Scene 3 — what you unlock */}
        <div
          ref={(el) => { scenes.current[2] = el; }}
          className="story-scene"
          style={{ opacity: 0 }}
        >
          <h2 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            <span className="text-ink">Copy the </span>
            <span className="gold-text">prompt.</span>
            <br />
            <span className="text-ink">Own the </span>
            <span className="gold-text">code.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-ink-dim">
            Unlock the exact prompt that generated the site, or take the
            complete production source. Commercial license included.
          </p>
        </div>

        {/* Scene 4 — CTA (stays) */}
        <div
          ref={(el) => { scenes.current[3] = el; }}
          className="story-scene"
          style={{ opacity: 0 }}
        >
          <h2 className="font-display text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="shimmer">Or unlock everything.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-ink-dim">
            One All-Access pass opens every prompt and every source drop —
            including everything we release next.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
        </div>

        {/* Progress bar */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-surface">
          <div
            ref={bar}
            className="h-full origin-left bg-gradient-to-r from-gold-bright to-gold"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </section>
  );
}
