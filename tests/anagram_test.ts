import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Anagram } from "../answers/anagram.ts";

const areSetsEqual = <T>(setA: Set<T>, setB: Set<T>): boolean =>
  setA.size === setB.size && [...setA].every((val) => setB.has(val));

Deno.test("Anagram - no matches", () => {
  const subject = new Anagram("diaper");
  const matches = subject.matches("hello", "world", "zombies", "pants");
  const expected: string[] = [];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - detects two anagrams", () => {
  const subject = new Anagram("solemn");
  const matches = subject.matches("lemons", "cherry", "melons");
  const expected = ["lemons", "melons"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - does not detect anagram subsets", () => {
  const subject = new Anagram("good");
  const matches = subject.matches("dog", "goody");
  const expected: string[] = [];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - detects anagram", () => {
  const subject = new Anagram("listen");
  const matches = subject.matches("enlists", "google", "inlets", "banana");
  const expected = ["inlets"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - detects three anagrams", () => {
  const subject = new Anagram("allergy");
  const matches = subject.matches(
    "gallery",
    "ballerina",
    "regally",
    "clergy",
    "largely",
    "leading",
  );
  const expected = ["gallery", "regally", "largely"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - detects multiple anagrams with different case", () => {
  const subject = new Anagram("nose");
  const matches = subject.matches("Eons", "ONES");
  const expected = ["Eons", "ONES"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - does not detect non-anagrams with identical checksum", () => {
  const subject = new Anagram("mass");
  const matches = subject.matches("last");
  const expected: string[] = [];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - detects anagrams case-insensitively", () => {
  const subject = new Anagram("Orchestra");
  const matches = subject.matches("cashregister", "Carthorse", "radishes");
  const expected = ["Carthorse"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - detects anagrams using case-insensitive subject", () => {
  const subject = new Anagram("Orchestra");
  const matches = subject.matches("cashregister", "carthorse", "radishes");
  const expected = ["carthorse"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - detects anagrams using case-insensitive possible matches", () => {
  const subject = new Anagram("orchestra");
  const matches = subject.matches("cashregister", "Carthorse", "radishes");
  const expected = ["Carthorse"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - does not detect an anagram if the original word is repeated", () => {
  const subject = new Anagram("go");
  const matches = subject.matches("go Go GO");
  const expected: string[] = [];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - anagrams must use all letters exactly once", () => {
  const subject = new Anagram("tapper");
  const matches = subject.matches("patter");
  const expected: string[] = [];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - words are not anagrams of themselves", () => {
  const subject = new Anagram("BANANA");
  const matches = subject.matches("BANANA");
  const expected: string[] = [];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - words are not anagrams of themselves even if letter case is partially different", () => {
  const subject = new Anagram("BANANA");
  const matches = subject.matches("Banana");
  const expected: string[] = [];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - words are not anagrams of themselves even if letter case is completely different", () => {
  const subject = new Anagram("BANANA");
  const matches = subject.matches("Banana");
  const expected: string[] = [];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - words other than themselves can be anagrams", () => {
  const subject = new Anagram("LISTEN");
  const matches = subject.matches("LISTEN", "Silent");
  const expected = ["Silent"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - matches() accepts string arguments", () => {
  const subject = new Anagram("ant");
  const matches = subject.matches("stand", "tan", "at");
  const expected = ["tan"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});

Deno.test("Anagram - matches() accepts single string argument", () => {
  const subject = new Anagram("ant");
  const matches = subject.matches("tan");
  const expected = ["tan"];
  assertEquals(areSetsEqual(new Set(expected), new Set(matches)), true);
});
