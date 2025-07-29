import { Triangle } from "../answers/triangle.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("equilateral triangles have equal sides", () => {
  const triangle = new Triangle(2, 2, 2);
  assertEquals(triangle.isEquilateral(), true);
});

Deno.test("larger equilateral triangles also have equal sides", () => {
  const triangle = new Triangle(10, 10, 10);
  assertEquals(triangle.isEquilateral(), true);
});

Deno.test("isosceles triangles have last two sides equal", () => {
  const triangle = new Triangle(3, 4, 4);
  assertEquals(triangle.isIsosceles(), true);
});

Deno.test("isosceles triangles have first and last sides equal", () => {
  const triangle = new Triangle(4, 3, 4);
  assertEquals(triangle.isIsosceles(), true);
});

Deno.test("isosceles triangles have two first sides equal", () => {
  const triangle = new Triangle(4, 4, 3);
  assertEquals(triangle.isIsosceles(), true);
});

Deno.test("isosceles triangles have in fact exactly two sides equal", () => {
  const triangle = new Triangle(10, 10, 2);
  assertEquals(triangle.isIsosceles(), true);
});

Deno.test("scalene triangles have no equal sides", () => {
  const triangle = new Triangle(3, 4, 5);
  assertEquals(triangle.isScalene(), true);
});

Deno.test("scalene triangles have no equal sides at a larger scale too", () => {
  const triangle = new Triangle(10, 11, 12);
  assertEquals(triangle.isScalene(), true);
});

Deno.test("scalene triangles have no equal sides in descending order either", () => {
  const triangle = new Triangle(5, 4, 2);
  assertEquals(triangle.isScalene(), true);
});

Deno.test("very small triangles are legal", () => {
  const triangle = new Triangle(0.4, 0.6, 0.3);
  assertEquals(triangle.isScalene(), true);
});

Deno.test("test triangles with no size are illegal", () => {
  const triangle = new Triangle(0, 0, 0);
  assertEquals(triangle.isEquilateral(), false);
  assertEquals(triangle.isIsosceles(), false);
  assertEquals(triangle.isScalene(), false);
});

Deno.test("triangles violating triangle inequality are illegal", () => {
  const triangle = new Triangle(1, 1, 3);
  assertEquals(triangle.isEquilateral(), false);
  assertEquals(triangle.isIsosceles(), false);
  assertEquals(triangle.isScalene(), false);
});
