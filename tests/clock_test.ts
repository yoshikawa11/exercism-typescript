import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Clock } from "../answers/clock.ts";

Deno.test("on the hour", () => {
  const clock = new Clock(8);
  assertEquals(clock.toString(), "08:00");
});

Deno.test("past the hour", () => {
  const clock = new Clock(11, 9);
  assertEquals(clock.toString(), "11:09");
});

Deno.test("add minutes", () => {
  const clock = new Clock(10).plus(3);
  assertEquals(clock.toString(), "10:03");
});

Deno.test("subtract minutes", () => {
  const clock = new Clock(10).minus(90);
  assertEquals(clock.toString(), "08:30");
});

Deno.test("subtract to previous hour", () => {
  const clock = new Clock(0, 3).minus(4);
  assertEquals(clock.toString(), "23:59");
});

Deno.test("clock equality same time", () => {
  const clock1 = new Clock(15, 37);
  const clock2 = new Clock(15, 37);
  assertEquals(clock1.equals(clock2), true);
});

Deno.test("clock equality different time", () => {
  const clock1 = new Clock(15, 36);
  const clock2 = new Clock(15, 37);
  assertEquals(clock1.equals(clock2), false);
});

Deno.test("handles negative hour", () => {
  const clock = new Clock(-1, 15);
  assertEquals(clock.toString(), "23:15");
});

Deno.test("handles negative minutes", () => {
  const clock = new Clock(1, -40);
  assertEquals(clock.toString(), "00:20");
});
