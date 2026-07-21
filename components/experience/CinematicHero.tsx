"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/experience/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

export type HeroCard = { slug: string; name: string };

const clamp = (v: number, a = 0, b = 1) => Math.min(Math.max(v, a), b);
/** smoothstepped progress of p across [a,b] */
const seg = (p: number, a: number, b: number) => {
  const t = clamp((p - a) / (b - a));
  return t * t * (3 - 2 * t);
};
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type Slot = { x: number; y: number; r: number; s: number; blur: number; at: number };

/** Scattered 3D-ish rest state + tidy grid target for each floating card. */
function layout(n: number): { scatter: Slot; grid: Slot }[] {
  const cols = 4;
  return Array.from({ length: n }, (_, i) => {
    const ring = i === 0 ? 0 : i < 4 ? 1 : i < 8 ? 2 : 3;
    const ang = (i * 137.5 * Math.PI) / 180;
    const rad = ring * 15;
    const depth = ring / 3; // 0 near → 1 far
    const scatter: Slot = {
      x: i === 0 ? 0 : Math.cos(ang) * (rad + 8),
      y: i === 0 ? 0 : Math.sin(ang) * (rad * 0.62 + 4),
      r: i === 0 ? -4 : (Math.sin(i * 2.3) * 12),
      s: i === 0 ? 1 : lerp(0.82, 0.44, depth),
      blur: i === 0 ? 0 : depth * 5,
      at: i === 0 ? 0.4 : 0.54 + (i / n) * 0.16,
    };
    const gx = (i % cols) - (cols - 1) / 2;
    const gy = Math.floor(i / cols) - 1;
    const grid: Slot = { x: gx * 21, y: gy * 26, r: 0, s: 0.62, blur: 0, at: scatter.at };
    return { scatter, grid };
  });
}

