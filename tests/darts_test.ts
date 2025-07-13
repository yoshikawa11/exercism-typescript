import { score } from "../answers/darts.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(score(-9, 9), 0);
  assertEquals(score(0, 10), 1);
  assertEquals(score(-5, 0), 5);
  assertEquals(score(0, -1), 10);
  assertEquals(score(0, 0), 10);
  assertEquals(score(-0.1, -0.1), 10);
});
