"use client";

import { createBrowserClient } from "@supabase/ssr";

/** True once NEXT_PUBLIC_SUPABASE_URL / _ANON_KEY are set (build-time inlined). */
export const supabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/** Browser-side Supabase client — reads/writes the session cookie. Only
 * call this after checking `supabaseConfigured`. */
export function getSupabaseBrowserClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
