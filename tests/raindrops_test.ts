import { convert } from "../answers/raindrops.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("the sound for 1 is 1", () => {
  assertEquals(convert(1), "1");
});

Deno.test("the sound for 3 is Pling", () => {
  assertEquals(convert(3), "Pling");
});

Deno.test("the sound for 5 is Plang", () => {
  assertEquals(convert(5), "Plang");
});

Deno.test("the sound for 7 is Plong", () => {
  assertEquals(convert(7), "Plong");
});

Deno.test("the sound for 6 is Pling as it has factor 3", () => {
  assertEquals(convert(6), "Pling");
});

Deno.test("2 to the power 3 does not make a raindrop sound", () => {
  assertEquals(convert(8), "8");
});

Deno.test("the sound for 9 is Pling as it has factor 3", () => {
  assertEquals(convert(9), "Pling");
});

Deno.test("the sound for 10 is Plang as it has factor 5", () => {
  assertEquals(convert(10), "Plang");
});

Deno.test("the sound for 14 is Plong as it has factor 7", () => {
  assertEquals(convert(14), "Plong");
});

Deno.test("the sound for 15 is PlingPlang as it has factors 3 and 5", () => {
  assertEquals(convert(15), "PlingPlang");
});

Deno.test("the sound for 21 is PlingPlong as it has factors 3 and 7", () => {
  assertEquals(convert(21), "PlingPlong");
});

Deno.test("the sound for 25 is Plang as it has factor 5", () => {
  assertEquals(convert(25), "Plang");
});

Deno.test("the sound for 27 is Pling as it has factor 3", () => {
  assertEquals(convert(27), "Pling");
});

Deno.test("the sound for 35 is PlangPlong as it has factors 5 and 7", () => {
  assertEquals(convert(35), "PlangPlong");
});

Deno.test("the sound for 49 is Plong as it has factor 7", () => {
  assertEquals(convert(49), "Plong");
});

Deno.test("the sound for 52 is 52", () => {
  assertEquals(convert(52), "52");
});

Deno.test("the sound for 105 is PlingPlangPlong as it has factors 3, 5 and 7", () => {
  assertEquals(convert(105), "PlingPlangPlong");
});

Deno.test("the sound for 3125 is Plang as it has factor 5", () => {
  assertEquals(convert(3125), "Plang");
});
