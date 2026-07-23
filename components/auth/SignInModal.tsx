"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { getSupabaseBrowserClient, supabaseConfigured } from "@/lib/supabase/client";

type Mode = "sign-in" | "sign-up";

/**
 * Controlled sign-in modal — Google, Apple, and email/password. Callers own
 * the open state so this can be triggered from the navbar, a paywall CTA, or
 * a plan checkout button that needs a session before it can proceed.
 */
export default function SignInModal({
  open,
  onClose,
  onSignedIn,
}: {
  open: boolean;
  onClose: () => void;
  onSignedIn?: () => void;
}) {
  const [mode, setMode] = useState<Mode>("sign-in");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  if (!open) return null;

  if (!supabaseConfigured) {
    return createPortal(
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="glass glass-panel w-full max-w-sm p-7 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-display text-xl font-bold">
            <span className="grad-text">Accounts are almost ready</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-dim">
            Sign-in is being wired up. Check back shortly, or reach us directly
            for early access.
          </p>
          <a
            href="mailto:studiosbrandmotion@gmail.com"
            className="btn-gold mt-6 inline-block rounded-full px-6 py-2.5 text-sm"
          >
            Email us
          </a>
          <button
            onClick={onClose}
            className="mt-4 block w-full text-xs text-ink-faint transition hover:text-ink"
          >
            Close
          </button>
        </div>
      </div>,
      document.body
    );
  }

  const redirectTo = `${window.location.origin}/auth/callback`;

  async function withOAuth(provider: "google" | "apple") {
    setLoading(provider);
    setError(null);
    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo },
    });
    if (error) {
      setError(error.message);
      setLoading(null);
    }
    // On success the browser navigates away to the provider — no further
    // state change needed here.
  }

  async function withEmail(e: React.FormEvent) {
    e.preventDefault();
    setLoading("email");
    setError(null);
    setNotice(null);
    const supabase = getSupabaseBrowserClient();

    if (mode === "sign-up") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: redirectTo },
      });
      if (error) {
        setError(error.message);
      } else {
        setNotice("Check your email to confirm your account, then sign in.");
        setMode("sign-in");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
      } else {
        onSignedIn?.();
        onClose();
      }
    }
    setLoading(null);
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass glass-panel w-full max-w-sm p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-bold">
            <span className="grad-text">
              {mode === "sign-up" ? "Create your account" : "Sign in"}
            </span>
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-ink-faint transition hover:text-ink"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-2.5">
          <button
            onClick={() => withOAuth("google")}
            disabled={loading !== null}
            className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-line-strong px-4 py-3 text-sm font-medium transition hover:bg-surface-2 disabled:opacity-60"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
              <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.47c-.28 1.5-1.13 2.77-2.4 3.62v3h3.88c2.27-2.09 3.55-5.17 3.55-8.81z" />
              <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.92l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.09C3.25 21.3 7.31 24 12 24z" />
              <path fill="#FBBC05" d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54v-3.1H1.27a12 12 0 0 0 0 10.74l4-3.1z" />
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.63l4 3.1C6.22 6.86 8.87 4.75 12 4.75z" />
            </svg>
            {loading === "google" ? "Redirecting…" : "Continue with Google"}
          </button>

          <button
            onClick={() => withOAuth("apple")}
            disabled={loading !== null}
            className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-line-strong px-4 py-3 text-sm font-medium transition hover:bg-surface-2 disabled:opacity-60"
          >
            <svg width="15" height="15" viewBox="0 0 384 512" fill="currentColor" aria-hidden>
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            {loading === "apple" ? "Redirecting…" : "Continue with Apple"}
          </button>
        </div>

        <div className="my-5 flex items-center gap-3 text-xs text-ink-faint">
          <span className="h-px flex-1 bg-line" />
          or
          <span className="h-px flex-1 bg-line" />
        </div>

        <form onSubmit={withEmail} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm outline-none transition placeholder:text-ink-faint focus:border-line-strong"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-sm outline-none transition placeholder:text-ink-faint focus:border-line-strong"
          />
          <button
            type="submit"
            disabled={loading !== null}
            className="btn-gold w-full rounded-xl px-4 py-2.5 text-sm font-medium disabled:opacity-60"
          >
            {loading === "email"
              ? "Please wait…"
              : mode === "sign-up"
                ? "Create account"
                : "Sign in"}
          </button>
        </form>

        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
        {notice && <p className="mt-3 text-sm text-gold">{notice}</p>}

        <p className="mt-5 text-center text-xs text-ink-faint">
          {mode === "sign-up" ? "Already have an account?" : "New here?"}{" "}
          <button
            onClick={() => {
              setMode(mode === "sign-up" ? "sign-in" : "sign-up");
              setError(null);
              setNotice(null);
            }}
            className="text-gold hover:text-gold-bright"
          >
            {mode === "sign-up" ? "Sign in" : "Create an account"}
          </button>
        </p>
      </div>
    </div>,
    document.body
  );
}
