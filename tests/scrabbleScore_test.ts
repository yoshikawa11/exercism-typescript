import { score } from "../answers/scrabbleScore.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("lowercase letter", () => {
  assertEquals(score("a"), 1);
});

Deno.test("uppercase letter", () => {
  assertEquals(score("A"), 1);
});

Deno.test("valuable letter", () => {
  assertEquals(score("f"), 4);
});

Deno.test("short word", () => {
  assertEquals(score("at"), 2);
});

Deno.test("short, valuable word", () => {
  assertEquals(score("zoo"), 12);
});

Deno.test("medium word", () => {
  assertEquals(score("street"), 6);
});

Deno.test("medium, valuable word", () => {
  assertEquals(score("quirky"), 22);
});

Deno.test("long, mixed-case word", () => {
  assertEquals(score("OxyphenButazone"), 41);
});

Deno.test("english-like word", () => {
  assertEquals(score("pinata"), 8);
});

Deno.test("empty input", () => {
  assertEquals(score(""), 0);
});

Deno.test("undefined input", () => {
  assertEquals(score(undefined), 0);
});

Deno.test("entire alphabet available", () => {
  assertEquals(score("abcdefghijklmnopqrstuvwxyz"), 87);
});
