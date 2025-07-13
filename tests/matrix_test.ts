import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Matrix } from "../answers/matrix.ts";

Deno.test("Matrix rows are parsed correctly", () => {
  const input = "1 2 3\n4 5 6\n7 8 9";
  const matrix = new Matrix(input);
  assertEquals(matrix.rows, [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});

Deno.test("Matrix columns are computed correctly", () => {
  const input = "1 2 3\n4 5 6\n7 8 9";
  const matrix = new Matrix(input);
  assertEquals(matrix.columns, [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);
});

Deno.test("Matrix handles extra whitespace", () => {
  const input = "  1   2  3 \n  4 5  6\n7 8   9  ";
  const matrix = new Matrix(input);
  assertEquals(matrix.rows, [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});
