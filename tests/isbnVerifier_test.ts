import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { isValid } from "../answers/isbnVerifier.ts";

Deno.test("valid isbn", () => {
  assert(isValid("3-598-21508-8"));
});

Deno.test("invalid isbn check digit", () => {
  assertEquals(isValid("3-598-21508-9"), false);
});

Deno.test("valid isbn with a check digit of 10", () => {
  assert(isValid("3-598-21507-X"));
});

Deno.test("check digit is a character other than X", () => {
  assertEquals(isValid("3-598-21507-A"), false);
});

Deno.test("invalid check digit in isbn is not treated as zero", () => {
  assertEquals(isValid("4-598-21507-B"), false);
});

Deno.test("invalid character in isbn is not treated as zero", () => {
  assertEquals(isValid("3-598-2K507-0"), false);
});

Deno.test("X is only valid as a check digit", () => {
  assertEquals(isValid("3-598-2X507-9"), false);
});

Deno.test("valid isbn without separating dashes", () => {
  assert(isValid("3598215088"));
});

Deno.test("isbn without separating dashes and X as check digit", () => {
  assert(isValid("359821507X"));
});

Deno.test("isbn without check digit and dashes", () => {
  assertEquals(isValid("359821507"), false);
});

Deno.test("too long isbn", () => {
  assertEquals(isValid("3-598-21507-XX"), false);
});

Deno.test("too long isbn and no dashes", () => {
  assertEquals(isValid("3598215078X"), false);
});

Deno.test("too short isbn", () => {
  assertEquals(isValid("00"), false);
});

Deno.test("isbn without check digit", () => {
  assertEquals(isValid("3-598-21507"), false);
});

Deno.test("check digit of X should not be used for 0", () => {
  assertEquals(isValid("3-598-21515-X"), false);
});

Deno.test("empty isbn", () => {
  assertEquals(isValid(""), false);
});

Deno.test("input is 9 characters", () => {
  assertEquals(isValid("134456729"), false);
});

Deno.test("invalid characters are not ignored after checking length", () => {
  assertEquals(isValid("3132P34035"), false);
});

Deno.test("invalid characters are not ignored before checking length", () => {
  assertEquals(isValid("3598P215088"), false);
});

Deno.test("input is too long but contains a valid isbn", () => {
  assertEquals(isValid("98245726788"), false);
});
