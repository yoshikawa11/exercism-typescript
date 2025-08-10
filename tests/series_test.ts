import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Series } from "../answers/series.ts";

Deno.test("Series slices of one from one", () => {
  assertEquals(new Series("1").slices(1), [[1]]);
});

Deno.test("Series slices of one from two", () => {
  assertEquals(new Series("12").slices(1), [[1], [2]]);
});

Deno.test("Series slices of two", () => {
  assertEquals(new Series("35").slices(2), [[3, 5]]);
});

Deno.test("Series slices of two overlap", () => {
  assertEquals(new Series("9142").slices(2), [
    [9, 1],
    [1, 4],
    [4, 2],
  ]);
});

Deno.test("Series slices can include duplicates", () => {
  assertEquals(new Series("777777").slices(3), [
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 7],
    [7, 7, 7],
  ]);
});

Deno.test("Series slices of long series", () => {
  assertEquals(new Series("918493904243").slices(5), [
    [9, 1, 8, 4, 9],
    [1, 8, 4, 9, 3],
    [8, 4, 9, 3, 9],
    [4, 9, 3, 9, 0],
    [9, 3, 9, 0, 4],
    [3, 9, 0, 4, 2],
    [9, 0, 4, 2, 4],
    [0, 4, 2, 4, 3],
  ]);
});

Deno.test("Series slice length is too large", () => {
  assertThrows(
    () => new Series("12345").slices(6),
    Error,
    "slice length cannot be greater than series length",
  );
});

Deno.test("Series slice length is way too large", () => {
  assertThrows(
    () => new Series("12345").slices(42),
    Error,
    "slice length cannot be greater than series length",
  );
});

Deno.test("Series slice length cannot be zero", () => {
  assertThrows(
    () => new Series("12345").slices(0),
    Error,
    "slice length cannot be zero",
  );
});

Deno.test("Series slice length cannot be negative", () => {
  assertThrows(
    () => new Series("123").slices(-1),
    Error,
    "slice length cannot be negative",
  );
});

Deno.test("Series empty series is invalid", () => {
  assertThrows(
    () => new Series("").slices(1),
    Error,
    "series cannot be empty",
  );
});
