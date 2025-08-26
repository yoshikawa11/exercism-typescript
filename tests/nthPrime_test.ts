import { nth } from "../answers/nthPrime.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("first", () => {
  assertEquals(nth(1), 2);
});

Deno.test("second", () => {
  assertEquals(nth(2), 3);
});

Deno.test("sixth", () => {
  assertEquals(nth(6), 13);
});

Deno.test("big prime", () => {
  assertEquals(nth(10001), 104743);
});

Deno.test("weird case", () => {
  assertThrows(() => nth(0), Error, "Prime is not possible");
});
