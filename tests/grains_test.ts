import { square, total } from "../answers/grains.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("1", () => {
  assertEquals(square(1), 1n);
});

Deno.test("2", () => {
  assertEquals(square(2), 2n);
});

Deno.test("3", () => {
  assertEquals(square(3), 4n);
});

Deno.test("4", () => {
  assertEquals(square(4), 8n);
});

Deno.test("16", () => {
  assertEquals(square(16), 32768n);
});

Deno.test("32", () => {
  assertEquals(square(32), 2147483648n);
});

Deno.test("64", () => {
  assertEquals(square(64), 9223372036854775808n);
});

Deno.test("square 0 raises an exception", () => {
  assertThrows(() => square(0));
});

Deno.test("negative square raises an exception", () => {
  assertThrows(() => square(-1));
});

Deno.test("square > 64 raises an exception", () => {
  assertThrows(() => square(65));
});

Deno.test("total grains on the board", () => {
  assertEquals(total(), 18446744073709551615n);
});
