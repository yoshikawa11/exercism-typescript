import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { count } from "../answers/rectangles.ts";

Deno.test("no rows", () => {
  const expected = 0;
  const actual = count([]);
  assertEquals(actual, expected);
});

Deno.test("no columns", () => {
  const expected = 0;
  const actual = count([""]);
  assertEquals(actual, expected);
});

Deno.test("no rectangles", () => {
  const expected = 0;
  const actual = count([" "]);
  assertEquals(actual, expected);
});

Deno.test("one rectangle", () => {
  const expected = 1;
  const actual = count(["+-+", "| |", "+-+"]);
  assertEquals(actual, expected);
});

Deno.test("two rectangles without shared parts", () => {
  const expected = 2;
  const actual = count(["  +-+", "  | |", "+-+-+", "| |  ", "+-+  "]);
  assertEquals(actual, expected);
});

Deno.test("five rectangles with shared parts", () => {
  const expected = 5;
  const actual = count(["  +-+", "  | |", "+-+-+", "| | |", "+-+-+"]);
  assertEquals(actual, expected);
});

Deno.test("rectangle of height 1 is counted", () => {
  const expected = 1;
  const actual = count(["+--+", "+--+"]);
  assertEquals(actual, expected);
});

Deno.test("rectangle of width 1 is counted", () => {
  const expected = 1;
  const actual = count(["++", "||", "++"]);
  assertEquals(actual, expected);
});

Deno.test("1x1 square is counted", () => {
  const expected = 1;
  const actual = count(["++", "++"]);
  assertEquals(actual, expected);
});

Deno.test("only complete rectangles are counted", () => {
  const expected = 1;
  const actual = count(["  +-+", "    |", "+-+-+", "| | -", "+-+-+"]);
  assertEquals(actual, expected);
});

Deno.test("rectangles can be of different sizes", () => {
  const expected = 3;
  const actual = count([
    "+------+----+",
    "|      |    |",
    "+---+--+    |",
    "|   |       |",
    "+---+-------+",
  ]);
  assertEquals(actual, expected);
});

Deno.test("corner is required for a rectangle to be complete", () => {
  const expected = 2;
  const actual = count([
    "+------+----+",
    "|      |    |",
    "+------+    |",
    "|   |       |",
    "+---+-------+",
  ]);
  assertEquals(actual, expected);
});

Deno.test("large input with many rectangles", () => {
  const expected = 60;
  const actual = count([
    "+---+--+----+",
    "|   +--+----+",
    "+---+--+    |",
    "|   +--+----+",
    "+---+--+--+-+",
    "+---+--+--+-+",
    "+------+  | |",
    "          +-+",
  ]);
  assertEquals(actual, expected);
});

Deno.test("rectangles must have four sides", () => {
  const expected = 5;
  const actual = count([
    "+-+ +-+",
    "| | | |",
    "+-+-+-+",
    "  | |  ",
    "+-+-+-+",
    "| | | |",
    "+-+ +-+",
  ]);
  assertEquals(actual, expected);
});
