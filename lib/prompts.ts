import "server-only";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Server-only: load the delivered prompt text for a product slug. */
export async function loadPrompt(slug: string): Promise<string | null> {
  try {
    return await readFile(
      join(process.cwd(), "content", "prompts", `${slug}.txt`),
      "utf8"
    );
  } catch {
    return null;
  }
}
