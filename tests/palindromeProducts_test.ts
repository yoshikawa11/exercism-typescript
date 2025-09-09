import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { generate } from "../answers/palindromeProducts.ts";

Deno.test("smallest palindrome from single digit factors", () => {
  const palindromes = generate({ maxFactor: 9, minFactor: 1 });
  const smallest = palindromes.smallest;
  const expected = { value: 1, factors: [[1, 1]] };

  assertEquals(smallest.value, expected.value);
  assertEquals(sortFactors(smallest.factors), expected.factors);
});

Deno.test("largest palindrome from single digit factors", () => {
  const palindromes = generate({ maxFactor: 9, minFactor: 1 });
  const largest = palindromes.largest;
  const expected = {
    value: 9,
    factors: [
      [1, 9],
      [3, 3],
    ],
  };

  assertEquals(largest.value, expected.value);
  assertEquals(sortFactors(largest.factors), expected.factors);
});

Deno.test("smallest palindrome from double digit factors", () => {
  const palindromes = generate({ maxFactor: 99, minFactor: 10 });
  const smallest = palindromes.smallest;
  const expected = { value: 121, factors: [[11, 11]] };

  assertEquals(smallest.value, expected.value);
  assertEquals(sortFactors(smallest.factors), expected.factors);
});

Deno.test("largest palindrome from double digit factors", () => {
  const palindromes = generate({ maxFactor: 99, minFactor: 10 });
  const largest = palindromes.largest;
  const expected = { value: 9009, factors: [[91, 99]] };

  assertEquals(largest.value, expected.value);
  assertEquals(sortFactors(largest.factors), expected.factors);
});

Deno.test("smallest palindrome from triple digit factors", () => {
  const palindromes = generate({
    maxFactor: 999,
    minFactor: 100,
  });
  const smallest = palindromes.smallest;
  const expected = { value: 10201, factors: [[101, 101]] };

  assertEquals(smallest.value, expected.value);
  assertEquals(sortFactors(smallest.factors), expected.factors);
});

Deno.test("largest palindrome from triple digit factors", () => {
  const palindromes = generate({
    maxFactor: 999,
    minFactor: 100,
  });
  const largest = palindromes.largest;
  const expected = { value: 906609, factors: [[913, 993]] };

  assertEquals(largest.value, expected.value);
  assertEquals(sortFactors(largest.factors), expected.factors);
});

Deno.test("smallest palindrome from four digit factors", () => {
  const palindromes = generate({
    maxFactor: 9999,
    minFactor: 1000,
  });
  const smallest = palindromes.smallest;
  const expected = { value: 1002001, factors: [[1001, 1001]] };

  assertEquals(smallest.value, expected.value);
  assertEquals(sortFactors(smallest.factors), expected.factors);
});

Deno.test("largest palindrome from four digit factors", () => {
  const palindromes = generate({
    maxFactor: 9999,
    minFactor: 1000,
  });
  const largest = palindromes.largest;
  const expected = { value: 99000099, factors: [[9901, 9999]] };

  assertEquals(largest.value, expected.value);
  assertEquals(sortFactors(largest.factors), expected.factors);
});

Deno.test("empty result for smallest if no palindrome in range", () => {
  const palindromes = generate({
    maxFactor: 1003,
    minFactor: 1002,
  });
  const smallest = palindromes.smallest;

  assertEquals(smallest.value, null);
  assertEquals(smallest.factors, []);
});

Deno.test("empty result for largest if no palindrome in range", () => {
  const palindromes = generate({ maxFactor: 15, minFactor: 15 });
  const largest = palindromes.largest;

  assertEquals(largest.value, null);
  assertEquals(largest.factors, []);
});

Deno.test("error for smallest if min is more than max", () => {
  assertThrows(
    () => {
      const palindromes = generate({
        maxFactor: 1,
        minFactor: 10000,
      });
      void palindromes.smallest;
    },
    Error,
    "min must be <= max",
  );
});

Deno.test("error for largest if min is more than max", () => {
  assertThrows(
    () => {
      const palindromes = generate({ maxFactor: 1, minFactor: 2 });
      void palindromes.largest;
    },
    Error,
    "min must be <= max",
  );
});

Deno.test("smallest product does not use the smallest factor", () => {
  const palindromes = generate({
    maxFactor: 4000,
    minFactor: 3215,
  });
  const smallest = palindromes.smallest;
  const expected = { value: 10988901, factors: [[3297, 3333]] };

  assertEquals(smallest.value, expected.value);
  assertEquals(sortFactors(smallest.factors), expected.factors);
});

type Factors = ReturnType<typeof generate>["smallest"]["factors"];
function sortFactors(factors: Factors): Factors {
  return factors.map((f) => f.sort()).sort();
}
