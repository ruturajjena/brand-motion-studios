import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";
import { loadPrompt } from "@/lib/prompts";
import { getServerUser } from "@/lib/supabase/server";

/**
 * Returns the full prompt text for a product. Gated on being signed in only —
 * every logged-in user can copy prompts for now. Tightening this to an
 * entitlement check later is a one-line swap (add `hasAllAccess`).
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!getProduct(slug)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const user = await getServerUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in first" }, { status: 401 });
  }

  const prompt = await loadPrompt(slug);
  return NextResponse.json({ prompt });
}
