import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { BinarySearchTree } from "../answers/binarySearchTree.ts";

function recordAllData(bst: BinarySearchTree): unknown[] {
  const out: unknown[] = [];
  bst.each((data) => {
    out.push(data);
  });
  return out;
}

Deno.test("BinarySearchTree should retain data", () => {
  assertEquals(new BinarySearchTree(4).data, 4);
});

Deno.test("BinarySearchTree should insert a lesser number to the left", () => {
  const four = new BinarySearchTree(4);
  four.insert(2);

  assertEquals(four.data, 4);
  assertEquals(four.left!.data, 2);
});

Deno.test("BinarySearchTree should insert the same number to the left", () => {
  const four = new BinarySearchTree(4);
  four.insert(4);

  assertEquals(four.data, 4);
  assertEquals(four.left!.data, 4);
});

Deno.test("BinarySearchTree should insert a greater number to the right", () => {
  const four = new BinarySearchTree(4);
  four.insert(5);

  assertEquals(four.data, 4);
  assertEquals(four.right!.data, 5);
});

Deno.test("BinarySearchTree should deal with a complex tree", () => {
  const four = new BinarySearchTree(4);
  four.insert(2);
  four.insert(6);
  four.insert(1);
  four.insert(3);
  four.insert(7);
  four.insert(5);

  assertEquals(four.data, 4);
  assertEquals(four.left!.data, 2);
  assertEquals(four.left!.left!.data, 1);
  assertEquals(four.left!.right!.data, 3);
  assertEquals(four.right!.data, 6);
  assertEquals(four.right!.left!.data, 5);
  assertEquals(four.right!.right!.data, 7);
});

Deno.test("BinarySearchTree should iterate over one element", () => {
  assertEquals(recordAllData(new BinarySearchTree(4)), [4]);
});

Deno.test("BinarySearchTree should iterate over smaller element", () => {
  const four = new BinarySearchTree(4);
  four.insert(2);

  assertEquals(recordAllData(four), [2, 4]);
});

Deno.test("BinarySearchTree should iterate over larger element", () => {
  const four = new BinarySearchTree(4);
  four.insert(5);

  assertEquals(recordAllData(four), [4, 5]);
});

Deno.test("BinarySearchTree should iterate over complex tree", () => {
  const four = new BinarySearchTree(4);
  four.insert(2);
  four.insert(1);
  four.insert(3);
  four.insert(6);
  four.insert(7);
  four.insert(5);

  assertEquals(recordAllData(four), [1, 2, 3, 4, 5, 6, 7]);
});
