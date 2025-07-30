import { steps } from "../answers/collatzConjecture.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("zero steps for one", () => {
  assertEquals(steps(1), 0);
});

Deno.test("divide if even", () => {
  assertEquals(steps(16), 4);
});

Deno.test("even and odd steps", () => {
  assertEquals(steps(12), 9);
});

Deno.test("large number of even and odd steps", () => {
  assertEquals(steps(1000000), 152);
});

Deno.test("reject zero", () => {
  assertThrows(() => steps(0), Error, "Only positive numbers are allowed");
});

Deno.test("reject negative", () => {
  assertThrows(() => steps(-15), Error, "Only positive numbers are allowed");
});
