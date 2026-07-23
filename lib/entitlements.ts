import "server-only";
import { getSupabaseServerClient } from "@/lib/supabase/server";

/** Whether this user currently has an active All-Access plan. */
export async function hasAllAccess(userId: string): Promise<boolean> {
  const supabase = await getSupabaseServerClient();
  const { data } = await supabase
    .from("entitlements")
    .select("status")
    .eq("user_id", userId)
    .eq("status", "active")
    .maybeSingle();
  return data !== null;
}
