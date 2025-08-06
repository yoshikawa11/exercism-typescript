import {
  assertAlmostEquals,
  assertEquals,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { ComplexNumber } from "../answers/complexNumbers.ts";

Deno.test("Real part of a purely real number", () => {
  const expected = 1;
  const actual = new ComplexNumber(1, 0).real;
  assertEquals(actual, expected);
});

Deno.test("Real part of a purely imaginary number", () => {
  const expected = 0;
  const actual = new ComplexNumber(0, 1).real;
  assertEquals(actual, expected);
});

Deno.test("Real part of a number with real and imaginary part", () => {
  const expected = 1;
  const actual = new ComplexNumber(1, 2).real;
  assertEquals(actual, expected);
});

Deno.test("Imaginary part of a purely real number", () => {
  const expected = 0;
  const actual = new ComplexNumber(1, 0).imag;
  assertEquals(actual, expected);
});

Deno.test("Imaginary part of a purely imaginary number", () => {
  const expected = 1;
  const actual = new ComplexNumber(0, 1).imag;
  assertEquals(actual, expected);
});

Deno.test("Imaginary part of a number with real and imaginary part", () => {
  const expected = 2;
  const actual = new ComplexNumber(1, 2).imag;
  assertEquals(actual, expected);
});

Deno.test("Add purely real numbers", () => {
  const expected = new ComplexNumber(3, 0);
  const actual = new ComplexNumber(1, 0).add(new ComplexNumber(2, 0));
  assertEquals(actual, expected);
});

Deno.test("Add purely imaginary numbers", () => {
  const expected = new ComplexNumber(0, 3);
  const actual = new ComplexNumber(0, 1).add(new ComplexNumber(0, 2));
  assertEquals(actual, expected);
});

Deno.test("Add numbers with real and imaginary part", () => {
  const expected = new ComplexNumber(4, 6);
  const actual = new ComplexNumber(1, 2).add(new ComplexNumber(3, 4));
  assertEquals(actual, expected);
});

Deno.test("Subtract purely real numbers", () => {
  const expected = new ComplexNumber(-1, 0);
  const actual = new ComplexNumber(1, 0).sub(new ComplexNumber(2, 0));
  assertEquals(actual, expected);
});

Deno.test("Subtract purely imaginary numbers", () => {
  const expected = new ComplexNumber(0, -1);
  const actual = new ComplexNumber(0, 1).sub(new ComplexNumber(0, 2));
  assertEquals(actual, expected);
});

Deno.test("Subtract numbers with real and imaginary part", () => {
  const expected = new ComplexNumber(-2, -2);
  const actual = new ComplexNumber(1, 2).sub(new ComplexNumber(3, 4));
  assertEquals(actual, expected);
});

Deno.test("Multiply purely real numbers", () => {
  const expected = new ComplexNumber(2, 0);
  const actual = new ComplexNumber(1, 0).mul(new ComplexNumber(2, 0));
  assertEquals(actual, expected);
});

Deno.test("Multiply imaginary unit", () => {
  const expected = new ComplexNumber(-1, 0);
  const actual = new ComplexNumber(0, 1).mul(new ComplexNumber(0, 1));
  assertEquals(actual, expected);
});

Deno.test("Multiply purely imaginary numbers", () => {
  const expected = new ComplexNumber(-2, 0);
  const actual = new ComplexNumber(0, 1).mul(new ComplexNumber(0, 2));
  assertEquals(actual, expected);
});

Deno.test("Multiply numbers with real and imaginary part", () => {
  const expected = new ComplexNumber(-5, 10);
  const actual = new ComplexNumber(1, 2).mul(new ComplexNumber(3, 4));
  assertEquals(actual, expected);
});

Deno.test("Divide purely real numbers", () => {
  const expected = new ComplexNumber(0.5, 0);
  const actual = new ComplexNumber(1, 0).div(new ComplexNumber(2, 0));
  assertEquals(actual, expected);
});

Deno.test("Divide purely imaginary numbers", () => {
  const expected = new ComplexNumber(0.5, 0);
  const actual = new ComplexNumber(0, 1).div(new ComplexNumber(0, 2));
  assertEquals(actual, expected);
});

Deno.test("Divide numbers with real and imaginary part", () => {
  const expected = new ComplexNumber(0.44, 0.08);
  const actual = new ComplexNumber(1, 2).div(new ComplexNumber(3, 4));
  assertAlmostEquals(actual.real, expected.real);
  assertAlmostEquals(actual.imag, expected.imag);
});

Deno.test("Absolute value of a positive purely real number", () => {
  const expected = 5;
  const actual = new ComplexNumber(5, 0).abs;
  assertEquals(actual, expected);
});

Deno.test("Absolute value of a negative purely real number", () => {
  const expected = 5;
  const actual = new ComplexNumber(-5, 0).abs;
  assertEquals(actual, expected);
});

Deno.test("Absolute value of a purely imaginary number with positive imaginary part", () => {
  const expected = 5;
  const actual = new ComplexNumber(0, 5).abs;
  assertEquals(actual, expected);
});

Deno.test("Absolute value of a purely imaginary number with negative imaginary part", () => {
  const expected = 5;
  const actual = new ComplexNumber(0, -5).abs;
  assertEquals(actual, expected);
});

Deno.test("Absolute value of a number with real and imaginary part", () => {
  const expected = 5;
  const actual = new ComplexNumber(3, 4).abs;
  assertEquals(actual, expected);
});

Deno.test("Conjugate a purely real number", () => {
  const expected = new ComplexNumber(5, 0);
  const actual = new ComplexNumber(5, 0).conj;
  assertEquals(actual, expected);
});

Deno.test("Conjugate a purely imaginary number", () => {
  const expected = new ComplexNumber(0, -5);
  const actual = new ComplexNumber(0, 5).conj;
  assertEquals(actual, expected);
});

Deno.test("Conjugate a number with real and imaginary part", () => {
  const expected = new ComplexNumber(1, -1);
  const actual = new ComplexNumber(1, 1).conj;
  assertEquals(actual, expected);
});

Deno.test("Euler's identity/formula", () => {
  const expected = new ComplexNumber(-1, 0);
  const actual = new ComplexNumber(0, Math.PI).exp;
  assertAlmostEquals(actual.real, expected.real);
  assertAlmostEquals(actual.imag, expected.imag);
});

Deno.test("Exponential of 0", () => {
  const expected = new ComplexNumber(1, 0);
  const actual = new ComplexNumber(0, 0).exp;
  assertAlmostEquals(actual.real, expected.real);
  assertAlmostEquals(actual.imag, expected.imag);
});

Deno.test("Exponential of a purely real number", () => {
  const expected = new ComplexNumber(Math.E, 0);
  const actual = new ComplexNumber(1, 0).exp;
  assertAlmostEquals(actual.real, expected.real);
  assertAlmostEquals(actual.imag, expected.imag);
});
