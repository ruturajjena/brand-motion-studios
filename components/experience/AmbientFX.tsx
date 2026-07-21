"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed ambient layer behind everything: a large golden radial glow that
 * eases toward the cursor, plus film-grain and a soft vignette. GPU-only
 * (transform/opacity), throttled to one rAF write per frame.
 */
export default function AmbientFX() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = glow.current;
    if (!el) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight * 0.35;
    let x = tx;
    let y = ty;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fx-layer" aria-hidden>
      <div ref={glow} className="fx-glow" />
      <div className="fx-grain" />
      <div className="fx-vignette" />
    </div>
  );
}
