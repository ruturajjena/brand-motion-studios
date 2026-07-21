"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Intro veil: black screen, monogram, a golden line that draws itself while a
 * blueprint grid fades up and the percentage counts to 100 — then the whole
 * veil lifts to reveal the hero. Shows once per tab session.
 */
export default function LoadingScreen() {
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("bm-intro")) {
      setGone(true);
      return;
    }
    document.documentElement.classList.add("intro-lock");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 500 : 2100;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("bm-intro", "1");
        root.current?.classList.add("intro-out");
        setTimeout(() => {
          document.documentElement.classList.remove("intro-lock");
          setGone(true);
        }, 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (gone) return null;

  return (
    <div ref={root} className="intro" role="status" aria-label="Loading">
      <div className="intro-blueprint" aria-hidden />
      <div className="intro-center">
        <svg width="72" height="72" viewBox="0 0 72 72" className="intro-mark" aria-hidden>
          <circle cx="36" cy="36" r="34" className="intro-ring" />
          <path d="M22 48 V24 h9 a7 7 0 0 1 0 14 h-9 M31 38 h2 a7 7 0 0 1 0 10 h-11" className="intro-glyph" />
        </svg>
        <div className="intro-name font-display">
          <span className="gold-text">Brand</span>
          <span className="text-silver">Motion</span>
        </div>
        <div className="intro-line" />
        <div className="intro-pct">{pct}</div>
      </div>
    </div>
  );
}
