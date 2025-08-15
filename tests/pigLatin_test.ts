import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { translate } from "../answers/pigLatin.ts";

Deno.test("word beginning with a", () => {
  assertEquals(translate("apple"), "appleay");
});

Deno.test("word beginning with e", () => {
  assertEquals(translate("ear"), "earay");
});

Deno.test("word beginning with i", () => {
  assertEquals(translate("igloo"), "iglooay");
});

Deno.test("word beginning with o", () => {
  assertEquals(translate("object"), "objectay");
});

Deno.test("word beginning with u", () => {
  assertEquals(translate("under"), "underay");
});

Deno.test("word beginning with a vowel and followed by a qu", () => {
  assertEquals(translate("equal"), "equalay");
});

Deno.test("word beginning with p", () => {
  assertEquals(translate("pig"), "igpay");
});

Deno.test("word beginning with k", () => {
  assertEquals(translate("koala"), "oalakay");
});

Deno.test("word beginning with x", () => {
  assertEquals(translate("xenon"), "enonxay");
});

Deno.test("word beginning with q without a following u", () => {
  assertEquals(translate("qat"), "atqay");
});

Deno.test("word beginning with ch", () => {
  assertEquals(translate("chair"), "airchay");
});

Deno.test("word beginning with qu", () => {
  assertEquals(translate("queen"), "eenquay");
});

Deno.test("word beginning with qu and a preceding consonant", () => {
  assertEquals(translate("square"), "aresquay");
});

Deno.test("word beginning with th", () => {
  assertEquals(translate("therapy"), "erapythay");
});

Deno.test("word beginning with thr", () => {
  assertEquals(translate("thrush"), "ushthray");
});

Deno.test("word beginning with sch", () => {
  assertEquals(translate("school"), "oolschay");
});

Deno.test("y is treated like a consonant at the beginning of a word", () => {
  assertEquals(translate("yellow"), "ellowyay");
});

Deno.test("y as second letter in two letter word", () => {
  assertEquals(translate("my"), "ymay");
});

Deno.test("a whole phrase", () => {
  assertEquals(translate("quick fast run"), "ickquay astfay unray");
});
