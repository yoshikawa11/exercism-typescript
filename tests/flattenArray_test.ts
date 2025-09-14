import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { flatten } from "../answers/flattenArray.ts";

Deno.test("no nesting", () => {
  const expected = [0, 1, 2];
  assertEquals(flatten([0, 1, 2]), expected);
});

Deno.test("flattens array with just integers present", () => {
  const expected = [1, 2, 3, 4, 5, 6, 7, 8];
  assertEquals(flatten([1, [2, 3, 4, 5, 6, 7], 8]), expected);
});

Deno.test("5 level nesting", () => {
  const expected = [0, 2, 2, 3, 8, 100, 4, 50, -2];
  assertEquals(flatten([0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2]), expected);
});

Deno.test("6 level nesting", () => {
  const expected = [1, 2, 3, 4, 5, 6, 7, 8];
  assertEquals(flatten([1, [2, [[3]], [4, [[5]]], 6, 7], 8]), expected);
});

Deno.test("6 level nest list with null values", () => {
  const expected = [0, 2, 2, 3, 8, 100, -2];
  assertEquals(
    flatten([0, 2, [[2, 3], 8, [[100]], undefined, [[undefined]]], -2]),
    expected,
  );
});

Deno.test("all values in nested list are null", () => {
  const expected: number[] = [];
  assertEquals(
    flatten([
      undefined,
      [[[undefined]]],
      undefined,
      undefined,
      [[undefined, undefined], undefined],
      undefined,
    ]),
    expected,
  );
});
