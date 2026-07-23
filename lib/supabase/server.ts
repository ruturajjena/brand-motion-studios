import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/** True once NEXT_PUBLIC_SUPABASE_URL / _ANON_KEY are set. */
export const supabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

/**
 * Server-side Supabase client for Server Components / Route Handlers —
 * reads the session from request cookies. Cookie writes are swallowed when
 * called from a Server Component (Next.js forbids it there); proxy.ts
 * carries the actual session refresh.
 */
export async function getSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Called from a Server Component — middleware handles refresh.
          }
        },
      },
    }
  );
}

/** The signed-in user for this request, or null (also null if unconfigured). */
export async function getServerUser() {
  if (!supabaseConfigured) return null;
  const supabase = await getSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
