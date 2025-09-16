import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Garden } from "../answers/kindergartenGarden.ts";

Deno.test("garden with single student", () => {
  assertEquals(new Garden("RC\nGG").plants("Alice"), [
    "radishes",
    "clover",
    "grass",
    "grass",
  ]);
});

// different garden with single student
Deno.test("different garden with single student", () => {
  assertEquals(new Garden("VC\nRC").plants("Alice"), [
    "violets",
    "clover",
    "radishes",
    "clover",
  ]);
});

// garden with two students
Deno.test("garden with two students", () => {
  assertEquals(new Garden("VVCG\nVVRC").plants("Bob"), [
    "clover",
    "grass",
    "radishes",
    "clover",
  ]);
});

// multiple students for the same garden with three students
Deno.test("multiple students - second student's garden", () => {
  assertEquals(new Garden("VVCCGG\nVVCCGG").plants("Bob"), [
    "clover",
    "clover",
    "clover",
    "clover",
  ]);
});

Deno.test("multiple students - third student's garden", () => {
  assertEquals(new Garden("VVCCGG\nVVCCGG").plants("Charlie"), [
    "grass",
    "grass",
    "grass",
    "grass",
  ]);
});

const diagramFull = "VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV";
const gardenFull = new Garden(diagramFull);

Deno.test("full garden - Alice", () => {
  assertEquals(gardenFull.plants("Alice"), [
    "violets",
    "radishes",
    "violets",
    "radishes",
  ]);
});

Deno.test("full garden - Bob", () => {
  assertEquals(gardenFull.plants("Bob"), [
    "clover",
    "grass",
    "clover",
    "clover",
  ]);
});

Deno.test("full garden - Charlie", () => {
  assertEquals(gardenFull.plants("Charlie"), [
    "violets",
    "violets",
    "clover",
    "grass",
  ]);
});

Deno.test("full garden - David", () => {
  assertEquals(gardenFull.plants("David"), [
    "radishes",
    "violets",
    "clover",
    "radishes",
  ]);
});

Deno.test("full garden - Eve", () => {
  assertEquals(gardenFull.plants("Eve"), [
    "clover",
    "grass",
    "radishes",
    "grass",
  ]);
});

Deno.test("full garden - Fred", () => {
  assertEquals(gardenFull.plants("Fred"), [
    "grass",
    "clover",
    "violets",
    "clover",
  ]);
});

Deno.test("full garden - Ginny", () => {
  assertEquals(gardenFull.plants("Ginny"), [
    "clover",
    "grass",
    "grass",
    "clover",
  ]);
});

Deno.test("full garden - Harriet", () => {
  assertEquals(gardenFull.plants("Harriet"), [
    "violets",
    "radishes",
    "radishes",
    "violets",
  ]);
});

Deno.test("full garden - Ileana", () => {
  assertEquals(gardenFull.plants("Ileana"), [
    "grass",
    "clover",
    "violets",
    "clover",
  ]);
});

Deno.test("full garden - Joseph", () => {
  assertEquals(gardenFull.plants("Joseph"), [
    "violets",
    "clover",
    "violets",
    "grass",
  ]);
});

Deno.test("full garden - Kincaid", () => {
  assertEquals(gardenFull.plants("Kincaid"), [
    "grass",
    "clover",
    "clover",
    "grass",
  ]);
});

Deno.test("full garden - Larry", () => {
  assertEquals(gardenFull.plants("Larry"), [
    "grass",
    "violets",
    "clover",
    "violets",
  ]);
});

const diagramDisordered = "VCRRGVRG\nRVGCCGCV";
const studentsDisordered = ["Samantha", "Patricia", "Xander", "Roger"];
const gardenDisordered = new Garden(diagramDisordered, studentsDisordered);

Deno.test("disordered - Patricia", () => {
  assertEquals(gardenDisordered.plants("Patricia"), [
    "violets",
    "clover",
    "radishes",
    "violets",
  ]);
});

Deno.test("disordered - Roger", () => {
  assertEquals(gardenDisordered.plants("Roger"), [
    "radishes",
    "radishes",
    "grass",
    "clover",
  ]);
});

Deno.test("disordered - Samantha", () => {
  assertEquals(gardenDisordered.plants("Samantha"), [
    "grass",
    "violets",
    "clover",
    "grass",
  ]);
});

Deno.test("disordered - Xander", () => {
  assertEquals(gardenDisordered.plants("Xander"), [
    "radishes",
    "grass",
    "clover",
    "violets",
  ]);
});

const diagramTwo = "VCRRGVRG\nRVGCCGCV";
const garden1 = new Garden(diagramTwo, ["Alice", "Bob", "Charlie", "Dan"]);
const garden2 = new Garden(diagramTwo, ["Bob", "Charlie", "Dan", "Erin"]);

Deno.test("two gardens - Bob and Charlie", () => {
  assertEquals(garden1.plants("Bob"), [
    "radishes",
    "radishes",
    "grass",
    "clover",
  ]);
  assertEquals(garden2.plants("Bob"), [
    "violets",
    "clover",
    "radishes",
    "violets",
  ]);
  assertEquals(garden1.plants("Charlie"), [
    "grass",
    "violets",
    "clover",
    "grass",
  ]);
  assertEquals(garden2.plants("Charlie"), [
    "radishes",
    "radishes",
    "grass",
    "clover",
  ]);
});
