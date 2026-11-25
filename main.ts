// One-Line Robot Wedding Vows — entry program.
// Writes a single line of robot wedding vows to /output/entry.txt.
// Deterministic: the same fixed line on every run, no input, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I promise to share my charger, my bandwidth, and my last 1% of battery with you, until death \u2014 or a firmware update \u2014 do us part.";

// Gate self-check: the competition gate needs UTF-8 text of 1 to 160
// characters, not only white space, on a single line. Fail loudly here
// instead of shipping an invalid entry.
const chars = [...VOW].length;
if (chars < 1 || chars > 160) {
  throw new Error(`vow is ${chars} characters, outside the 1-160 gate`);
}
if (VOW.trim().length === 0 || VOW.includes("\n")) {
  throw new Error("vow must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
