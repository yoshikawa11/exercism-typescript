import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { doAction } from "../answers/secretHandshake.ts";

Deno.test("wink for 1", () => {
  assertEquals(doAction(1), ["wink"]);
});

Deno.test("double blink for 10", () => {
  assertEquals(doAction(2), ["double blink"]);
});

Deno.test("close your eyes for 100", () => {
  assertEquals(doAction(4), ["close your eyes"]);
});

Deno.test("jump for 1000", () => {
  assertEquals(doAction(8), ["jump"]);
});

Deno.test("combine two actions", () => {
  assertEquals(doAction(3), ["wink", "double blink"]);
});

Deno.test("reverse two actions with high bit", () => {
  assertEquals(doAction(19), ["double blink", "wink"]);
});

Deno.test("no actions for zero", () => {
  assertEquals(doAction(0), []);
});

Deno.test("no actions for unknown bits", () => {
  assertEquals(doAction(32), []);
});
