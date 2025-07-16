import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { LinkedList } from "../answers/linkedList.ts";

Deno.test("pop returns null on empty list", () => {
  const list = new LinkedList<number>();
  assertEquals(list.pop(), null);
});

Deno.test("push then pop returns value", () => {
  const list = new LinkedList<number>();
  list.push(10);
  assertEquals(list.pop(), 10);
});

Deno.test("push then shift returns value", () => {
  const list = new LinkedList<number>();
  list.push(20);
  assertEquals(list.shift(), 20);
});

Deno.test("unshift then shift returns value", () => {
  const list = new LinkedList<number>();
  list.unshift(30);
  assertEquals(list.shift(), 30);
});

Deno.test("unshift then pop returns value", () => {
  const list = new LinkedList<number>();
  list.unshift(40);
  assertEquals(list.pop(), 40);
});

Deno.test("delete middle element", () => {
  const list = new LinkedList<number>();
  list.push(1);
  list.push(2);
  list.push(3);
  list.delete(2);
  assertEquals(list.count(), 2);
  assertEquals(list.shift(), 1);
  assertEquals(list.pop(), 3);
});

Deno.test("count reflects correct size", () => {
  const list = new LinkedList<number>();
  list.push(1);
  list.push(2);
  assertEquals(list.count(), 2);
  list.pop();
  assertEquals(list.count(), 1);
  list.shift();
  assertEquals(list.count(), 0);
});
