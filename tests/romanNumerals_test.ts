import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { toRoman } from "../answers/romanNumerals.ts";

Deno.test("toRoman() converts 1", () => {
  assertEquals(toRoman(1), "I");
});

Deno.test("toRoman() converts 2", () => {
  assertEquals(toRoman(2), "II");
});

Deno.test("toRoman() converts 3", () => {
  assertEquals(toRoman(3), "III");
});

Deno.test("toRoman() converts 4", () => {
  assertEquals(toRoman(4), "IV");
});

Deno.test("toRoman() converts 5", () => {
  assertEquals(toRoman(5), "V");
});

Deno.test("toRoman() converts 6", () => {
  assertEquals(toRoman(6), "VI");
});

Deno.test("toRoman() converts 9", () => {
  assertEquals(toRoman(9), "IX");
});

Deno.test("toRoman() converts 16", () => {
  assertEquals(toRoman(16), "XVI");
});

Deno.test("toRoman() converts 27", () => {
  assertEquals(toRoman(27), "XXVII");
});

Deno.test("toRoman() converts 48", () => {
  assertEquals(toRoman(48), "XLVIII");
});

Deno.test("toRoman() converts 49", () => {
  assertEquals(toRoman(49), "XLIX");
});

Deno.test("toRoman() converts 59", () => {
  assertEquals(toRoman(59), "LIX");
});

Deno.test("toRoman() converts 66", () => {
  assertEquals(toRoman(66), "LXVI");
});

Deno.test("toRoman() converts 93", () => {
  assertEquals(toRoman(93), "XCIII");
});

Deno.test("toRoman() converts 141", () => {
  assertEquals(toRoman(141), "CXLI");
});

Deno.test("toRoman() converts 163", () => {
  assertEquals(toRoman(163), "CLXIII");
});

Deno.test("toRoman() converts 166", () => {
  assertEquals(toRoman(166), "CLXVI");
});

Deno.test("toRoman() converts 402", () => {
  assertEquals(toRoman(402), "CDII");
});

Deno.test("toRoman() converts 575", () => {
  assertEquals(toRoman(575), "DLXXV");
});

Deno.test("toRoman() converts 666", () => {
  assertEquals(toRoman(666), "DCLXVI");
});

Deno.test("toRoman() converts 911", () => {
  assertEquals(toRoman(911), "CMXI");
});

Deno.test("toRoman() converts 1024", () => {
  assertEquals(toRoman(1024), "MXXIV");
});

Deno.test("toRoman() converts 1666", () => {
  assertEquals(toRoman(1666), "MDCLXVI");
});

Deno.test("toRoman() converts 3000", () => {
  assertEquals(toRoman(3000), "MMM");
});

Deno.test("toRoman() converts 3001", () => {
  assertEquals(toRoman(3001), "MMMI");
});

Deno.test("toRoman() converts 3999", () => {
  assertEquals(toRoman(3999), "MMMCMXCIX");
});
