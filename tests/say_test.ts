import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { sayInEnglish } from "../answers/say.ts";

Deno.test("zero", () => {
  assertEquals(sayInEnglish(0), "zero");
});

Deno.test("one", () => {
  assertEquals(sayInEnglish(1), "one");
});

Deno.test("fourteen", () => {
  assertEquals(sayInEnglish(14), "fourteen");
});

Deno.test("twenty", () => {
  assertEquals(sayInEnglish(20), "twenty");
});

Deno.test("twenty-two", () => {
  assertEquals(sayInEnglish(22), "twenty-two");
});

Deno.test("thirty", () => {
  assertEquals(sayInEnglish(30), "thirty");
});

Deno.test("ninety-nine", () => {
  assertEquals(sayInEnglish(99), "ninety-nine");
});

Deno.test("one hundred", () => {
  assertEquals(sayInEnglish(100), "one hundred");
});

Deno.test("one hundred twenty-three", () => {
  assertEquals(sayInEnglish(123), "one hundred twenty-three");
});

Deno.test("two hundred", () => {
  assertEquals(sayInEnglish(200), "two hundred");
});

Deno.test("nine hundred ninety-nine", () => {
  assertEquals(sayInEnglish(999), "nine hundred ninety-nine");
});

Deno.test("one thousand", () => {
  assertEquals(sayInEnglish(1000), "one thousand");
});

Deno.test("one thousand two hundred thirty-four", () => {
  assertEquals(sayInEnglish(1234), "one thousand two hundred thirty-four");
});

Deno.test("one million", () => {
  assertEquals(sayInEnglish(1000000), "one million");
});

Deno.test("one million two", () => {
  assertEquals(sayInEnglish(1000002), "one million two");
});

Deno.test("one million two thousand three hundred forty-five", () => {
  assertEquals(
    sayInEnglish(1002345),
    "one million two thousand three hundred forty-five",
  );
});

Deno.test("one billion", () => {
  assertEquals(sayInEnglish(1000000000), "one billion");
});

Deno.test("a really big number", () => {
  const expected =
    "nine hundred eighty-seven billion six hundred fifty-four million three hundred twenty-one thousand one hundred twenty-three";
  assertEquals(sayInEnglish(987654321123), expected);
});

Deno.test("raises an error below zero", () => {
  assertThrows(
    () => sayInEnglish(-1),
    Error,
    "Number must be between 0 and 999,999,999,999.",
  );
});

Deno.test("raises an error above 999,999,999,999", () => {
  assertThrows(
    () => sayInEnglish(1000000000000),
    Error,
    "Number must be between 0 and 999,999,999,999.",
  );
});
