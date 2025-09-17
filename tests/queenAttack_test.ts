import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { QueenAttack } from "../answers/queenAttack.ts";

Deno.test("queen with a valid position", () => {
  const queens = new QueenAttack({ white: [2, 2] });
  assertEquals(queens.white, [2, 2]);
});

Deno.test("queen must have positive row", () => {
  const positioning = { white: [-2, 2] } as const;
  const expectedError = "Queen must be placed on the board";
  assertThrows(() => new QueenAttack(positioning), Error, expectedError);
});

Deno.test("queen must have row on board", () => {
  const positioning = { white: [8, 4] } as const;
  const expectedError = "Queen must be placed on the board";
  assertThrows(() => new QueenAttack(positioning), Error, expectedError);
});

Deno.test("queen must have positive column", () => {
  const positioning = { white: [2, -2] } as const;
  const expectedError = "Queen must be placed on the board";
  assertThrows(() => new QueenAttack(positioning), Error, expectedError);
});

Deno.test("queen must have column on board", () => {
  const positioning = { white: [4, 8] } as const;
  const expectedError = "Queen must be placed on the board";
  assertThrows(() => new QueenAttack(positioning), Error, expectedError);
});

Deno.test("two queens cannot occupy the same space", () => {
  const positioning = { white: [2, 4], black: [2, 4] } as const;
  const expectedError = "Queens cannot share the same space";
  assertThrows(() => new QueenAttack(positioning), Error, expectedError);
});

Deno.test("queens cannot attack", () => {
  const queens = new QueenAttack({ white: [2, 4], black: [6, 6] });
  assertEquals(queens.canAttack, false);
});

Deno.test("queens can attack when they are on the same row", () => {
  const queens = new QueenAttack({ white: [2, 4], black: [2, 6] });
  assertEquals(queens.canAttack, true);
});

Deno.test("queens can attack when they are on the same column", () => {
  const queens = new QueenAttack({ white: [4, 5], black: [2, 5] });
  assertEquals(queens.canAttack, true);
});

Deno.test("queens can attack diagonally", () => {
  const queens = new QueenAttack({ white: [2, 2], black: [0, 4] });
  assertEquals(queens.canAttack, true);
});

Deno.test("queens can attack another diagonally", () => {
  const queens = new QueenAttack({ white: [2, 2], black: [3, 1] });
  assertEquals(queens.canAttack, true);
});

Deno.test("queens can attack yet another diagonally", () => {
  const queens = new QueenAttack({ white: [2, 2], black: [1, 1] });
  assertEquals(queens.canAttack, true);
});

Deno.test("queens can attack diagonally, really", () => {
  const queens = new QueenAttack({ white: [1, 7], black: [0, 6] });
  assertEquals(queens.canAttack, true);
});

Deno.test("queens can attack on a north-east/south-west diagonal", () => {
  const queens = new QueenAttack({ white: [7, 0], black: [0, 7] });
  assertEquals(queens.canAttack, true);
});

Deno.test("queens can attack on another ne/sw diagonal", () => {
  const queens = new QueenAttack({ white: [2, 6], black: [5, 3] });
  assertEquals(queens.canAttack, true);
});

Deno.test("queens cannot attack if falling diagonals are only the same when reflected across the longest falling diagonal", () => {
  const queens = new QueenAttack({ white: [4, 1], black: [2, 5] });
  assertEquals(queens.canAttack, false);
});

Deno.test("board", () => {
  const positioning = { white: [3, 2], black: [6, 5] } as const;
  const queens = new QueenAttack(positioning);
  const board = [
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ W _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ B _ _",
    "_ _ _ _ _ _ _ _",
  ].join("\n");
  assertEquals(queens.toString(), board);
});

Deno.test("board with queens at their starting positions", () => {
  const queens = new QueenAttack();
  const board = [
    "_ _ _ B _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ W _ _ _ _",
  ].join("\n");
  assertEquals(queens.toString(), board);
});

Deno.test("board with the black queen at her starting positions", () => {
  const queens = new QueenAttack({ white: [1, 6] });
  const board = [
    "_ _ _ B _ _ _ _",
    "_ _ _ _ _ _ W _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
  ].join("\n");
  assertEquals(queens.toString(), board);
});

Deno.test("board with queens at the edges", () => {
  const positioning = { white: [0, 0], black: [7, 7] } as const;
  const queens = new QueenAttack(positioning);
  const board = [
    "W _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ _",
    "_ _ _ _ _ _ _ B",
  ].join("\n");
  assertEquals(queens.toString(), board);
});
