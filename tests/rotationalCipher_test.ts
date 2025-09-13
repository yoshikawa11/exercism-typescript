import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { rotate } from "../answers/rotationalCipher.ts";

Deno.test("rotate a by 1", () => {
  const result = rotate("a", 1);
  assertEquals(result, "b");
});

Deno.test("rotate a by 26, same output as input", () => {
  const result = rotate("a", 26);
  assertEquals(result, "a");
});

Deno.test("rotate a by 0, same output as input", () => {
  const result = rotate("a", 0);
  assertEquals(result, "a");
});

Deno.test("rotate m by 13", () => {
  const result = rotate("m", 13);
  assertEquals(result, "z");
});

Deno.test("rotate n by 13 with wrap around alphabet", () => {
  const result = rotate("n", 13);
  assertEquals(result, "a");
});

Deno.test("rotate capital letters", () => {
  const result = rotate("OMG", 5);
  assertEquals(result, "TRL");
});

Deno.test("rotate spaces", () => {
  const result = rotate("O M G", 5);
  assertEquals(result, "T R L");
});

Deno.test("rotate numbers", () => {
  const result = rotate("Testing 1 2 3 testing", 4);
  assertEquals(result, "Xiwxmrk 1 2 3 xiwxmrk");
});

Deno.test("rotate punctuation", () => {
  const result = rotate("Let's eat, Grandma!", 21);
  assertEquals(result, "Gzo'n zvo, Bmviyhv!");
});

Deno.test("rotate all letters", () => {
  const result = rotate("The quick brown fox jumps over the lazy dog.", 13);
  assertEquals(result, "Gur dhvpx oebja sbk whzcf bire gur ynml qbt.");
});
