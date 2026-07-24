import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getProduct } from "@/lib/products";
import { getServerUser } from "@/lib/supabase/server";

/**
 * Streams the downloadable source for a product as an attachment. Gated on
 * being signed in only for now (locking to an entitlement later is a one-line
 * swap). The source we can serve today is the single-file HTML demo that lives
 * in /public; theme products whose full repo isn't in this codebase return 404
 * and the UI shows a "coming soon" note.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const user = await getServerUser();
  if (!user) {
    return NextResponse.json({ error: "Sign in first" }, { status: 401 });
  }

  if (product.previewUrl?.endsWith(".html")) {
    const rel = product.previewUrl.replace(/^\/+/, "");
    try {
      const html = await readFile(join(process.cwd(), "public", rel), "utf8");
      return new NextResponse(html, {
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "Content-Disposition": `attachment; filename="${slug}.html"`,
          "Cache-Control": "no-store",
        },
      });
    } catch {
      // fall through to the not-available response
    }
  }

  return NextResponse.json({ error: "Source not available yet" }, { status: 404 });
}
