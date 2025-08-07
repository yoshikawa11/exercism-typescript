import { valid } from "../answers/luhn.ts";
import {
  assert,
  assertFalse,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("single digit strings can not be valid", () => {
  assertFalse(valid("1"));
});

Deno.test("a single zero is invalid", () => {
  assertFalse(valid("0"));
});

Deno.test("a simple valid SIN that remains valid if reversed", () => {
  assert(valid("059"));
});

Deno.test("a simple valid SIN that becomes invalid if reversed", () => {
  assert(valid("59"));
});

Deno.test("a valid Canadian SIN", () => {
  assert(valid("055 444 285"));
});

Deno.test("invalid Canadian SIN", () => {
  assertFalse(valid("055 444 286"));
});

Deno.test("invalid credit card", () => {
  assertFalse(valid("8273 1232 7352 0569"));
});

Deno.test("invalid long number with an even remainder", () => {
  assertFalse(valid("1 2345 6789 1234 5678 9012"));
});

Deno.test("invalid long number with a remainder divisible by 5", () => {
  assertFalse(valid("1 2345 6789 1234 5678 9013"));
});

Deno.test("valid number with an even number of digits", () => {
  assert(valid("095 245 88"));
});

Deno.test("valid number with an odd number of spaces", () => {
  assert(valid("234 567 891 234"));
});

Deno.test("valid strings with a non-digit added at the end become invalid", () => {
  assertFalse(valid("059a"));
});

Deno.test("valid strings with punctuation included become invalid", () => {
  assertFalse(valid("055-444-285"));
});

Deno.test("valid strings with symbols included become invalid", () => {
  assertFalse(valid("055# 444$ 285"));
});

Deno.test("single zero with space is invalid", () => {
  assertFalse(valid(" 0"));
});

Deno.test("more than a single zero is valid", () => {
  assert(valid("0000 0"));
});

Deno.test("input digit 9 is correctly converted to output digit 9", () => {
  assert(valid("091"));
});

Deno.test("very long input is valid", () => {
  assert(valid("9999999999 9999999999 9999999999 9999999999"));
});

Deno.test("valid luhn with an odd number of digits and non zero first digit", () => {
  assert(valid("109"));
});

Deno.test("using ascii value for non-doubled non-digit isn't allowed", () => {
  assertFalse(valid("055b 444 285"));
});

Deno.test("using ascii value for doubled non-digit isn't allowed", () => {
  assertFalse(valid(":9"));
});

Deno.test("non-numeric, non-space char in the middle with a sum that's divisible by 10 isn't allowed", () => {
  assertFalse(valid("59%59"));
});