export default function CinematicHero({ cards }: { cards: HeroCard[] }) {
  const outer = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const scene1 = useRef<HTMLDivElement>(null);
  const line1 = useRef<HTMLDivElement>(null);
  const line2 = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const blueprint = useRef<HTMLDivElement>(null);
  const bpPaths = useRef<SVGPathElement[]>([]);
  const parallax = useRef<HTMLDivElement>(null);
  const cardEls = useRef<HTMLDivElement[]>([]);
  const labels = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  const slots = useMemo(() => layout(cards.length), [cards.length]);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced || !outer.current || !pin.current) return;
    const set = cardEls.current.map((el) => gsap.quickSetter(el, "css"));

    const render = (p: number) => {
      // Scene 1 — statement
      if (scene1.current) {
        const vis = 1 - seg(p, 0.15, 0.22);
        scene1.current.style.opacity = String(vis);
        scene1.current.style.transform = `translateY(${seg(p, 0.1, 0.22) * -60}px)`;
      }
      if (spot.current) {
        const g = seg(p, 0, 0.14);
        spot.current.style.opacity = String(0.15 + g * 0.85);
        spot.current.style.transform = `translate(-50%,-50%) scale(${lerp(0.3, 1.15, g)})`;
      }
      if (line1.current) line1.current.style.opacity = String(seg(p, 0.02, 0.08));
      if (line2.current) line2.current.style.opacity = String(seg(p, 0.09, 0.15));

      // Scene 2 — blueprint drawing itself
      if (blueprint.current) {
        blueprint.current.style.opacity = String(
          seg(p, 0.17, 0.25) * (1 - seg(p, 0.36, 0.44))
        );
      }
      const draw = seg(p, 0.18, 0.36);
      bpPaths.current.forEach((path, i) => {
        const len = path.getTotalLength();
        const d = clamp(draw * 1.5 - i * 0.04);
        path.style.strokeDashoffset = String(len * (1 - d));
      });

      // Cards — scenes 3→5
      const toGrid = seg(p, 0.74, 0.96);
      const fadeOut = seg(p, 0.9, 1);
      cardEls.current.forEach((el, i) => {
        if (!el) return;
        const { scatter, grid } = slots[i];
        const appear = seg(p, scatter.at, scatter.at + 0.07);
        const x = lerp(scatter.x, grid.x, toGrid);
        const y = lerp(scatter.y, grid.y, toGrid);
        const r = lerp(scatter.r, grid.r, toGrid);
        const s = lerp(scatter.s, grid.s, toGrid) * lerp(0.7, 1, appear);
        const blur = lerp(scatter.blur, grid.blur, toGrid);
        set[i]({
          opacity: appear * (1 - fadeOut) * (i === 0 ? 1 : 0.96),
          filter: `blur(${blur}px)`,
          transform: `translate(-50%,-50%) translate(${x}vw, ${y}vh) rotate(${r}deg) scale(${s})`,
          zIndex: Math.round(100 - scatter.blur * 8),
        });
      });

      // Scene 3 labels
      if (labels.current) {
        labels.current.style.opacity = String(
          seg(p, 0.44, 0.52) * (1 - seg(p, 0.62, 0.7))
        );
      }
    };

    const st = ScrollTrigger.create({
      trigger: outer.current,
      start: "top top",
      end: "bottom bottom",
      pin: pin.current,
      anticipatePin: 1,
      onUpdate: (self) => render(self.progress),
      onRefreshInit: () => render(0),
    });
    render(0);
    const t = setTimeout(() => ScrollTrigger.refresh(), 400);

    // Mouse parallax on the blueprint / particle field
    const onMove = (e: PointerEvent) => {
      if (!parallax.current) return;
      const dx = (e.clientX / window.innerWidth - 0.5) * 24;
      const dy = (e.clientY / window.innerHeight - 0.5) * 24;
      parallax.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      clearTimeout(t);
      window.removeEventListener("pointermove", onMove);
      st.kill();
    };
  }, [reduced, slots]);

  /* Reduced motion → calm static hero */
  if (reduced) {
    return (
      <section className="relative overflow-hidden px-6 py-32 text-center">
        <h1 className="mx-auto max-w-4xl text-balance font-tight text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl">
          Beautiful websites don&apos;t begin with code.{" "}
          <span className="gold-text">They begin with ideas.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg text-ink-dim">
          A design archive of cinematic, scroll-driven websites — with the exact
          prompt and the complete source behind each one.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/store">Enter the archive</MagneticButton>
          <MagneticButton href="/pricing" variant="glass">
            All-Access
          </MagneticButton>
        </div>
      </section>
    );
  }

  return (
    <section ref={outer} className="relative h-[300vh]">
      <div ref={pin} className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Spotlight */}
        <div ref={spot} className="hero-spotlight" aria-hidden />

        {/* Parallax field: blueprint + particles */}
        <div ref={parallax} className="absolute inset-0 will-change-transform" aria-hidden>
          <div ref={blueprint} className="absolute inset-0 opacity-0">
            <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
              {[
                "M0 300 H1440", "M0 600 H1440", "M360 0 V900", "M720 0 V900",
                "M1080 0 V900", "M180 150 H1260 V750 H180 Z", "M720 450 m-200 0 a200 200 0 1 0 400 0 a200 200 0 1 0 -400 0",
                "M480 450 H960", "M720 250 V650",
              ].map((d, i) => (
                <path
                  key={i}
                  ref={(el) => { if (el) bpPaths.current[i] = el; }}
                  d={d}
                  className="hero-bp-line"
                  style={{ strokeDasharray: 4000, strokeDashoffset: 4000 }}
                />
              ))}
            </svg>
          </div>
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className="hero-particle"
              style={{
                left: `${(i * 61) % 100}%`,
                top: `${(i * 37) % 100}%`,
                animationDelay: `${(i % 5) * 0.8}s`,
                animationDuration: `${7 + (i % 4)}s`,
              }}
            />
          ))}
        </div>

        {/* Scene 1 — statement */}
        <div ref={scene1} className="relative z-10 px-6 text-center">
          <p className="mx-auto mb-10 w-fit text-xs uppercase tracking-[0.4em] text-ink-faint">
            Brand Motion Studios
          </p>
          <h1 className="font-tight text-5xl font-semibold leading-[1.02] tracking-tight sm:text-8xl">
            <span ref={line1} className="block opacity-0">
              Beautiful websites
              <br /> don&apos;t begin with code.
            </span>
            <span ref={line2} className="mt-4 block opacity-0">
              They begin with <span className="gold-text">ideas.</span>
            </span>
          </h1>
        </div>

        {/* Floating cards (scenes 3→5) */}
        <div className="pointer-events-none absolute inset-0">
          {cards.map((c, i) => (
            <div
              key={c.slug + i}
              ref={(el) => { if (el) cardEls.current[i] = el; }}
              className="hero-card"
              style={{ opacity: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/previews/${c.slug}.webp`} alt="" loading="lazy" />
              <span className="hero-card__sheen" />
            </div>
          ))}
        </div>

        {/* Scene 3 labels */}
        <div ref={labels} className="pointer-events-none absolute inset-0 z-20 opacity-0">
          <div className="absolute left-1/2 top-[18%] -translate-x-1/2 text-center">
            <span className="font-tight text-3xl font-semibold sm:text-5xl">
              <span className="gold-text">{cards[0]?.name ?? "Taj Mahal"}</span>
            </span>
          </div>
          <div className="absolute left-[12%] top-1/2 hidden text-sm uppercase tracking-[0.25em] text-ink-dim sm:block">
            The prompt
          </div>
          <div className="absolute right-[12%] top-[42%] hidden text-sm uppercase tracking-[0.25em] text-ink-dim sm:block">
            Source code
          </div>
          <div className="absolute right-[16%] bottom-[24%] hidden text-sm uppercase tracking-[0.25em] text-ink-dim sm:block">
            Live preview
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ink-faint">
          Scroll
          <span className="story-chevron">⌄</span>
        </div>
      </div>

      {/* Sticky CTA that lives past the archive intro */}
      <Link href="/store" className="sr-only">
        Browse the store
      </Link>
    </section>
  );
}
