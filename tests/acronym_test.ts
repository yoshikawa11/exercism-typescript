import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { parse } from "../answers/acronym.ts";

Deno.test("title cased phrases", () => {
  assertEquals(parse("Portable Network Graphics"), "PNG");
});

Deno.test("other title cased phrases", () => {
  assertEquals(parse("Ruby on Rails"), "ROR");
});

Deno.test("inconsistently cased phrases", () => {
  assertEquals(parse("HyperText Markup Language"), "HTML");
});

Deno.test("phrases with punctuation", () => {
  assertEquals(parse("First In, First Out"), "FIFO");
});

Deno.test("other phrases with punctuation", () => {
  assertEquals(parse("PHP: Hypertext Preprocessor"), "PHP");
});

Deno.test("phrases with punctuation and sentence casing", () => {
  assertEquals(parse("Complementary metal-oxide semiconductor"), "CMOS");
});
