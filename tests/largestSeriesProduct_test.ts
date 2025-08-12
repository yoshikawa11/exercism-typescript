import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { largestProduct } from "../answers/largestSeriesProduct.ts";

Deno.test("finds the largest product if span equals length", () => {
  assertEquals(largestProduct("29", 2), 18);
});

Deno.test("can find the largest product of 2 with numbers in order", () => {
  assertEquals(largestProduct("0123456789", 2), 72);
});

Deno.test("can find the largest product of 2", () => {
  assertEquals(largestProduct("576802143", 2), 48);
});

Deno.test("can find the largest product of 3 with numbers in order", () => {
  assertEquals(largestProduct("0123456789", 3), 504);
});

Deno.test("can find the largest product of 3", () => {
  assertEquals(largestProduct("1027839564", 3), 270);
});

Deno.test("can find the largest product of 5 with numbers in order", () => {
  assertEquals(largestProduct("0123456789", 5), 15120);
});

Deno.test("can get the largest product of a big number", () => {
  assertEquals(
    largestProduct(
      "73167176531330624919225119674426574742355349194934",
      6,
    ),
    23520,
  );
});

Deno.test("reports zero if the only digits are zero", () => {
  assertEquals(largestProduct("0000", 2), 0);
});

Deno.test("reports zero if all spans include zero", () => {
  assertEquals(largestProduct("99099", 3), 0);
});

Deno.test("rejects span longer than string length", () => {
  assertThrows(
    () => largestProduct("123", 4),
    Error,
    "Span must be smaller than string length",
  );
});

Deno.test("rejects empty string and nonzero span", () => {
  assertThrows(
    () => largestProduct("", 1),
    Error,
    "Span must be smaller than string length",
  );
});

Deno.test("rejects invalid character in digits", () => {
  assertThrows(
    () => largestProduct("1234a5", 2),
    Error,
    "Digits input must only contain digits",
  );
});

Deno.test("rejects negative span", () => {
  assertThrows(
    () => largestProduct("12345", -1),
    Error,
    "Span must not be negative",
  );
});
