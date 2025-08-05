import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { classify } from "../answers/perfectNumbers.ts";

Deno.test("Smallest perfect number is classified correctly", () => {
  const expected = "perfect";
  assertEquals(classify(6), expected);
});

Deno.test("Medium perfect number is classified correctly", () => {
  const expected = "perfect";
  assertEquals(classify(28), expected);
});

Deno.test("Large perfect number is classified correctly", () => {
  const expected = "perfect";
  assertEquals(classify(33550336), expected);
});

Deno.test("Smallest abundant number is classified correctly", () => {
  const expected = "abundant";
  assertEquals(classify(12), expected);
});

Deno.test("Medium abundant number is classified correctly", () => {
  const expected = "abundant";
  assertEquals(classify(30), expected);
});

Deno.test("Large abundant number is classified correctly", () => {
  const expected = "abundant";
  assertEquals(classify(33550335), expected);
});

Deno.test("Smallest prime deficient number is classified correctly", () => {
  const expected = "deficient";
  assertEquals(classify(2), expected);
});

Deno.test("Smallest non-prime deficient number is classified correctly", () => {
  const expected = "deficient";
  assertEquals(classify(4), expected);
});

Deno.test("Medium deficient number is classified correctly", () => {
  const expected = "deficient";
  assertEquals(classify(32), expected);
});

Deno.test("Large deficient number is classified correctly", () => {
  const expected = "deficient";
  assertEquals(classify(33550337), expected);
});

Deno.test("Edge case (no factors other than itself) is classified correctly", () => {
  const expected = "deficient";
  assertEquals(classify(1), expected);
});

Deno.test("Zero is rejected (not a natural number)", () => {
  assertThrows(
    () => classify(0),
    Error,
    "Classification is only possible for natural numbers.",
  );
});

Deno.test("Negative integer is rejected (not a natural number)", () => {
  assertThrows(
    () => classify(-1),
    Error,
    "Classification is only possible for natural numbers.",
  );
});
