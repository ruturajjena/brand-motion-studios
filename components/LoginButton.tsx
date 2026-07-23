"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import SignInModal from "@/components/auth/SignInModal";
import { getSupabaseBrowserClient, supabaseConfigured } from "@/lib/supabase/client";

export default function LoginButton() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(!supabaseConfigured);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!supabaseConfigured) return;
    const supabase = getSupabaseBrowserClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setReady(true);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function signOut() {
    await getSupabaseBrowserClient().auth.signOut();
    setMenuOpen(false);
  }

  if (!ready) {
    return <div className="h-8 w-20 rounded-full border border-line" aria-hidden />;
  }

  if (user) {
    const initial = (user.email ?? "?")[0]!.toUpperCase();
    return (
      <div className="relative">
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong text-sm font-semibold text-ink transition hover:border-line-strong/80"
          aria-label="Account menu"
        >
          {initial}
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-10 z-50 w-56 rounded-xl border border-line bg-surface p-3 shadow-xl">
            <p className="truncate px-1 text-xs text-ink-faint">{user.email}</p>
            <button
              onClick={signOut}
              className="mt-2 w-full rounded-lg px-2 py-1.5 text-left text-sm text-ink-dim transition hover:bg-surface-2 hover:text-ink"
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm text-ink-dim transition hover:border-line-strong hover:text-ink"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4 20c1.8-3.2 4.6-4.8 8-4.8s6.2 1.6 8 4.8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
        Sign in
      </button>
      <SignInModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
