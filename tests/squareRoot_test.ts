import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { squareRoot } from "../answers/squareRoot.ts";

Deno.test("root of 1", () => {
  assertEquals(squareRoot(1), 1);
});

Deno.test("root of 4", () => {
  assertEquals(squareRoot(4), 2);
});

Deno.test("root of 25", () => {
  assertEquals(squareRoot(25), 5);
});

Deno.test("root of 81", () => {
  assertEquals(squareRoot(81), 9);
});

Deno.test("root of 196", () => {
  assertEquals(squareRoot(196), 14);
});

Deno.test("root of 65025", () => {
  assertEquals(squareRoot(65025), 255);
});
