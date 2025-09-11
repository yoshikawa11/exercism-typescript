import { decode, encode } from "../answers/runLengthEncoding.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("run-length encode a string - empty string", () => {
  const expected = "";
  assertEquals(encode(""), expected);
});

Deno.test("run-length encode a string - single characters only are encoded without count", () => {
  const expected = "XYZ";
  assertEquals(encode("XYZ"), expected);
});

Deno.test("run-length encode a string - string with no single characters", () => {
  const expected = "2A3B4C";
  assertEquals(encode("AABBBCCCC"), expected);
});

Deno.test("run-length encode a string - single characters mixed with repeated characters", () => {
  const expected = "12WB12W3B24WB";
  assertEquals(
    encode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB"),
    expected,
  );
});

Deno.test("run-length encode a string - multiple whitespace mixed in string", () => {
  const expected = "2 hs2q q2w2 ";
  assertEquals(encode("  hsqq qww  "), expected);
});

Deno.test("run-length encode a string - lowercase characters", () => {
  const expected = "2a3b4c";
  assertEquals(encode("aabbbcccc"), expected);
});

Deno.test("run-length decode a string - empty string", () => {
  const expected = "";
  assertEquals(decode(""), expected);
});

Deno.test("run-length decode a string - single characters only", () => {
  const expected = "XYZ";
  assertEquals(decode("XYZ"), expected);
});

Deno.test("run-length decode a string - string with no single characters", () => {
  const expected = "AABBBCCCC";
  assertEquals(decode("2A3B4C"), expected);
});

Deno.test("run-length decode a string - single characters with repeated characters", () => {
  const expected = "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB";
  assertEquals(decode("12WB12W3B24WB"), expected);
});

Deno.test("run-length decode a string - multiple whitespace mixed in string", () => {
  const expected = "  hsqq qww  ";
  assertEquals(decode("2 hs2q q2w2 "), expected);
});

Deno.test("run-length decode a string - lower case string", () => {
  const expected = "aabbbcccc";
  assertEquals(decode("2a3b4c"), expected);
});

Deno.test("encode and then decode - encode followed by decode gives original string", () => {
  assertEquals(decode(encode("zzz ZZ  zZ")), "zzz ZZ  zZ");
});
