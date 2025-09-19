import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { GameOfLife } from "../answers/gameOfLife.ts";

// Empty matrix
Deno.test("empty matrix", () => {
  const matrix: number[][] = [];
  const game = new GameOfLife(matrix);
  game.tick();
  const expected: number[][] = [];
  assertEquals(game.state(), expected);
});

// Live cells with zero live neighbors die
Deno.test("live cells with zero live neighbors die", () => {
  const matrix = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];
  const game = new GameOfLife(matrix);
  game.tick();
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  assertEquals(game.state(), expected);
});

// Live cells with only one live neighbor die
Deno.test("live cells with only one live neighbor die", () => {
  const matrix = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 0],
  ];
  const game = new GameOfLife(matrix);
  game.tick();
  const expected = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  assertEquals(game.state(), expected);
});

// Live cells with two live neighbors stay alive
Deno.test("live cells with two live neighbors stay alive", () => {
  const matrix = [
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ];
  const game = new GameOfLife(matrix);
  game.tick();
  const expected = [
    [0, 0, 0],
    [1, 0, 1],
    [0, 0, 0],
  ];
  assertEquals(game.state(), expected);
});

// Live cells with three live neighbors stay alive
Deno.test("live cells with three live neighbors stay alive", () => {
  const matrix = [
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 0],
  ];
  const game = new GameOfLife(matrix);
  game.tick();
  const expected = [
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
  ];
  assertEquals(game.state(), expected);
});

// Dead cells with three live neighbors become alive
Deno.test("dead cells with three live neighbors become alive", () => {
  const matrix = [
    [1, 1, 0],
    [0, 0, 0],
    [1, 0, 0],
  ];
  const game = new GameOfLife(matrix);
  game.tick();
  const expected = [
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 0],
  ];
  assertEquals(game.state(), expected);
});

// Live cells with four or more neighbors die
Deno.test("live cells with four or more neighbors die", () => {
  const matrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];
  const game = new GameOfLife(matrix);
  game.tick();
  const expected = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ];
  assertEquals(game.state(), expected);
});

// Bigger matrix
Deno.test("bigger matrix", () => {
  const matrix = [
    [1, 1, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1],
  ];
  const game = new GameOfLife(matrix);
  game.tick();
  const expected = [
    [1, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 0, 1, 0, 0, 1],
    [1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1],
  ];
  assertEquals(game.state(), expected);
});
