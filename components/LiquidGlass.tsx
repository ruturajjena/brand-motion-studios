"use client";

import { useRef, type ReactNode } from "react";

/**
 * Apple-style liquid-glass panel: frosted glass with a specular edge, plus a
 * soft gold "liquid" highlight that follows the cursor across the surface.
 */
export default function LiquidGlass({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const sheen = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const s = sheen.current;
    if (!s) return;
    s.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    s.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
    s.classList.add("lit");
  }
  function onLeave() {
    sheen.current?.classList.remove("lit");
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`glass glass-panel relative overflow-hidden ${className}`}
    >
      <div ref={sheen} className="liquid-sheen" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
