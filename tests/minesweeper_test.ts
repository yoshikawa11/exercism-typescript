import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { annotate } from "../answers/minesweeper.ts";

Deno.test("handles no rows", () => {
  assertEquals(annotate([]), []);
});

Deno.test("handles no columns", () => {
  const input = [""];
  const expected = [""];
  assertEquals(annotate(input), expected);
});

Deno.test("handles no mines", () => {
  const input = ["   ", "   ", "   "];
  const expected = ["   ", "   ", "   "];
  assertEquals(annotate(input), expected);
});

Deno.test("handles board with only mines", () => {
  const input = ["***", "***", "***"];
  const expected = ["***", "***", "***"];
  assertEquals(annotate(input), expected);
});

Deno.test("handles mine surrounded by spaces", () => {
  const input = ["   ", " * ", "   "];
  const expected = ["111", "1*1", "111"];
  assertEquals(annotate(input), expected);
});

Deno.test("handles space surrounded by mines", () => {
  const input = ["***", "* *", "***"];
  const expected = ["***", "*8*", "***"];
  assertEquals(annotate(input), expected);
});

Deno.test("handles horizontal line", () => {
  const input = [" * * "];
  const expected = ["1*2*1"];
  assertEquals(annotate(input), expected);
});

Deno.test("handles horizontal line, mines at edges", () => {
  const input = ["*   *"];
  const expected = ["*1 1*"];
  assertEquals(annotate(input), expected);
});

Deno.test("handles vertical line", () => {
  const input = [" ", "*", " ", "*", " "];
  const expected = ["1", "*", "2", "*", "1"];
  assertEquals(annotate(input), expected);
});

Deno.test("handles vertical line, mines at edges", () => {
  const input = ["*", " ", " ", " ", "*"];
  const expected = ["*", "1", " ", "1", "*"];
  assertEquals(annotate(input), expected);
});

Deno.test("handles cross", () => {
  const input = ["  *  ", "  *  ", "*****", "  *  ", "  *  "];
  const expected = [" 2*2 ", "25*52", "*****", "25*52", " 2*2 "];
  assertEquals(annotate(input), expected);
});

Deno.test("handles large board", () => {
  const input = [" *  * ", "  *   ", "    * ", "   * *", " *  * ", "      "];
  const expected = [
    "1*22*1",
    "12*322",
    " 123*2",
    "112*4*",
    "1*22*2",
    "111111",
  ];
  assertEquals(annotate(input), expected);
});
