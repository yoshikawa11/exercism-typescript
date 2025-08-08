import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { sum } from "../answers/sumOfMultiples.ts";

Deno.test("no multiples within limit", () => {
  assertEquals(sum([3, 5], 1), 0);
});

Deno.test("one factor has multiples within limit", () => {
  assertEquals(sum([3, 5], 4), 3);
});

Deno.test("more than one multiple within limit", () => {
  assertEquals(sum([3], 7), 9);
});

Deno.test("more than one factor with multiples within limit", () => {
  assertEquals(sum([3, 5], 10), 23);
});

Deno.test("each multiple is only counted once", () => {
  assertEquals(sum([3, 5], 100), 2318);
});

Deno.test("a much larger limit", () => {
  assertEquals(sum([3, 5], 1000), 233168);
});

Deno.test("three factors", () => {
  assertEquals(sum([7, 13, 17], 20), 51);
});

Deno.test("factors not relatively prime", () => {
  assertEquals(sum([4, 6], 15), 30);
});

Deno.test("some pairs of factors relatively prime and some not", () => {
  assertEquals(sum([5, 6, 8], 150), 4419);
});

Deno.test("one factor is a multiple of another", () => {
  assertEquals(sum([5, 25], 51), 275);
});

Deno.test("much larger factors", () => {
  assertEquals(sum([43, 47], 10000), 2203160);
});

Deno.test("all numbers are multiples of 1", () => {
  assertEquals(sum([1], 100), 4950);
});

Deno.test("no factors means an empty sum", () => {
  assertEquals(sum([], 10000), 0);
});

Deno.test("the only multiple of 0 is 0", () => {
  assertEquals(sum([0], 1), 0);
});

Deno.test("the factor 0 does not affect the sum of multiples of other factors", () => {
  assertEquals(sum([3, 0], 4), 3);
});

Deno.test("solutions using include-exclude must extend to cardinality greater than 3", () => {
  assertEquals(sum([2, 3, 5, 7, 11], 10000), 39614537);
});
