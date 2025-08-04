import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { nucleotideCounts } from "../answers/nucleotideCount.ts";

Deno.test("empty strand", () => {
  const expected = { A: 0, C: 0, G: 0, T: 0 };
  assertEquals(nucleotideCounts(""), expected);
});

Deno.test("can count one nucleotide in single-character input", () => {
  const expected = { A: 0, C: 0, G: 1, T: 0 };
  assertEquals(nucleotideCounts("G"), expected);
});

Deno.test("strand with repeated nucleotide", () => {
  const expected = { A: 0, C: 0, G: 7, T: 0 };
  assertEquals(nucleotideCounts("GGGGGGG"), expected);
});

Deno.test("strand with multiple nucleotides", () => {
  const expected = { A: 20, C: 12, G: 17, T: 21 };
  const strand =
    "AGCTTTTCATTCTGACTGCACGGGCAATATGTCTCTGTGTGGATTAAAAAAAAGAGTGTCTGATAGCAGC";
  assertEquals(nucleotideCounts(strand), expected);
});

Deno.test("strand with invalid nucleotides", () => {
  assertThrows(
    () => nucleotideCounts("AGXXACT"),
    Error,
    "error",
  );
});
