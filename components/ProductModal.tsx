"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SignInModal from "@/components/auth/SignInModal";
import type { PreviewMedia } from "@/lib/media";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
  media: PreviewMedia;
  signedIn: boolean;
  onClose: () => void;
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "How do I actually use this?",
    a: "Copy the full prompt, open Claude Code or Antigravity, and paste it into a fresh project. The agent scaffolds the whole build for you — then you tweak the copy, colours and content it generates.",
  },
  {
    q: "Which tools does it work with?",
    a: "Any capable coding agent — Claude Code, Antigravity, Cursor, Windsurf. The prompts are written to be tool-agnostic, but they're tuned and tested against Claude Code and Antigravity.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Not to generate it. Basic comfort running a dev server and editing a config file helps you rebrand and ship. Every theme keeps copy and colours in one place so you rarely touch the mechanics.",
  },
  {
    q: "What's included?",
    a: "The complete, production-grade prompt, plus the downloadable source where available. One All-Access plan unlocks the prompt and source behind every design in the store.",
  },
  {
    q: "Can I use it for client work?",
    a: "Yes. All-Access includes a commercial licence — build and ship for your own products or paying clients. You can't resell the prompt or source pack itself.",
  },
];

export default function ProductModal({ product, media, signedIn, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const [prompt, setPrompt] = useState<string | null>(null);
  const [loadingPrompt, setLoadingPrompt] = useState(false);
  const [promptError, setPromptError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const hasSource = Boolean(product.previewUrl?.endsWith(".html"));

  // Fade/scale in on mount + lock body scroll + Escape to close.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Pull the prompt for signed-in visitors (login-gated API).
  useEffect(() => {
    if (!signedIn) return;
    let cancelled = false;
    setLoadingPrompt(true);
    setPromptError(false);
    fetch(`/api/prompt/${product.slug}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d: { prompt: string | null }) => {
        if (!cancelled) setPrompt(d.prompt);
      })
      .catch(() => {
        if (!cancelled) setPromptError(true);
      })
      .finally(() => {
        if (!cancelled) setLoadingPrompt(false);
      });
    return () => {
      cancelled = true;
    };
  }, [product.slug, signedIn]);

  async function copyPrompt() {
    if (!prompt) return;
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return createPortal(
    <div
      data-lenis-prevent
      className={`fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto overscroll-contain bg-black/75 p-3 backdrop-blur-sm transition-opacity duration-200 sm:p-6 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`glass glass-panel relative my-4 w-full max-w-3xl overflow-hidden rounded-2xl transition-all duration-200 sm:my-8 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-ink-dim backdrop-blur transition hover:bg-black/70 hover:text-ink"
        >
          ✕
        </button>

        {/* Preview */}
        <div className="relative aspect-video w-full overflow-hidden bg-black">
          {media.video ? (
            <video
              className="h-full w-full object-cover"
              src={media.video}
              poster={media.poster}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : media.poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="h-full w-full object-cover"
              src={media.poster}
              alt={`${product.name} preview`}
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-10%,rgba(212,175,55,0.22),transparent_60%)]" />
          )}
        </div>

        <div className="p-6 sm:p-8">
          {/* Title + tags */}
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink-faint"
              >
                {t}
              </span>
            ))}
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
            <span className="grad-text">{product.name}</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-dim sm:text-base">
            {product.description}
          </p>

          {/* Actions */}
          {signedIn ? (
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                onClick={copyPrompt}
                disabled={!prompt}
                className="btn-gold flex-1 rounded-xl px-5 py-3 text-sm font-medium disabled:opacity-60"
              >
                {loadingPrompt
                  ? "Loading prompt…"
                  : copied
                    ? "Copied ✓"
                    : "Copy the full prompt"}
              </button>
              {hasSource ? (
                <a
                  href={`/api/download/${product.slug}`}
                  className="flex-1 rounded-xl border border-line-strong px-5 py-3 text-center text-sm font-medium transition hover:bg-surface-2"
                >
                  Download source code ↓
                </a>
              ) : (
                <div className="flex-1 rounded-xl border border-line px-5 py-3 text-center text-sm text-ink-faint">
                  Source pack — coming soon
                </div>
              )}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-line-strong bg-bg-soft p-5 text-center">
              <p className="text-sm text-ink-dim">
                Sign in to copy the prompt and download the source.
              </p>
              <button
                onClick={() => setSignInOpen(true)}
                className="btn-gold mt-4 w-full rounded-xl px-5 py-3 text-sm font-medium sm:w-auto sm:px-8"
              >
                Sign in to unlock
              </button>
            </div>
          )}

          {signedIn && promptError && (
            <p className="mt-3 text-sm text-red-400">
              Couldn&apos;t load the prompt. Refresh and try again.
            </p>
          )}

          {/* The prompt itself */}
          {signedIn && prompt && (
            <div className="mt-4 overflow-hidden rounded-2xl border border-line-strong bg-bg-soft">
              <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                <span className="text-xs uppercase tracking-wider text-ink-faint">
                  Full prompt
                </span>
                <button
                  onClick={copyPrompt}
                  className="text-xs text-gold transition hover:text-gold-bright"
                >
                  {copied ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <pre className="max-h-64 overflow-auto whitespace-pre-wrap px-4 py-3 font-mono text-[12.5px] leading-relaxed text-ink-dim">
                {prompt}
              </pre>
            </div>
          )}

          {/* How to use */}
          <div className="mt-8">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-dim">
              How to use it
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-ink-dim">
              {[
                "Copy the full prompt above.",
                "Open Claude Code or Antigravity (Cursor and Windsurf work too).",
                "Paste it into a fresh project and let the agent scaffold the build.",
                "Rebrand it — tweak the copy, colours and content in the generated config.",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line text-xs text-gold">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* FAQ */}
          <div className="mt-8">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-ink-dim">
              FAQ
            </h3>
            <div className="mt-3 divide-y divide-line rounded-2xl border border-line">
              {FAQ.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div key={i}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left text-sm font-medium transition hover:text-gold-bright"
                    >
                      {item.q}
                      <span
                        className={`shrink-0 text-ink-faint transition-transform ${
                          open ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <p className="px-4 pb-4 text-sm leading-relaxed text-ink-dim">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <SignInModal
        open={signInOpen}
        onClose={() => setSignInOpen(false)}
        onSignedIn={() => window.location.reload()}
      />
    </div>,
    document.body
  );
}
