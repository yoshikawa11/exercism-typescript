import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { answer } from "../answers/wordy.ts";

// 正常系
Deno.test("no operation", () => {
  assertEquals(answer("What is 1?"), 1);
});

Deno.test("add two numbers", () => {
  assertEquals(answer("What is 1 plus 1?"), 2);
});

Deno.test("add negative numbers", () => {
  assertEquals(answer("What is -1 plus -10?"), -11);
});

Deno.test("add more than two numbers", () => {
  assertEquals(answer("What is 1 plus 2 plus 3?"), 6);
});

Deno.test("subtract numbers", () => {
  assertEquals(answer("What is 4 minus -12?"), 16);
});

Deno.test("multiply numbers", () => {
  assertEquals(answer("What is -3 multiplied by 25?"), -75);
});

Deno.test("divide numbers", () => {
  assertEquals(answer("What is 33 divided by -3?"), -11);
});

Deno.test("multiple operations", () => {
  assertEquals(answer("What is 1 plus 1 plus 1?"), 3);
});

Deno.test("ignore extraneous text", () => {
  assertEquals(answer("What is 1 plus 5 minus -2?"), 8);
});

// エラー系
Deno.test("reject problem missing starting 'What is'", () => {
  assertThrows(() => {
    answer("Who is the President of the United States?");
  });
});

Deno.test("reject problem with unknown operation", () => {
  assertThrows(() => {
    answer("What is 52 cubed?");
  });
});

Deno.test("reject when two operations in a row", () => {
  assertThrows(() => {
    answer("What is 1 plus plus 2?");
  });
});

Deno.test("reject when two numbers in a row", () => {
  assertThrows(() => {
    answer("What is 1 plus 2 1?");
  });
});

Deno.test("reject problem with non-math question", () => {
  assertThrows(() => {
    answer("What is 53 tomato 49?");
  });
});
