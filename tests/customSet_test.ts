import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { CustomSet } from "../answers/customSet.ts";

Deno.test("empty: sets with no elements are empty", () => {
  const actual = new CustomSet().empty();
  assertEquals(actual, true);
});

Deno.test("empty: sets with elements are not empty", () => {
  const actual = new CustomSet([1]).empty();
  assertEquals(actual, false);
});

Deno.test("contains: nothing is contained in an empty set", () => {
  const actual = new CustomSet().contains(1);
  assertEquals(actual, false);
});

Deno.test("contains: when the element is in the set", () => {
  const actual = new CustomSet([1, 2, 3]).contains(1);
  assertEquals(actual, true);
});

Deno.test("contains: when the element is not in the set", () => {
  const actual = new CustomSet([1, 2, 3]).contains(4);
  assertEquals(actual, false);
});

Deno.test("subset: empty set is a subset of another empty set", () => {
  const actual = new CustomSet().subset(new CustomSet());
  assertEquals(actual, true);
});

Deno.test("subset: empty set is a subset of non-empty set", () => {
  const actual = new CustomSet().subset(new CustomSet([1]));
  assertEquals(actual, true);
});

Deno.test("subset: non-empty set is not a subset of empty set", () => {
  const actual = new CustomSet([1]).subset(new CustomSet());
  assertEquals(actual, false);
});

Deno.test("subset: set is a subset of set with exact same elements", () => {
  const actual = new CustomSet([1, 2, 3]).subset(new CustomSet([1, 2, 3]));
  assertEquals(actual, true);
});

Deno.test("subset: set is a subset of larger set with same elements", () => {
  const actual = new CustomSet([1, 2, 3]).subset(new CustomSet([4, 1, 2, 3]));
  assertEquals(actual, true);
});

Deno.test("subset: set is not a subset of set that does not contain its elements", () => {
  const actual = new CustomSet([1, 2, 3]).subset(new CustomSet([4, 1, 3]));
  assertEquals(actual, false);
});

Deno.test("disjoint: the empty set is disjoint with itself", () => {
  const actual = new CustomSet().disjoint(new CustomSet([]));
  assertEquals(actual, true);
});

Deno.test("disjoint: empty set is disjoint with non-empty set", () => {
  const actual = new CustomSet().disjoint(new CustomSet([1]));
  assertEquals(actual, true);
});

Deno.test("disjoint: non-empty set is disjoint with empty set", () => {
  const actual = new CustomSet([1]).disjoint(new CustomSet([]));
  assertEquals(actual, true);
});

Deno.test("disjoint: sets are not disjoint if they share an element", () => {
  const actual = new CustomSet([1, 2]).disjoint(new CustomSet([2, 3]));
  assertEquals(actual, false);
});

Deno.test("disjoint: sets are disjoint if they share no elements", () => {
  const actual = new CustomSet([1, 2]).disjoint(new CustomSet([3, 4]));
  assertEquals(actual, true);
});

Deno.test("eql: empty sets are equal", () => {
  const actual = new CustomSet().eql(new CustomSet());
  assertEquals(actual, true);
});

Deno.test("eql: empty set is not equal to non-empty set", () => {
  const actual = new CustomSet().eql(new CustomSet([1, 2, 3]));
  assertEquals(actual, false);
});

Deno.test("eql: non-empty set is not equal to empty set", () => {
  const actual = new CustomSet([1, 2, 3]).eql(new CustomSet());
  assertEquals(actual, false);
});

Deno.test("eql: sets with the same elements are equal", () => {
  const actual = new CustomSet([1, 2]).eql(new CustomSet([2, 1]));
  assertEquals(actual, true);
});

Deno.test("eql: sets with different elements are not equal", () => {
  const actual = new CustomSet([1, 2, 3]).eql(new CustomSet([1, 2, 4]));
  assertEquals(actual, false);
});

Deno.test("add: add to empty set", () => {
  const actual = new CustomSet().add(3);
  const expected = new CustomSet([3]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("add: add to non-empty set", () => {
  const actual = new CustomSet([1, 2, 4]).add(3);
  const expected = new CustomSet([1, 2, 3, 4]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("add: adding an existing element does not change the set", () => {
  const actual = new CustomSet([1, 2, 3]).add(3);
  const expected = new CustomSet([1, 2, 3]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("intersection: intersection of two empty sets is an empty set", () => {
  const actual = new CustomSet().intersection(new CustomSet());
  const expected = new CustomSet();
  assertEquals(actual.eql(expected), true);
});

Deno.test("intersection: intersection of an empty set and non-empty set is an empty set", () => {
  const actual = new CustomSet().intersection(new CustomSet([3, 2, 5]));
  const expected = new CustomSet([]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("intersection: intersection of a non-empty set and an empty set is an empty set", () => {
  const actual = new CustomSet([1, 2, 3, 4]).intersection(new CustomSet([]));
  const expected = new CustomSet([]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("intersection: intersection of two sets with no shared elements is an empty set", () => {
  const actual = new CustomSet([1, 2, 3]).intersection(
    new CustomSet([4, 5, 6]),
  );
  const expected = new CustomSet([]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("intersection: intersection of two sets with shared elements", () => {
  const actual = new CustomSet([1, 2, 3, 4]).intersection(
    new CustomSet([3, 2, 5]),
  );
  const expected = new CustomSet([2, 3]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("difference: difference of two empty sets is an empty set", () => {
  const actual = new CustomSet().difference(new CustomSet());
  const expected = new CustomSet();
  assertEquals(actual.eql(expected), true);
});

Deno.test("difference: difference of empty set and non-empty set is an empty set", () => {
  const actual = new CustomSet().difference(new CustomSet([3, 2, 5]));
  const expected = new CustomSet();
  assertEquals(actual.eql(expected), true);
});

Deno.test("difference: difference of a non-empty set and an empty set is the non-empty set", () => {
  const actual = new CustomSet([1, 2, 3, 4]).difference(new CustomSet());
  const expected = new CustomSet([1, 2, 3, 4]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("difference: difference of two non-empty sets", () => {
  const actual = new CustomSet([3, 2, 1]).difference(new CustomSet([2, 4]));
  const expected = new CustomSet([1, 3]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("union: union of empty sets is an empty set", () => {
  const actual = new CustomSet().union(new CustomSet());
  const expected = new CustomSet();
  assertEquals(actual.eql(expected), true);
});

Deno.test("union: union of an empty set and non-empty set is the non-empty set", () => {
  const actual = new CustomSet().union(new CustomSet([2]));
  const expected = new CustomSet([2]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("union: union of a non-empty set and empty set is the non-empty set", () => {
  const actual = new CustomSet([1, 3]).union(new CustomSet());
  const expected = new CustomSet([1, 3]);
  assertEquals(actual.eql(expected), true);
});

Deno.test("union: union of non-empty sets contains all unique elements", () => {
  const actual = new CustomSet([1, 3]).union(new CustomSet([2, 3]));
  const expected = new CustomSet([1, 2, 3]);
  assertEquals(actual.eql(expected), true);
});
