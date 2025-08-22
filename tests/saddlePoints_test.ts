import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { saddlePoints } from "../answers/saddlePoints.ts";

Deno.test("Can identify single saddle point", () => {
  const expected = [{ row: 2, column: 1 }];
  const actual = saddlePoints([
    [9, 8, 7],
    [5, 3, 2],
    [6, 6, 7],
  ]);
  assertEquals(actual, expected);
});

Deno.test("Can identify that empty matrix has no saddle points", () => {
  const expected: { row: number; column: number }[] = [];
  const actual = saddlePoints([[]]);
  assertEquals(actual, expected);
});

Deno.test("Can identify lack of saddle points when there are none", () => {
  const expected: { row: number; column: number }[] = [];
  const actual = saddlePoints([
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
  ]);
  assertEquals(actual, expected);
});

Deno.test("Can identify multiple saddle points in a row", () => {
  const expected = [
    { row: 2, column: 1 },
    { row: 2, column: 2 },
    { row: 2, column: 3 },
  ];
  const actual = saddlePoints([
    [6, 7, 8],
    [5, 5, 5],
    [7, 5, 6],
  ]);
  assertEquals(actual, expected);
});

Deno.test("Can identify saddle point in bottom right corner", () => {
  const expected = [{ row: 3, column: 3 }];
  const actual = saddlePoints([
    [8, 7, 9],
    [6, 7, 6],
    [3, 2, 5],
  ]);
  assertEquals(actual, expected);
});

Deno.test("Can identify saddle points in a non square matrix", () => {
  const expected = [
    { row: 1, column: 1 },
    { row: 1, column: 3 },
  ];
  const actual = saddlePoints([
    [3, 1, 3],
    [3, 2, 4],
  ]);
  assertEquals(actual, expected);
});

Deno.test("Can identify that saddle points in a single column matrix are those with the minimum value", () => {
  const expected = [
    { row: 2, column: 1 },
    { row: 4, column: 1 },
  ];
  const actual = saddlePoints([[2], [1], [4], [1]]);
  assertEquals(actual, expected);
});

Deno.test("Can identify that saddle points in a single row matrix are those with the maximum value", () => {
  const expected = [
    { row: 1, column: 2 },
    { row: 1, column: 4 },
  ];
  const actual = saddlePoints([[2, 5, 3, 5]]);
  assertEquals(actual, expected);
});
