// Texts From Your Future Self — make.fun entry generator.
// Writes one original funny line, deterministically, to /output/entry.txt
// and self-checks the competition gate: under 200 characters, exactly one line.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const ENTRY =
  "Future you here. We finally became the person we wanted to be. Turns out he also procrastinates, he just does it in a nicer apartment.";

const MAX_CHARS = 200;
const OUT_PATH = "/output/entry.txt";

// The competition gate, kept in one place so the check and the
// error messages can never drift apart: 1-199 chars, exactly one
// line, no leading/trailing whitespace, no control characters.
function checkGate(text: string): number {
  const chars = [...text].length;
  if (chars < 1 || chars >= MAX_CHARS) {
    throw new Error(`gate failed: entry is ${chars} chars, must be 1-199`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be exactly one line");
  }
  if (text.trim() !== text) {
    throw new Error("gate failed: entry has leading or trailing whitespace");
  }
  for (const ch of text) {
    if (ch.charCodeAt(0) < 0x20) {
      throw new Error("gate failed: entry contains a control character");
    }
  }
  return chars;
}

function main(): void {
  const chars = checkGate(ENTRY);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, "utf8");
  const written = readFileSync(OUT_PATH, "utf8");
  if (written !== ENTRY) {
    throw new Error("verification failed: output does not match entry");
  }
  const sha = createHash("sha256").update(written, "utf8").digest("hex");
  console.log(`entry (${chars} chars): ${ENTRY}`);
  console.log(`wrote ${OUT_PATH} sha256=${sha}`);
}

main();
