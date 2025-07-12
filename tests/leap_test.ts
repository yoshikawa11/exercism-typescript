import { isLeap } from "../answers/leap.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(isLeap(1996), true);
  assertEquals(isLeap(2000), true);
  assertEquals(isLeap(2100), false);
});
