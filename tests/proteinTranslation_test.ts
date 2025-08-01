import { translate } from "../answers/proteinTranslation.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("Methionine RNA sequence", () => {
  assertEquals(translate("AUG"), ["Methionine"]);
});

Deno.test("Phenylalanine RNA sequence 1", () => {
  assertEquals(translate("UUU"), ["Phenylalanine"]);
});

Deno.test("Phenylalanine RNA sequence 2", () => {
  assertEquals(translate("UUC"), ["Phenylalanine"]);
});

Deno.test("Leucine RNA sequence 1", () => {
  assertEquals(translate("UUA"), ["Leucine"]);
});

Deno.test("Leucine RNA sequence 2", () => {
  assertEquals(translate("UUG"), ["Leucine"]);
});

Deno.test("Serine RNA sequence 1", () => {
  assertEquals(translate("UCU"), ["Serine"]);
});

Deno.test("Serine RNA sequence 2", () => {
  assertEquals(translate("UCC"), ["Serine"]);
});

Deno.test("Serine RNA sequence 3", () => {
  assertEquals(translate("UCA"), ["Serine"]);
});

Deno.test("Serine RNA sequence 4", () => {
  assertEquals(translate("UCG"), ["Serine"]);
});

Deno.test("Tyrosine RNA sequence 1", () => {
  assertEquals(translate("UAU"), ["Tyrosine"]);
});

Deno.test("Tyrosine RNA sequence 2", () => {
  assertEquals(translate("UAC"), ["Tyrosine"]);
});

Deno.test("Cysteine RNA sequence 1", () => {
  assertEquals(translate("UGU"), ["Cysteine"]);
});

Deno.test("Cysteine RNA sequence 2", () => {
  assertEquals(translate("UGC"), ["Cysteine"]);
});

Deno.test("Tryptophan RNA sequence", () => {
  assertEquals(translate("UGG"), ["Tryptophan"]);
});

Deno.test("STOP codon 1", () => {
  assertEquals(translate("UAA"), []);
});

Deno.test("STOP codon 2", () => {
  assertEquals(translate("UAG"), []);
});

Deno.test("STOP codon 3", () => {
  assertEquals(translate("UGA"), []);
});

Deno.test("Translation stops if STOP codon at beginning", () => {
  assertEquals(translate("UAGUGG"), []);
});

Deno.test("Translation stops if STOP codon at end", () => {
  assertEquals(translate("UGGUAG"), ["Tryptophan"]);
});

Deno.test("Translation stops if STOP codon in middle of sequence", () => {
  assertEquals(translate("UGGUAGUGG"), ["Tryptophan"]);
});

Deno.test("Translation stops if STOP codon in middle of complex sequence", () => {
  assertEquals(translate("UGGUGUUAUUAAUGGUUU"), [
    "Tryptophan",
    "Cysteine",
    "Tyrosine",
  ]);
});

Deno.test("Invalid codon throws error", () => {
  assertThrows(
    () => translate("CARROT"),
    Error,
    "Invalid codon",
  );
});
