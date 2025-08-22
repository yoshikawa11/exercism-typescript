import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { ofSize } from "../answers/spiralMatrix.ts";

Deno.test("empty spiral", () => {
  const expected: number[][] = [];
  const actual = ofSize(0);
  assertEquals(actual, expected);
});

Deno.test("trivial spiral", () => {
  const expected = [[1]];
  const actual = ofSize(1);
  assertEquals(actual, expected);
});

Deno.test("spiral of size 2", () => {
  const expected = [
    [1, 2],
    [4, 3],
  ];
  const actual = ofSize(2);
  assertEquals(actual, expected);
});

Deno.test("spiral of size 3", () => {
  const expected = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ];
  const actual = ofSize(3);
  assertEquals(actual, expected);
});

Deno.test("spiral of size 4", () => {
  const expected = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ];
  const actual = ofSize(4);
  assertEquals(actual, expected);
});

Deno.test("spiral of size 5", () => {
  const expected = [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
  ];
  const actual = ofSize(5);
  assertEquals(actual, expected);
});
