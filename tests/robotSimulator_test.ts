import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { InvalidInputError, Robot } from "../answers/robotSimulator.ts";

function turnRight(robot: Robot): void {
  robot.evaluate("R");
}

function turnLeft(robot: Robot): void {
  robot.evaluate("L");
}

function advance(robot: Robot): void {
  robot.evaluate("A");
}

Deno.test("Robot: facing north by default", () => {
  const robot = new Robot();
  assertEquals(robot.bearing, "north");
});

Deno.test("Robot: facing east", () => {
  const robot = new Robot();
  robot.place({ direction: "east", x: 0, y: 0 });

  assertEquals(robot.bearing, "east");
});

Deno.test("Robot: facing west, at origin", () => {
  const robot = new Robot();
  robot.place({ direction: "west", x: 0, y: 0 });

  assertEquals(robot.bearing, "west");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: at negative position facing south", () => {
  const robot = new Robot();
  robot.place({ direction: "south", x: -1, y: -1 });

  assertEquals(robot.bearing, "south");
  assertEquals(robot.coordinates, [-1, -1]);
});

Deno.test("Robot: invalid robot bearing", () => {
  const robot = new Robot();
  assertThrows(
    () => robot.place({ direction: "crood", x: 0, y: 0 }),
    InvalidInputError,
  );
});

Deno.test("Robot: changes north to east", () => {
  const robot = new Robot();
  robot.place({ direction: "north", x: 0, y: 0 });
  turnRight(robot);
  assertEquals(robot.bearing, "east");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: changes east to south", () => {
  const robot = new Robot();
  robot.place({ direction: "east", x: 0, y: 0 });
  turnRight(robot);
  assertEquals(robot.bearing, "south");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: changes south to west", () => {
  const robot = new Robot();
  robot.place({ direction: "south", x: 0, y: 0 });
  turnRight(robot);
  assertEquals(robot.bearing, "west");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: changes west to north", () => {
  const robot = new Robot();
  robot.place({ direction: "west", x: 0, y: 0 });
  turnRight(robot);
  assertEquals(robot.bearing, "north");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: changes north to west", () => {
  const robot = new Robot();
  robot.place({ direction: "north", x: 0, y: 0 });
  turnLeft(robot);
  assertEquals(robot.bearing, "west");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: changes west to south", () => {
  const robot = new Robot();
  robot.place({ direction: "west", x: 0, y: 0 });
  turnLeft(robot);
  assertEquals(robot.bearing, "south");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: changes south to east", () => {
  const robot = new Robot();
  robot.place({ direction: "south", x: 0, y: 0 });
  turnLeft(robot);
  assertEquals(robot.bearing, "east");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: changes east to north", () => {
  const robot = new Robot();
  robot.place({ direction: "east", x: 0, y: 0 });
  turnLeft(robot);
  assertEquals(robot.bearing, "north");
  assertEquals(robot.coordinates, [0, 0]);
});

Deno.test("Robot: advance when facing north", () => {
  const robot = new Robot();
  robot.place({ direction: "north", x: 0, y: 0 });
  advance(robot);
  assertEquals(robot.coordinates, [0, 1]);
  assertEquals(robot.bearing, "north");
});

Deno.test("Robot: advance when facing south", () => {
  const robot = new Robot();
  robot.place({ direction: "south", x: 0, y: 0 });
  advance(robot);
  assertEquals(robot.coordinates, [0, -1]);
  assertEquals(robot.bearing, "south");
});

Deno.test("Robot: advance when facing east", () => {
  const robot = new Robot();
  robot.place({ direction: "east", x: 0, y: 0 });
  advance(robot);
  assertEquals(robot.coordinates, [1, 0]);
  assertEquals(robot.bearing, "east");
});

Deno.test("Robot: advance when facing west", () => {
  const robot = new Robot();
  robot.place({ direction: "west", x: 0, y: 0 });
  advance(robot);
  assertEquals(robot.coordinates, [-1, 0]);
  assertEquals(robot.bearing, "west");
});

Deno.test("Robot: moving east and north from README", () => {
  const robot = new Robot();
  robot.place({ x: 7, y: 3, direction: "north" });
  robot.evaluate("RAALAL");
  assertEquals(robot.coordinates, [9, 4]);
  assertEquals(robot.bearing, "west");
});

Deno.test("Robot: moving west and north", () => {
  const robot = new Robot();
  robot.place({ x: 0, y: 0, direction: "north" });
  robot.evaluate("LAAARALA");
  assertEquals(robot.coordinates, [-4, 1]);
  assertEquals(robot.bearing, "west");
});

Deno.test("Robot: moving west and south", () => {
  const robot = new Robot();
  robot.place({ x: 2, y: -7, direction: "east" });
  robot.evaluate("RRAAAAALA");
  assertEquals(robot.coordinates, [-3, -8]);
  assertEquals(robot.bearing, "south");
});

Deno.test("Robot: moving east and north", () => {
  const robot = new Robot();
  robot.place({ x: 8, y: 4, direction: "south" });
  robot.evaluate("LAAARRRALLLL");
  assertEquals(robot.coordinates, [11, 5]);
  assertEquals(robot.bearing, "north");
});

Deno.test("Robot: instruct many robots", () => {
  const robot1 = new Robot();
  const robot2 = new Robot();
  const robot3 = new Robot();
  robot1.place({ x: 0, y: 0, direction: "north" });
  robot2.place({ x: 2, y: -7, direction: "east" });
  robot3.place({ x: 8, y: 4, direction: "south" });
  robot1.evaluate("LAAARALA");
  robot2.evaluate("RRAAAAALA");
  robot3.evaluate("LAAARRRALLLL");
  assertEquals(robot1.coordinates, [-4, 1]);
  assertEquals(robot1.bearing, "west");
  assertEquals(robot2.coordinates, [-3, -8]);
  assertEquals(robot2.bearing, "south");
  assertEquals(robot3.coordinates, [11, 5]);
  assertEquals(robot3.bearing, "north");
});
