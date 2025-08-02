import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { compute } from "../answers/hamming.ts";

Deno.test("empty strands", () => {
  assertEquals(compute("", ""), 0);
});

Deno.test("single letter identical strands", () => {
  assertEquals(compute("A", "A"), 0);
});

Deno.test("single letter different strands", () => {
  assertEquals(compute("G", "T"), 1);
});

Deno.test("long identical strands", () => {
  assertEquals(compute("GGACTGAAATCTG", "GGACTGAAATCTG"), 0);
});

Deno.test("long different strands", () => {
  assertEquals(compute("GGACGGATTCTG", "AGGACGGATTCT"), 9);
});

Deno.test("disallow first strand longer", () => {
  assertThrows(
    () => compute("AATG", "AAA"),
    Error,
    "DNA strands must be of equal length.",
  );
});

Deno.test("disallow second strand longer", () => {
  assertThrows(
    () => compute("ATA", "AGTG"),
    Error,
    "DNA strands must be of equal length.",
  );
});

Deno.test("disallow left empty strand", () => {
  assertThrows(
    () => compute("", "G"),
    Error,
    "DNA strands must be of equal length.",
  );
});

Deno.test("disallow right empty strand", () => {
  assertThrows(
    () => compute("G", ""),
    Error,
    "DNA strands must be of equal length.",
  );
});
