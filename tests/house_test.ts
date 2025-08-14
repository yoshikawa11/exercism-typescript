import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { verse, verses } from "../answers/house.ts";

Deno.test("verse one", () => {
  const lyrics = ["This is the house that Jack built."];
  assertEquals(verse(1), lyrics);
});

Deno.test("verse two", () => {
  const lyrics = [
    "This is the malt",
    "that lay in the house that Jack built.",
  ];
  assertEquals(verse(2), lyrics);
});

Deno.test("verse three", () => {
  const lyrics = [
    "This is the rat",
    "that ate the malt",
    "that lay in the house that Jack built.",
  ];
  assertEquals(verse(3), lyrics);
});

Deno.test("multiple verses", () => {
  const expected = [
    "This is the rat",
    "that ate the malt",
    "that lay in the house that Jack built.",
    "",
    "This is the cat",
    "that killed the rat",
    "that ate the malt",
    "that lay in the house that Jack built.",
  ];
  assertEquals(verses(3, 4), expected);
});

Deno.test("verse twelve", () => {
  const lyrics = [
    "This is the horse and the hound and the horn",
    "that belonged to the farmer sowing his corn",
    "that kept the rooster that crowed in the morn",
    "that woke the priest all shaven and shorn",
    "that married the man all tattered and torn",
    "that kissed the maiden all forlorn",
    "that milked the cow with the crumpled horn",
    "that tossed the dog",
    "that worried the cat",
    "that killed the rat",
    "that ate the malt",
    "that lay in the house that Jack built.",
  ];
  assertEquals(verse(12), lyrics);
});
