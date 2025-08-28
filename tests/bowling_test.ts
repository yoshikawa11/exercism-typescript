import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Bowling } from "../answers/bowling.ts";

Deno.test("should be able to score a game with all zeros", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 0);
});

Deno.test("should be able to score a game with no strikes or spares", () => {
  const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 90);
});

Deno.test("a spare followed by zeros is worth ten points", () => {
  const rolls = [6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 10);
});

Deno.test("points scored in the roll after a spare are counted twice", () => {
  const rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 16);
});

Deno.test("consecutive spares each get a one roll bonus", () => {
  const rolls = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 31);
});

Deno.test("a spare in the last frame gets a one roll bonus that is counted once", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 17);
});

Deno.test("a strike earns ten points in a frame with a single roll", () => {
  const rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 10);
});

Deno.test("points scored in the two rolls after a strike are counted twice as a bonus", () => {
  const rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 26);
});

Deno.test("consecutive strikes each get the two roll bonus", () => {
  const rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 81);
});

Deno.test("a strike in the last frame gets a two roll bonues that is counted once", () => {
  const rolls = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10,
    7,
    1,
  ];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 18);
});

Deno.test("rolling a spare with the two roll bonus does not get a bonus roll", () => {
  const rolls = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10,
    7,
    3,
  ];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 20);
});

Deno.test("strikes with the two roll bonus do not get bonus rolls", () => {
  const rolls = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10,
    10,
    10,
  ];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 30);
});

Deno.test("last two strikes followed by only last bonus with non strike points", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 0, 1];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 31);
});

Deno.test("a strike with the one roll bonus after a spare in the last frame does not get a bonus", () => {
  const rolls = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    7,
    3,
    10,
  ];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 20);
});

Deno.test("all strikes is a perfect game", () => {
  const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 300);
});

Deno.test("rolls cannot score negative points", () => {
  const bowling = new Bowling();
  assertThrows(() => bowling.roll(-1), Error, "Negative roll is invalid");
});

Deno.test("a roll cannot score more than 10 points", () => {
  const bowling = new Bowling();
  assertThrows(
    () => bowling.roll(11),
    Error,
    "Pin count exceeds pins on the lane",
  );
});

Deno.test("two rolls in a frame cannot score more than 10 points", () => {
  const bowling = new Bowling();
  bowling.roll(5);
  assertThrows(
    () => bowling.roll(6),
    Error,
    "Pin count exceeds pins on the lane",
  );
});

Deno.test("bonus roll after a strike in the last frame cannot score more than 10 points", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(
    () => bowling.roll(11),
    Error,
    "Pin count exceeds pins on the lane",
  );
});

Deno.test("two bonus rolls after a strike in the last frame cannot score more than 10 points", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(
    () => bowling.roll(6),
    Error,
    "Pin count exceeds pins on the lane",
  );
});

Deno.test("two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike", () => {
  const rolls = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10,
    10,
    6,
  ];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertEquals(bowling.score(), 26);
});

Deno.test("the second bonus rolls after a strike in the last frame cannot be a strike if the first one is not a strike", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 6];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(
    () => bowling.roll(10),
    Error,
    "Pin count exceeds pins on the lane",
  );
});

Deno.test("second bonus roll after a strike in the last frame cannot score more than 10 points", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(
    () => bowling.roll(11),
    Error,
    "Pin count exceeds pins on the lane",
  );
});

Deno.test("an unstarted game cannot be scored", () => {
  const bowling = new Bowling();
  assertThrows(
    () => bowling.score(),
    Error,
    "Score cannot be taken until the end of the game",
  );
});

Deno.test("an incomplete game cannot be scored", () => {
  const rolls = [0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(
    () => bowling.score(),
    Error,
    "Score cannot be taken until the end of the game",
  );
});

Deno.test("cannot roll if game already has ten frames", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(() => bowling.roll(0), Error, "Cannot roll after game is over");
});

Deno.test("bonus rolls for a strike in the last frame must be rolled before score can be calculated", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(
    () => bowling.score(),
    Error,
    "Score cannot be taken until the end of the game",
  );
});

Deno.test("both bonus rolls for a strike in the last frame must be rolled before score can be calculated", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(
    () => bowling.score(),
    Error,
    "Score cannot be taken until the end of the game",
  );
});

Deno.test("bonus roll for a spare in the last frame must be rolled before score can be calculated", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(
    () => bowling.score(),
    Error,
    "Score cannot be taken until the end of the game",
  );
});

Deno.test("cannot roll after bonus roll for spare", () => {
  const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 2];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(() => bowling.roll(2), Error, "Cannot roll after game is over");
});

Deno.test("cannot roll after bonus rolls for strike", () => {
  const rolls = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    10,
    3,
    2,
  ];
  const bowling = new Bowling();
  rolls.forEach((roll) => bowling.roll(roll));
  assertThrows(() => bowling.roll(2), Error, "Cannot roll after game is over");
});
