// One Word for Your Wi-Fi — make.fun bounty entry (program/v1, Node 22).
// The program writes a single word to /output/entry.txt.
// The word: "Cliffhanger" — home Wi-Fi always dies right at the cliffhanger.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Cliffhanger";

// The bounty gate: /output/entry.txt must be UTF-8 text of 1 to 20
// characters, not only white space. Refuse to write anything that
// would fail it, so a bad word is a loud local error, not a lost entry.
if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error(`Entry word fails the 1-20 character gate: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
console.log(`Wrote ${WORD.length}-character entry to ${join(outDir, "entry.txt")}`);
