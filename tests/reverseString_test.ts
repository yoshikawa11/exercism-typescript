// reverse-string.test.ts
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { reverseString } from "../answers/reverseString.ts";

Deno.test("reverse a single character", () => {
  assertEquals(reverseString("a"), "a");
});

Deno.test("reverse a word", () => {
  assertEquals(reverseString("robot"), "tobor");
});

Deno.test("reverse a capitalized word", () => {
  assertEquals(reverseString("Ramen"), "nemaR");
});

Deno.test("reverse a sentence with punctuation", () => {
  assertEquals(reverseString("I'm hungry!"), "!yrgnuh m'I");
});

Deno.test("reverse a palindrome", () => {
  assertEquals(reverseString("racecar"), "racecar");
});

Deno.test("reverse an even-sized word", () => {
  assertEquals(reverseString("drawer"), "reward");
});
