import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { makeDiamond } from "../answers/diamond.ts";

function diamondify(parts: TemplateStringsArray): string {
  return (
    parts[0]
      .trim()
      .split("\n")
      .map((line) => line.trim().replace(/·/g, " "))
      .filter(Boolean)
      .join("\n") +
    "\n"
  );
}

Deno.test("test letter A", () => {
  const result = "A\n";
  const actual = makeDiamond("A");
  assertEquals(actual, result);
});

Deno.test("test letter C", () => {
  const result = diamondify`
    ··A··
    ·B·B·
    C···C
    ·B·B·
    ··A··
  `;
  const actual = makeDiamond("C");
  assertEquals(actual, result);
});

Deno.test("test letter E", () => {
  const result = diamondify`
    ····A····
    ···B·B···
    ··C···C··
    ·D·····D·
    E·······E
    ·D·····D·
    ··C···C··
    ···B·B···
    ····A····
  `;
  const actual = makeDiamond("E");
  assertEquals(actual, result);
});
