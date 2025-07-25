import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Squares } from "../answers/differenceOfSquares.ts";

Deno.test("square of sum 1", () => {
  const diff = new Squares(1);
  assertEquals(diff.squareOfSum, 1);
});

Deno.test("square of sum 5", () => {
  const diff = new Squares(5);
  assertEquals(diff.squareOfSum, 225);
});

Deno.test("square of sum 100", () => {
  const diff = new Squares(100);
  assertEquals(diff.squareOfSum, 25502500);
});

Deno.test("sum of squares 1", () => {
  const diff = new Squares(1);
  assertEquals(diff.sumOfSquares, 1);
});

Deno.test("sum of squares 5", () => {
  const diff = new Squares(5);
  assertEquals(diff.sumOfSquares, 55);
});

Deno.test("sum of squares 100", () => {
  const diff = new Squares(100);
  assertEquals(diff.sumOfSquares, 338350);
});

Deno.test("difference of squares 1", () => {
  const diff = new Squares(1);
  assertEquals(diff.difference, 0);
});

Deno.test("difference of squares 5", () => {
  const diff = new Squares(5);
  assertEquals(diff.difference, 170);
});

Deno.test("difference of squares 100", () => {
  const diff = new Squares(100);
  assertEquals(diff.difference, 25164150);
});
