import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { List } from "../answers/listOps.ts";

Deno.test("create and toArray", () => {
  const list = List.create(1, 2, 3);
  assertEquals(list.toArray(), [1, 2, 3]);
});

Deno.test("append", () => {
  const list1 = List.create(1, 2);
  const list2 = List.create(3, 4);
  assertEquals(list1.append(list2).toArray(), [1, 2, 3, 4]);
});

Deno.test("append empty", () => {
  const list1 = List.create();
  const list2 = List.create(3, 4);
  assertEquals(list1.append(list2).toArray(), [3, 4]);
});

Deno.test("concat", () => {
  const list1 = List.create(1, 2);
  const list2 = List.create(3);
  const list3 = List.create<number>();
  const list4 = List.create(4, 5, 6);
  const listOfLists = List.create(list2, list3, list4);
  const test = list1.concat(listOfLists).toArray();
  console.log(test);
  assertEquals(test, [1, 2, 3, 4, 5, 6]);
});

Deno.test("filter", () => {
  const list = List.create(1, 2, 3, 4);
  assertEquals(list.filter((x) => x % 2 === 0).toArray(), [2, 4]);
});

Deno.test("map", () => {
  const list = List.create(1, 2, 3);
  assertEquals(list.map((x) => x * 2).toArray(), [2, 4, 6]);
});

Deno.test("foldl", () => {
  const list = List.create(1, 2, 3);
  assertEquals(list.foldl((acc, x) => acc + x, 0), 6);
});

Deno.test("foldr", () => {
  const list = List.create(1, 2, 3);
  assertEquals(list.foldr((x, acc) => acc + x, ""), "321");
});

Deno.test("reverse", () => {
  const list = List.create(1, 2, 3);
  assertEquals(list.reverse().toArray(), [3, 2, 1]);
});

Deno.test("forEach", () => {
  const list = List.create("a", "b", "c");
  const result: string[] = [];
  list.forEach((x) => result[result.length] = x);
  assertEquals(result, ["a", "b", "c"]);
});
