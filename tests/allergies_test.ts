import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Allergies } from "../answers/allergies.ts";

Deno.test("noAllergiesMeansNotAllergic", () => {
  const allergies = new Allergies(0);
  assertEquals(allergies.isAllergicTo("peanuts"), false);
  assertEquals(allergies.isAllergicTo("cats"), false);
  assertEquals(allergies.isAllergicTo("strawberries"), false);
});

Deno.test("isAllergicToEggs", () => {
  const allergies = new Allergies(1);
  assertEquals(allergies.isAllergicTo("eggs"), true);
});

Deno.test("allergicToEggsInAdditionToOtherStuff", () => {
  const allergies = new Allergies(5);
  assertEquals(allergies.isAllergicTo("eggs"), true);
  assertEquals(allergies.isAllergicTo("shellfish"), true);
  assertEquals(allergies.isAllergicTo("strawberries"), false);
});

Deno.test("noAllergiesAtAll", () => {
  const allergies = new Allergies(0);
  assertEquals(allergies.list(), []);
});

Deno.test("allergicToJustEggs", () => {
  const allergies = new Allergies(1);
  assertEquals(allergies.list(), ["eggs"]);
});

Deno.test("allergicToJustPeanuts", () => {
  const allergies = new Allergies(2);
  assertEquals(allergies.list(), ["peanuts"]);
});

Deno.test("allergicToJustStrawberries", () => {
  const allergies = new Allergies(8);
  assertEquals(allergies.list(), ["strawberries"]);
});

Deno.test("allergicToEggsAndPeanuts", () => {
  const allergies = new Allergies(3);
  assertEquals(allergies.list(), ["eggs", "peanuts"]);
});

Deno.test("allergicToLotsOfStuff", () => {
  const allergies = new Allergies(248);
  assertEquals(
    allergies.list(),
    ["strawberries", "tomatoes", "chocolate", "pollen", "cats"],
  );
});

Deno.test("allergicToEverything", () => {
  const allergies = new Allergies(255);
  assertEquals(
    allergies.list(),
    [
      "eggs",
      "peanuts",
      "shellfish",
      "strawberries",
      "tomatoes",
      "chocolate",
      "pollen",
      "cats",
    ],
  );
});

Deno.test("scoresOver255DoNotTriggerFalsePositives_eggsOnly", () => {
  const allergies = new Allergies(257);
  assertEquals(
    allergies.list(),
    [
      "eggs",
    ],
  );
});
