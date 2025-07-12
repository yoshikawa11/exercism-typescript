import { generateCharacter } from "../answers/dndCharacter.ts";
import {
  assertEquals,
  assertGreaterOrEqual,
  assertLessOrEqual,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("値から導出するパラメータのチェック", () => {
  const diceFour = () => 4;
  const player = generateCharacter(diceFour);
  assertEquals(player.constitution, 12);
  assertEquals(player.constitutionModifier, 1);
  assertEquals(player.hitPoints, 11);
});

Deno.test("ランダムなパラメータでチェック", () => {
  const rollDice = () => Math.floor(Math.random() * 6) + 1;
  const player = generateCharacter(rollDice);
  assertGreaterOrEqual(player.strength, 3);
  assertLessOrEqual(player.strength, 18);
  assertGreaterOrEqual(player.dexterity, 3);
  assertLessOrEqual(player.dexterity, 18);
  assertGreaterOrEqual(player.constitution, 3);
  assertLessOrEqual(player.constitution, 18);
  assertGreaterOrEqual(player.intelligence, 3);
  assertLessOrEqual(player.intelligence, 18);
  assertGreaterOrEqual(player.wisdom, 3);
  assertLessOrEqual(player.wisdom, 18);
  assertGreaterOrEqual(player.charisma, 3);
  assertLessOrEqual(player.charisma, 18);
});
