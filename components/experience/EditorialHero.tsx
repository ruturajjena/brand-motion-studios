"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Editorial hero. One pinned viewport, one dominant message.
 *
 * On scroll the headline slowly scales down and fades, the gold light
 * drifts, the blueprint grid breathes up a few percent — and the
 * marketplace rises over the pinned hero (pinSpacing: false), so the hero
 * appears to become the store. No fades to black, no blank frames.
 */
export default function EditorialHero() {
  const root = useRef<HTMLElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const light = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced || !root.current || !inner.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: "+=85%",
        pin: inner.current,
        pinSpacing: false,
        scrub: 0.9,
        anticipatePin: 1,
      },
    });
    // Copy settles + clears early so it never competes with the store heading
    // rising over it; the light + grid keep drifting across the whole pin.
    tl.to(copy.current, { scale: 0.92, autoAlpha: 0, yPercent: -5, duration: 0.45 }, 0)
      .to(light.current, { xPercent: 10, yPercent: -16, opacity: 0.5, duration: 1 }, 0)
      .to(grid.current, { opacity: 0.09, duration: 1 }, 0);

    const t = setTimeout(() => ScrollTrigger.refresh(), 400);
    return () => {
      clearTimeout(t);
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [reduced]);

  return (
    <section ref={root} className="relative z-0 h-screen">
      <div ref={inner} className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Blueprint grid — 5%, breathes to 9% while leaving */}
        <div ref={grid} className="editorial-grid" aria-hidden />

        {/* One slow gold light, almost invisible */}
        <div ref={light} className="editorial-light" aria-hidden />

        <div ref={copy} className="relative px-6 text-center will-change-transform">
          <p className="hline hline-1 text-[11px] uppercase tracking-[0.45em] text-ink-faint">
            Brand Motion Studios
          </p>
          <h1 className="mt-8 font-tight font-semibold leading-[0.98] tracking-[-0.03em] text-ink text-[clamp(3.5rem,9.5vw,7.5rem)]">
            <span className="hline hline-2 block">Designs worth</span>
            <span className="hline hline-3 block">
              <span className="gold-text">collecting.</span>
            </span>
          </h1>
          <p className="hline hline-4 mx-auto mt-9 max-w-md text-base text-ink-dim sm:text-lg">
            A private archive of cinematic websites — with the exact prompt and
            source behind each one.
          </p>
          <div className="hline hline-5 mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/store" className="pill pill--gold">
              Explore Store
            </Link>
            <Link href="/pricing" className="pill pill--ghost">
              Get All Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
