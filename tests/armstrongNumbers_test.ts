import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { isArmstrongNumber } from "../answers/armstrongNumbers.ts";

Deno.test("Single-digit numbers are Armstrong numbers", () => {
  assertEquals(isArmstrongNumber(5), true);
});

Deno.test("There are no two-digit Armstrong numbers", () => {
  assertEquals(isArmstrongNumber(10), false);
});

Deno.test("Three-digit number that is an Armstrong number", () => {
  assertEquals(isArmstrongNumber(153), true);
});

Deno.test("Three-digit number that is not an Armstrong number", () => {
  assertEquals(isArmstrongNumber(100), false);
});

Deno.test("Four-digit number that is an Armstrong number", () => {
  assertEquals(isArmstrongNumber(9474), true);
});

Deno.test("Four-digit number that is not an Armstrong number", () => {
  assertEquals(isArmstrongNumber(9475), false);
});

Deno.test("Seven-digit number that is an Armstrong number", () => {
  assertEquals(isArmstrongNumber(9926315), true);
});

Deno.test("Seven-digit number that is not an Armstrong number", () => {
  assertEquals(isArmstrongNumber(9926314), false);
});

Deno.test("Armstrong number containing seven zeroes", () => {
  assertEquals(
    isArmstrongNumber(BigInt("186709961001538790100634132976990")),
    true,
  );
});

Deno.test("The largest and last Armstrong number", () => {
  assertEquals(
    isArmstrongNumber(BigInt("115132219018763992565095597973971522401")),
    true,
  );
});
