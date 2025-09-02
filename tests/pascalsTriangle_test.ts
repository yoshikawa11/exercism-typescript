import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Triangle } from "../answers/pascalsTriangle.ts";

Deno.test("Triangle with one row", () => {
  assertEquals(new Triangle(1).rows, [[1]]);
});

Deno.test("Triangle with two rows", () => {
  assertEquals(new Triangle(2).rows, [[1], [1, 1]]);
});

Deno.test("Triangle with three rows", () => {
  assertEquals(new Triangle(3).rows, [[1], [1, 1], [1, 2, 1]]);
});

Deno.test("Triangle last row (n=4)", () => {
  assertEquals(new Triangle(4).lastRow, [1, 3, 3, 1]);
});

Deno.test("Triangle fifth row", () => {
  assertEquals(new Triangle(5).lastRow, [1, 4, 6, 4, 1]);
});

Deno.test("Triangle twentieth row", () => {
  const twentieth = [
    1,
    19,
    171,
    969,
    3876,
    11628,
    27132,
    50388,
    75582,
    92378,
    92378,
    75582,
    50388,
    27132,
    11628,
    3876,
    969,
    171,
    19,
    1,
  ];
  assertEquals(new Triangle(20).lastRow, twentieth);
});
