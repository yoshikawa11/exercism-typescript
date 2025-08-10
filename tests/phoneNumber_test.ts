import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { clean } from "../answers/phoneNumber.ts";

Deno.test("cleans the number", () => {
  assertEquals(clean("(223) 456-7890"), "2234567890");
});

Deno.test("cleans numbers with dots", () => {
  assertEquals(clean("223.456.7890"), "2234567890");
});

Deno.test("cleans numbers with multiple spaces", () => {
  assertEquals(clean("223 456   7890   "), "2234567890");
});

Deno.test("invalid when 9 digits", () => {
  assertThrows(() => clean("123456789"), Error, "Incorrect number of digits");
});

Deno.test("invalid when 11 digits does not start with a 1", () => {
  assertThrows(
    () => clean("22234567890"),
    Error,
    "11 digits must start with 1",
  );
});

Deno.test("valid when 11 digits and starting with 1", () => {
  assertEquals(clean("12234567890"), "2234567890");
});

Deno.test("valid when 11 digits and starting with 1 even with punctuation", () => {
  assertEquals(clean("+1 (223) 456-7890"), "2234567890");
});

Deno.test("invalid when more than 11 digits", () => {
  assertThrows(() => clean("321234567890"), Error, "More than 11 digits");
});

Deno.test("invalid with letters", () => {
  assertThrows(() => clean("123-abc-7890"), Error, "Letters not permitted");
});

Deno.test("invalid with punctuations", () => {
  assertThrows(
    () => clean("123-@:!-7890"),
    Error,
    "Punctuations not permitted",
  );
});

Deno.test("invalid if area code starts with 0", () => {
  assertThrows(
    () => clean("(023) 456-7890"),
    Error,
    "Area code cannot start with zero",
  );
});

Deno.test("invalid if area code starts with 1", () => {
  assertThrows(
    () => clean("(123) 456-7890"),
    Error,
    "Area code cannot start with one",
  );
});

Deno.test("invalid if exchange code starts with 0", () => {
  assertThrows(
    () => clean("(223) 056-7890"),
    Error,
    "Exchange code cannot start with zero",
  );
});

Deno.test("invalid if exchange code starts with 1", () => {
  assertThrows(
    () => clean("(223) 156-7890"),
    Error,
    "Exchange code cannot start with one",
  );
});

Deno.test("invalid if area code starts with 0 on valid 11-digit number", () => {
  assertThrows(
    () => clean("1 (023) 456-7890"),
    Error,
    "Area code cannot start with zero",
  );
});

Deno.test("invalid if area code starts with 1 on valid 11-digit number", () => {
  assertThrows(
    () => clean("1 (123) 456-7890"),
    Error,
    "Area code cannot start with one",
  );
});

Deno.test("invalid if exchange code starts with 0 on valid 11-digit number", () => {
  assertThrows(
    () => clean("1 (223) 056-7890"),
    Error,
    "Exchange code cannot start with zero",
  );
});

Deno.test("invalid if exchange code starts with 1 on valid 11-digit number", () => {
  assertThrows(
    () => clean("1 (223) 156-7890"),
    Error,
    "Exchange code cannot start with one",
  );
});
