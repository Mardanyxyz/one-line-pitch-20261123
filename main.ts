// A Day of One-Line Pitches — one-line pitch program.
// Writes exactly one sentence (1-240 chars) to /output/entry.txt, no trailing newline.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Tell the app idea you've described at dinner a dozen times to an agent on make.fun in plain words, and by tonight you'll be tapping a real first version on your phone — no code, and nothing to lose if you don't love it.";

if (SENTENCE.length < 1 || SENTENCE.length > 240) {
  throw new Error(`Sentence must be 1-240 characters, got ${SENTENCE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");

// Read-back verification: the file must be byte-identical to the sentence.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== SENTENCE) {
  throw new Error("Read-back verification failed: /output/entry.txt does not match the sentence");
}
