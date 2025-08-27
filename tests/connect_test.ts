import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Board } from "../answers/connect.ts";

Deno.test("an empty board has no winner", () => {
  const board = [
    ". . . . .",
    " . . . . .",
    "  . . . . .",
    "   . . . . .",
    "    . . . . .",
  ];
  assertEquals(new Board(board).winner(), "");
});

Deno.test("X can win on a 1x1 board", () => {
  const board = ["X"];
  assertEquals(new Board(board).winner(), "X");
});

Deno.test("O can win on a 1x1 board", () => {
  const board = ["O"];
  assertEquals(new Board(board).winner(), "O");
});

Deno.test("only edges does not make a winner", () => {
  const board = ["O O O X", " X . . X", "  X . . X", "   X O O O"];
  assertEquals(new Board(board).winner(), "");
});

Deno.test("illegal diagonal does not make a winner", () => {
  const board = [
    "X O . .",
    " O X X X",
    "  O X O .",
    "   . O X .",
    "    X X O O",
  ];
  assertEquals(new Board(board).winner(), "");
});

Deno.test("nobody wins crossing adjacent angles", () => {
  const board = [
    "X . . .",
    " . X O .",
    "  O . X O",
    "   . O . X",
    "    . . O .",
  ];
  assertEquals(new Board(board).winner(), "");
});

Deno.test("X wins crossing from left to right", () => {
  const board = [
    ". O . .",
    " O X X X",
    "  O X O .",
    "   X X O X",
    "    . O X .",
  ];
  assertEquals(new Board(board).winner(), "X");
});

Deno.test("O wins crossing from top to bottom", () => {
  const board = [
    ". O . .",
    " O X X X",
    "  O O O .",
    "   X X O X",
    "    . O X .",
  ];
  assertEquals(new Board(board).winner(), "O");
});

Deno.test("X wins using a convoluted path", () => {
  const board = [
    ". X X . .",
    " X . X . X",
    "  . X . X .",
    "   . X X . .",
    "    O O O O O",
  ];
  assertEquals(new Board(board).winner(), "X");
});

Deno.test("X wins using a spiral path", () => {
  const board = [
    "O X X X X X X X X",
    " O X O O O O O O O",
    "  O X O X X X X X O",
    "   O X O X O O O X O",
    "    O X O X X X O X O",
    "     O X O O O X O X O",
    "      O X X X X X O X O",
    "       O O O O O O O X O",
    "        X X X X X X X X O",
  ];
  assertEquals(new Board(board).winner(), "X");
});
