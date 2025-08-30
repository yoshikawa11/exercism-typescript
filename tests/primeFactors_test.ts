import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { calculatePrimeFactors } from "../answers/primeFactors.ts";

Deno.test("returns an empty array for 1", () => {
  assertEquals(calculatePrimeFactors(1), []);
});

Deno.test("factors 2", () => {
  assertEquals(calculatePrimeFactors(2), [2]);
});

Deno.test("factors 3", () => {
  assertEquals(calculatePrimeFactors(3), [3]);
});

Deno.test("factors 4", () => {
  assertEquals(calculatePrimeFactors(4), [2, 2]);
});

Deno.test("factors 6", () => {
  assertEquals(calculatePrimeFactors(6), [2, 3]);
});

Deno.test("factors 8", () => {
  assertEquals(calculatePrimeFactors(8), [2, 2, 2]);
});

Deno.test("factors 9", () => {
  assertEquals(calculatePrimeFactors(9), [3, 3]);
});

Deno.test("factors 12", () => {
  assertEquals(calculatePrimeFactors(12), [2, 2, 3]);
});

Deno.test("factors 27", () => {
  assertEquals(calculatePrimeFactors(27), [3, 3, 3]);
});

Deno.test("factors 625", () => {
  assertEquals(calculatePrimeFactors(625), [5, 5, 5, 5]);
});

Deno.test("factors 901255", () => {
  assertEquals(calculatePrimeFactors(901255), [5, 17, 23, 461]);
});

Deno.test("factors 93819012551", () => {
  assertEquals(calculatePrimeFactors(93819012551), [11, 9539, 894119]);
});
