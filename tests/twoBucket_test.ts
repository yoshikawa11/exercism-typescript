import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { TwoBucket } from "../answers/twoBucket.ts";

// Measure using bucket one of size 3 and bucket two of size 5
Deno.test("start with bucket one (3 and 5, goal 1)", () => {
  const twoBucket = new TwoBucket(3, 5, 1, "one");
  assertEquals(twoBucket.moves(), 4);
  assertEquals(twoBucket.goalBucket, "one");
  assertEquals(twoBucket.otherBucket, 5);
});

Deno.test("start with bucket two (3 and 5, goal 1)", () => {
  const twoBucket = new TwoBucket(3, 5, 1, "two");
  assertEquals(twoBucket.moves(), 8);
  assertEquals(twoBucket.goalBucket, "two");
  assertEquals(twoBucket.otherBucket, 3);
});

Deno.test("start with bucket one (7 and 11, goal 2)", () => {
  const twoBucket = new TwoBucket(7, 11, 2, "one");
  assertEquals(twoBucket.moves(), 14);
  assertEquals(twoBucket.goalBucket, "one");
  assertEquals(twoBucket.otherBucket, 11);
});

Deno.test("start with bucket two (7 and 11, goal 2)", () => {
  const twoBucket = new TwoBucket(7, 11, 2, "two");
  assertEquals(twoBucket.moves(), 18);
  assertEquals(twoBucket.goalBucket, "two");
  assertEquals(twoBucket.otherBucket, 7);
});

Deno.test("start with bucket two (1 and 3, goal 3)", () => {
  const twoBucket = new TwoBucket(1, 3, 3, "two");
  assertEquals(twoBucket.moves(), 1);
  assertEquals(twoBucket.goalBucket, "two");
  assertEquals(twoBucket.otherBucket, 0);
});

Deno.test("start with bucket one and end with bucket two (2 and 3, goal 3)", () => {
  const twoBucket = new TwoBucket(2, 3, 3, "one");
  assertEquals(twoBucket.moves(), 2);
  assertEquals(twoBucket.goalBucket, "two");
  assertEquals(twoBucket.otherBucket, 2);
});

Deno.test("Not possible to reach the goal (6 and 15, goal 5)", () => {
  assertThrows(() => {
    const twoBucket = new TwoBucket(6, 15, 5, "one");
    twoBucket.moves();
  });
});

Deno.test("Possible with different goal (6 and 15, goal 9)", () => {
  const twoBucket = new TwoBucket(6, 15, 9, "one");
  assertEquals(twoBucket.moves(), 10);
  assertEquals(twoBucket.goalBucket, "two");
  assertEquals(twoBucket.otherBucket, 0);
});

Deno.test("Goal larger than both buckets is impossible", () => {
  assertThrows(() => {
    const twoBucket = new TwoBucket(5, 7, 8, "one");
    twoBucket.moves();
  });
});
