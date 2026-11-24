// The Dog Ate My Homework: Funniest Excuse
// One line, in the dog's own voice, explaining why the homework got eaten.
// Dog logic, stated plainly: anything carrying the human's name already
// belongs to the dog — the bed, the couch, and, as of today, the homework.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "It had your name on it, and everything with your name on it is mine — the bed, the couch, and now the homework.";

function main(): void {
  // Gate: exactly one line of 1-200 UTF-8 characters, not only whitespace.
  const chars = [...EXCUSE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (!EXCUSE.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (EXCUSE.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
}

main();
