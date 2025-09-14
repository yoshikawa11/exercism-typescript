import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { discard, keep } from "../answers/strain.ts";

Deno.test("keeps on empty array returns empty array", () => {
  assertEquals(keep<number>([], (e: number) => e < 10), []);
});

Deno.test("keeps everything", () => {
  assertEquals(keep<number>([1, 2, 3], (e: number) => e < 10), [1, 2, 3]);
});

Deno.test("keeps first and last", () => {
  assertEquals(keep<number>([1, 2, 3], (e: number) => e % 2 === 1), [1, 3]);
});

Deno.test("keeps neither first nor last", () => {
  assertEquals(
    keep<number>([1, 2, 3, 4, 5], (e: number) => e % 2 === 0),
    [2, 4],
  );
});

Deno.test("keeps strings", () => {
  const words = "apple zebra banana zombies cherimoya zelot".split(" ");
  const result = keep<string>(words, (word: string) => word.indexOf("z") === 0);
  assertEquals(result, "zebra zombies zelot".split(" "));
});

Deno.test("keeps arrays", () => {
  const rows = [
    [1, 2, 3],
    [5, 5, 5],
    [5, 1, 2],
    [2, 1, 2],
    [1, 5, 2],
    [2, 2, 1],
    [1, 2, 5],
  ];
  const result = keep<number[]>(rows, (row: number[]) => row.indexOf(5) > -1);
  assertEquals(result, [
    [5, 5, 5],
    [5, 1, 2],
    [1, 5, 2],
    [1, 2, 5],
  ]);
});

Deno.test("empty discard", () => {
  assertEquals(discard<number>([], (e: number) => e < 10), []);
});

Deno.test("discards nothing", () => {
  assertEquals(discard<number>([1, 2, 3], (e: number) => e > 10), [1, 2, 3]);
});

Deno.test("discards first and last", () => {
  assertEquals(discard<number>([1, 2, 3], (e: number) => e % 2 === 1), [2]);
});

Deno.test("discards neither first nor last", () => {
  const result = discard<number>([1, 2, 3, 4, 5], (e: number) => e % 2 === 0);
  assertEquals(result, [1, 3, 5]);
});

Deno.test("discards strings", () => {
  const words = "apple zebra banana zombies cherimoya zelot".split(" ");
  const result = discard<string>(
    words,
    (word: string) => word.indexOf("z") === 0,
  );
  assertEquals(result, "apple banana cherimoya".split(" "));
});

Deno.test("discards arrays", () => {
  const rows = [
    [1, 2, 3],
    [5, 5, 5],
    [5, 1, 2],
    [2, 1, 2],
    [1, 5, 2],
    [2, 2, 1],
    [1, 2, 5],
  ];
  const result = discard<number[]>(
    rows,
    (row: number[]) => row.indexOf(5) > -1,
  );
  assertEquals(result, [
    [1, 2, 3],
    [2, 1, 2],
    [2, 2, 1],
  ]);
});
