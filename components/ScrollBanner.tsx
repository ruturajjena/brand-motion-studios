"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

/**
 * Interactive scroll banner. As the page scrolls through the banner, layers
 * parallax at different rates, the glass panel lifts + fades, and the headline
 * drifts — an Apple-keynote feel driven by a single rAF scroll handler.
 */
export default function ScrollBanner() {
  const root = useRef<HTMLDivElement>(null);
  const glass = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);
  const orbs = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const el = root.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // progress 0 (banner top at viewport top) → 1 (scrolled one banner height)
        const p = Math.min(Math.max(-rect.top / rect.height, 0), 1);
        if (bg.current) bg.current.style.transform = `translateY(${p * 18}%) scale(${1 + p * 0.12})`;
        if (orbs.current) orbs.current.style.transform = `translateY(${p * -30}%)`;
        if (title.current) {
          title.current.style.transform = `translateY(${p * -60}px)`;
          title.current.style.opacity = `${1 - p * 1.1}`;
        }
        if (glass.current) {
          glass.current.style.transform = `translateY(${p * 40}px) scale(${1 - p * 0.06})`;
          glass.current.style.opacity = `${1 - p * 0.85}`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const chips = ["Prompts", "Design systems", "Source code", "Live previews", "All-Access", "Ship premium"];

  return (
    <section ref={root} className="scroll-banner">
      {/* Parallax gradient wash */}
      <div
        ref={bg}
        className="scroll-banner__layer"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 18%, rgba(212,175,55,0.16), transparent 60%)",
        }}
      />
      {/* Drifting glass orbs */}
      <div ref={orbs} className="scroll-banner__layer">
        <div
          className="scroll-banner__orb"
          style={{ width: 320, height: 320, top: "12%", left: "12%", background: "#d4af37" }}
        />
        <div
          className="scroll-banner__orb"
          style={{ width: 360, height: 360, bottom: "8%", right: "10%", background: "#8a7bb8", opacity: 0.4 }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1
          ref={title}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
        >
          <span className="shimmer">Websites</span>{" "}
          <span className="text-ink">that move.</span>
        </h1>

        {/* Liquid glass card */}
        <div ref={glass} className="scroll-banner__glass glass mt-10">
          <p className="text-lg text-ink-dim">
            Prompt packs, design systems and production-ready source code — each
            with a live preview of the real build. Unlock one, or go All-Access.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/store" className="btn-gold rounded-full px-7 py-3">
              Browse the store
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-line px-7 py-3 text-ink-dim transition hover:border-line-strong hover:text-ink"
            >
              See All-Access plans
            </Link>
          </div>
        </div>
      </div>

      {/* Glass marquee strip at the bottom of the banner */}
      <div className="absolute bottom-6 left-0 right-0 z-10 overflow-hidden">
        <div className="marquee gap-10 text-sm uppercase tracking-[0.25em] text-ink-faint">
          {[...chips, ...chips].map((c, i) => (
            <span key={i} className="flex items-center gap-10">
              {c} <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
