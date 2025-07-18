import {
  assertAlmostEquals,
  assertEquals,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Rational } from "../answers/rational.ts";

Deno.test("Addition", () => {
  assertEquals(new Rational(1, 2).add(new Rational(1, 2)), new Rational(1, 1));
});

Deno.test("Addition with non-trivial common denominator", () => {
  assertEquals(new Rational(1, 4).add(new Rational(1, 6)), new Rational(5, 12));
});

Deno.test("Addition with negative", () => {
  assertEquals(new Rational(1, 2).add(new Rational(-1, 2)), new Rational(0, 1));
});

Deno.test("Subtraction", () => {
  assertEquals(new Rational(1, 2).sub(new Rational(1, 2)), new Rational(0, 1));
});

Deno.test("Multiplication", () => {
  assertEquals(new Rational(1, 2).mul(new Rational(2, 1)), new Rational(1, 1));
});

Deno.test("Division", () => {
  assertEquals(new Rational(1, 2).div(new Rational(2, 1)), new Rational(1, 4));
});

Deno.test("Absolute value of positive rational", () => {
  assertEquals(new Rational(1, 2).abs(), new Rational(1, 2));
});

Deno.test("Absolute value of negative rational", () => {
  assertEquals(new Rational(-1, 2).abs(), new Rational(1, 2));
});

Deno.test("Absolute value of rational with negative denominator", () => {
  assertEquals(new Rational(1, -2).abs(), new Rational(1, 2));
});

Deno.test("Absolute value of zero", () => {
  assertEquals(new Rational(0, 1).abs(), new Rational(0, 1));
});

Deno.test("Exponent of a rational number", () => {
  assertEquals(new Rational(1, 2).exprational(3), new Rational(1, 8));
});

Deno.test("Exponent of a negative rational number", () => {
  assertEquals(new Rational(-1, 2).exprational(3), new Rational(-1, 8));
});

Deno.test("Exponent of a rational number to a negative integer", () => {
  assertEquals(new Rational(2, 3).exprational(-2), new Rational(9, 4));
});

Deno.test("Exponent of a rational number to zero", () => {
  assertEquals(new Rational(-1, 2).exprational(0), new Rational(1, 1));
});

Deno.test("Rational number raised to real power", () => {
  const result = new Rational(8, 27).expreal(1.5);
  assertAlmostEquals(result, 0.1612832752449829, 1e-12);
});

Deno.test("Reduction to lowest terms", () => {
  assertEquals(new Rational(2, 4), new Rational(1, 2));
});

Deno.test("Negative denominator should flip signs", () => {
  assertEquals(new Rational(3, -4), new Rational(-3, 4));
});

Deno.test("Both numerator and denominator negative should simplify to positive", () => {
  assertEquals(new Rational(-2, -5), new Rational(2, 5));
});
