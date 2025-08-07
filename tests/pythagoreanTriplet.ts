import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { triplets } from "../answers/pythagoreanTriplet.ts";

type Triplet = [number, number, number];

function tripletsWithSum(sum: number, options = {}): Triplet[] {
  return triplets({ ...options, sum }).map((triplet) =>
    triplet.toArray().sort((a, b) => a - b)
  );
}

Deno.test("triplets whose sum is 12", () => {
  assertEquals(tripletsWithSum(12), [[3, 4, 5]]);
});

Deno.test("triplets whose sum is 108", () => {
  assertEquals(tripletsWithSum(108), [[27, 36, 45]]);
});

Deno.test("triplets whose sum is 1000", () => {
  assertEquals(tripletsWithSum(1000), [[200, 375, 425]]);
});

Deno.test("no matching triplets for 1001", () => {
  assertEquals(tripletsWithSum(1001), []);
});

Deno.test("returns all matching triplets", () => {
  assertEquals(tripletsWithSum(90), [
    [9, 40, 41],
    [15, 36, 39],
  ]);
});

Deno.test("several matching triplets", () => {
  assertEquals(tripletsWithSum(840), [
    [40, 399, 401],
    [56, 390, 394],
    [105, 360, 375],
    [120, 350, 370],
    [140, 336, 364],
    [168, 315, 357],
    [210, 280, 350],
    [240, 252, 348],
  ]);
});

Deno.test("returns triplets with no factor smaller than minimum factor", () => {
  assertEquals(tripletsWithSum(90, { minFactor: 10 }), [[15, 36, 39]]);
});

Deno.test("returns triplets with no factor larger than maximum factor", () => {
  assertEquals(tripletsWithSum(840, { maxFactor: 349 }), [[240, 252, 348]]);
});

Deno.test("returns triplets with factors in range", () => {
  assertEquals(tripletsWithSum(840, { maxFactor: 352, minFactor: 150 }), [
    [210, 280, 350],
    [240, 252, 348],
  ]);
});

Deno.test("triplets for large number", () => {
  assertEquals(tripletsWithSum(30000), [
    [1200, 14375, 14425],
    [1875, 14000, 14125],
    [5000, 12000, 13000],
    [6000, 11250, 12750],
    [7500, 10000, 12500],
  ]);
});
