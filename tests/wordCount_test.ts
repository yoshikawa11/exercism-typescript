import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { count } from "../answers/wordCount.ts";

Deno.test("counts one word", () => {
  const expected = new Map([["word", 1]]);
  assertEquals(count("word"), expected);
});

Deno.test("counts one of each word", () => {
  const expected = new Map([
    ["one", 1],
    ["of", 1],
    ["each", 1],
  ]);
  assertEquals(count("one of each"), expected);
});

Deno.test("counts multiple occurrences", () => {
  const expected = new Map([
    ["one", 1],
    ["fish", 4],
    ["two", 1],
    ["red", 1],
    ["blue", 1],
  ]);
  assertEquals(count("one fish two fish red fish blue fish"), expected);
});

Deno.test("includes punctuation", () => {
  const expected = new Map([
    ["car", 2],
    ["parking", 1],
  ]);
  assertEquals(count("car : car! parking :"), expected);
});

Deno.test("includes numbers", () => {
  const expected = new Map([
    ["testing", 2],
    ["1", 1],
    ["2", 1],
  ]);
  assertEquals(count("testing 1 2 testing"), expected);
});

Deno.test("normalizes case", () => {
  const expected = new Map([["go", 3]]);
  assertEquals(count("go Go GO"), expected);
});

Deno.test("with apostrophes", () => {
  const expected = new Map([
    ["first", 1],
    ["don't", 2],
    ["laugh", 1],
    ["then", 1],
    ["cry", 1],
  ]);
  assertEquals(count("First: don't laugh. Then: don't cry!"), expected);
});

Deno.test("with quotations", () => {
  const expected = new Map([
    ["joe", 1],
    ["can't", 1],
    ["tell", 1],
    ["between", 1],
    ["large", 1],
    ["and", 1],
    ["small", 1],
  ]);
  assertEquals(count("Joe can't tell between large and small."), expected);
});

Deno.test("substrings from the beginning", () => {
  const expected = new Map([
    ["joe", 1],
    ["can't", 1],
    ["tell", 1],
    ["between", 1],
    ["app", 1],
    ["apple", 1],
    ["and", 1],
    ["a", 1],
    ["pin", 1],
    ["pineapple", 1],
  ]);
  assertEquals(
    count("Joe can't tell between app, apple and a pin, pineapple"),
    expected,
  );
});

Deno.test("multiple spaces not detected as a word", () => {
  const expected = new Map([
    ["multiple", 1],
    ["whitespaces", 1],
  ]);
  assertEquals(count("multiple   whitespaces"), expected);
});

Deno.test("alternating word separators not detected as a word", () => {
  const expected = new Map([
    ["one", 1],
    ["two", 1],
    ["three", 1],
    ["123", 1],
    ["can't", 1],
  ]);
  assertEquals(count(",\n,one,\n ,two \n 'three' 123, 'can't"), expected);
});
