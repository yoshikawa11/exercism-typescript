import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { eggCount } from "../answers/eliudsEggs.ts";

Deno.test("0 eggs", () => {
  const expected = 0;
  const actual = eggCount(0);
  assertEquals(actual, expected);
});

Deno.test("1 egg", () => {
  const expected = 1;
  const actual = eggCount(16);
  assertEquals(actual, expected);
});

Deno.test("4 eggs", () => {
  const expected = 4;
  const actual = eggCount(89);
  assertEquals(actual, expected);
});

Deno.test("13 eggs", () => {
  const expected = 13;
  const actual = eggCount(2000000000);
  assertEquals(actual, expected);
});
