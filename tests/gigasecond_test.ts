import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Gigasecond } from "../answers/gigasecond.ts";

function dateEqual(actual: Date, expected: Date) {
  assertEquals(actual.toISOString(), expected.toISOString());
}

Deno.test("date only specification of time", () => {
  const gs = new Gigasecond(new Date(Date.UTC(2011, 3, 25)));
  dateEqual(gs.date(), new Date(Date.UTC(2043, 0, 1, 1, 46, 40)));
});

Deno.test("second test for date only specification of time", () => {
  const gs = new Gigasecond(new Date(Date.UTC(1977, 5, 13)));
  dateEqual(gs.date(), new Date(Date.UTC(2009, 1, 19, 1, 46, 40)));
});

Deno.test("third test for date only specification of time", () => {
  const gs = new Gigasecond(new Date(Date.UTC(1959, 6, 19)));
  dateEqual(gs.date(), new Date(Date.UTC(1991, 2, 27, 1, 46, 40)));
});

Deno.test("full time specified", () => {
  const gs = new Gigasecond(new Date(Date.UTC(2015, 0, 24, 22, 0, 0)));
  dateEqual(gs.date(), new Date(Date.UTC(2046, 9, 2, 23, 46, 40)));
});

Deno.test("full time with day roll-over", () => {
  const gs = new Gigasecond(new Date(Date.UTC(2015, 0, 24, 23, 59, 59)));
  dateEqual(gs.date(), new Date(Date.UTC(2046, 9, 3, 1, 46, 39)));
});
