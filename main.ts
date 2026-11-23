import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "My agent spent 40 minutes writing a script to delete duplicate files, then proudly deleted the script itself as a duplicate.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
