import { assertThrows } from "https://deno.land/std@0.224.0/assert/assert_throws.ts";
import { transcript } from "../answers/rnaTranscription.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(transcript("ACGTGGTCTTAA"), "UGCACCAGAAUU");
  assertThrows(() => transcript("XX"));
  assertThrows(() => transcript("ACGTXXXCTTAA"));
});
