import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { isIsogram } from "../answers/isogram.ts";

Deno.test("empty string", () => {
  const expected = true;
  assertEquals(isIsogram(""), expected);
});

Deno.test("isogram with only lower case characters", () => {
  const expected = true;
  assertEquals(isIsogram("isogram"), expected);
});

Deno.test("word with one duplicated character", () => {
  const expected = false;
  assertEquals(isIsogram("eleven"), expected);
});

Deno.test("longest reported english isogram", () => {
  const expected = true;
  assertEquals(isIsogram("subdermatoglyphic"), expected);
});

Deno.test("word with duplicated character in mixed case", () => {
  const expected = false;
  assertEquals(isIsogram("Alphabet"), expected);
});

Deno.test("hypothetical isogrammic word with hyphen", () => {
  const expected = true;
  assertEquals(isIsogram("thumbscrew-japingly"), expected);
});

Deno.test("isogram with duplicated hyphen", () => {
  const expected = true;
  assertEquals(isIsogram("six-year-old"), expected);
});

Deno.test("made-up name that is an isogram", () => {
  const expected = true;
  assertEquals(isIsogram("Emily Jung Schwartzkopf"), expected);
});

Deno.test("duplicated character in the middle", () => {
  const expected = false;
  assertEquals(isIsogram("accentor"), expected);
});
