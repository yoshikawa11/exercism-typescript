import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { find } from "../answers/binarySearch.ts";

Deno.test("finds a value in an array with one element", () => {
  const arr = [6];
  const target = 6;
  assertEquals(find(arr, target), 0);
});

Deno.test("finds a value in the middle of an array", () => {
  const arr = [1, 3, 4, 6, 8, 9, 11];
  assertEquals(find(arr, 6), 3);
});

Deno.test("finds a value at the beginning of an array", () => {
  const arr = [1, 3, 4, 6, 8, 9, 11];
  assertEquals(find(arr, 1), 0);
});

Deno.test("finds a value at the end of an array", () => {
  const arr = [1, 3, 4, 6, 8, 9, 11];
  assertEquals(find(arr, 11), 6);
});

Deno.test("returns null if the value is not in the array", () => {
  const arr = [1, 3, 4, 6, 8, 9, 11];
  assertEquals(find(arr, 7), null);
});

Deno.test("returns null if the array is empty", () => {
  assertEquals(find([], 1), null);
});

Deno.test("finds a value in an array of odd length", () => {
  const arr = [1, 3, 5, 7, 9];
  assertEquals(find(arr, 5), 2);
});

Deno.test("finds a value in an array of even length", () => {
  const arr = [1, 3, 5, 7, 9, 11];
  assertEquals(find(arr, 5), 2);
});

Deno.test("returns null if the value is smaller than the smallest element", () => {
  const arr = [1, 3, 5, 7, 9, 11];
  assertEquals(find(arr, 0), null);
});

Deno.test("returns null if the value is larger than the largest element", () => {
  const arr = [1, 3, 5, 7, 9, 11];
  assertEquals(find(arr, 13), null);
});
