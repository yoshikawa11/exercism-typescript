import { isPaired } from "../answers/matchingBrackets.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("paired square brackets", () => {
  assertEquals(isPaired("[]"), true);
});

Deno.test("empty string", () => {
  assertEquals(isPaired(""), true);
});

Deno.test("unpaired brackets", () => {
  assertEquals(isPaired("[["), false);
});

Deno.test("wrong ordered brackets", () => {
  assertEquals(isPaired("}{"), false);
});

Deno.test("wrong closing bracket", () => {
  assertEquals(isPaired("{]"), false);
});

Deno.test("paired with whitespace", () => {
  assertEquals(isPaired("{ }"), true);
});

Deno.test("partially paired brackets", () => {
  assertEquals(isPaired("{[])"), false);
});

Deno.test("simple nested brackets", () => {
  assertEquals(isPaired("{[]}"), true);
});

Deno.test("several paired brackets", () => {
  assertEquals(isPaired("{}[]"), true);
});

Deno.test("paired and nested brackets", () => {
  assertEquals(isPaired("([{}({}[])])"), true);
});

Deno.test("unopened closing brackets", () => {
  assertEquals(isPaired("{[)][]}"), false);
});

Deno.test("unpaired and nested brackets", () => {
  assertEquals(isPaired("([{])"), false);
});

Deno.test("paired and wrong nested brackets", () => {
  assertEquals(isPaired("[({]})"), false);
});

Deno.test("paired and incomplete brackets", () => {
  assertEquals(isPaired("{}["), false);
});

Deno.test("too many closing brackets", () => {
  assertEquals(isPaired("[]]"), false);
});

Deno.test("math expression", () => {
  assertEquals(isPaired("(((185 + 223.85) * 15) - 543)/2"), true);
});

Deno.test("complex latex expression", () => {
  assertEquals(
    isPaired(
      "\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)",
    ),
    true,
  );
});
