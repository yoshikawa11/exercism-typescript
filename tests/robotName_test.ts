import {
  assertEquals,
  assertMatch,
  assertNotEquals,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { RobotController } from "..//answers/robotName.ts";

Deno.test("robot name format is correct", () => {
  const controller = new RobotController();
  const robot = controller.createRobot();
  assertMatch(robot.name, /^[A-Z]{2}\d{3}$/);
});

Deno.test("robot names are unique", () => {
  const controller = new RobotController();
  const robot1 = controller.createRobot();
  const robot2 = controller.createRobot();
  assertNotEquals(robot1.name, robot2.name);
});

Deno.test("robot can reset to new unique name", () => {
  const controller = new RobotController();
  const robot = controller.createRobot();
  const oldName = robot.name;
  robot.reset();
  assertNotEquals(robot.name, oldName);
  assertMatch(robot.name, /^[A-Z]{2}\d{3}$/);
});

Deno.test("robots have each unique name", () => {
  const times = 500;
  const controller = new RobotController();
  const names = new Set<string>();
  for (let i = 0; i < times; i++) {
    const robot = controller.createRobot();
    names.add(robot.name);
  }

  assertEquals(names.size, times);
});
