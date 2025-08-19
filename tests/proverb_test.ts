import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { proverb } from "../answers/proverb.ts";

Deno.test("a single consequence", () => {
  const expected =
    `For want of a nail the shoe was lost.\nAnd all for the want of a nail.`;
  assertEquals(proverb("nail", "shoe"), expected);
});

Deno.test("a short chain of consequences", () => {
  const expected =
    `For want of a nail the shoe was lost.\nFor want of a shoe the horse was lost.\nAnd all for the want of a nail.`;
  assertEquals(proverb("nail", "shoe", "horse"), expected);
});

Deno.test("a longer chain of consequences", () => {
  const expected =
    `For want of a nail the shoe was lost.\nFor want of a shoe the horse was lost.\nFor want of a horse the rider was lost.\nAnd all for the want of a nail.`;
  assertEquals(proverb("nail", "shoe", "horse", "rider"), expected);
});

Deno.test(
  "proverb function does not hard code the rhyme dictionary",
  () => {
    const expected =
      `For want of a key the value was lost.\nAnd all for the want of a key.`;
    assertEquals(proverb("key", "value"), expected);
  },
);

Deno.test("the whole proverb", () => {
  const expected =
    `For want of a nail the shoe was lost.\nFor want of a shoe the horse was lost.\nFor want of a horse the rider was lost.\nFor want of a rider the message was lost.\nFor want of a message the battle was lost.\nFor want of a battle the kingdom was lost.\nAnd all for the want of a nail.`;
  assertEquals(
    proverb("nail", "shoe", "horse", "rider", "message", "battle", "kingdom"),
    expected,
  );
});

Deno.test("proverb is the same each time", () => {
  assertEquals(proverb("nail", "shoe"), proverb("nail", "shoe"));
});
