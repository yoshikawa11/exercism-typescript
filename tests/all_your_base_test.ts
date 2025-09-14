import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { convert } from "../answers/allYourBase.ts";

Deno.test("single bit one to decimal", () => {
  assertEquals(convert([1], 2, 10), [1]);
});

Deno.test("binary to single decimal", () => {
  assertEquals(convert([1, 0, 1], 2, 10), [5]);
});

Deno.test("single decimal to binary", () => {
  assertEquals(convert([5], 10, 2), [1, 0, 1]);
});

Deno.test("binary to multiple decimal", () => {
  assertEquals(convert([1, 0, 1, 0, 1, 0], 2, 10), [4, 2]);
});

Deno.test("decimal to binary", () => {
  assertEquals(convert([4, 2], 10, 2), [1, 0, 1, 0, 1, 0]);
});

Deno.test("trinary to hexadecimal", () => {
  assertEquals(convert([1, 1, 2, 0], 3, 16), [2, 10]);
});

Deno.test("hexadecimal to trinary", () => {
  assertEquals(convert([2, 10], 16, 3), [1, 1, 2, 0]);
});

Deno.test("15-bit integer", () => {
  assertEquals(convert([3, 46, 60], 97, 73), [6, 10, 45]);
});

Deno.test("empty list", () => {
  assertThrows(
    () => {
      convert([], 2, 10);
    },
    Error,
    "Input has wrong format",
  );
});

Deno.test("single zero", () => {
  assertEquals(convert([0], 10, 2), [0]);
});

Deno.test("multiple zeros", () => {
  assertThrows(
    () => {
      convert([0, 0, 0], 10, 2);
    },
    Error,
    "Input has wrong format",
  );
});

Deno.test("leading zeros", () => {
  assertThrows(
    () => {
      convert([0, 6, 0], 7, 10);
    },
    Error,
    "Input has wrong format",
  );
});

Deno.test("negative digit", () => {
  assertThrows(
    () => {
      convert([1, -1, 1, 0, 1, 0], 2, 10);
    },
    Error,
    "Input has wrong format",
  );
});

Deno.test("invalid positive digit", () => {
  assertThrows(
    () => {
      convert([1, 2, 1, 0, 1, 0], 2, 10);
    },
    Error,
    "Input has wrong format",
  );
});

Deno.test("first base is one", () => {
  assertThrows(
    () => {
      convert([], 1, 10);
    },
    Error,
    "Wrong input base",
  );
});

Deno.test("second base is one", () => {
  assertThrows(
    () => {
      convert([1, 0, 1, 0, 1, 0], 2, 1);
    },
    Error,
    "Wrong output base",
  );
});

Deno.test("first base is zero", () => {
  assertThrows(
    () => {
      convert([], 0, 10);
    },
    Error,
    "Wrong input base",
  );
});

Deno.test("second base is zero", () => {
  assertThrows(
    () => {
      convert([7], 10, 0);
    },
    Error,
    "Wrong output base",
  );
});

Deno.test("first base is negative", () => {
  assertThrows(
    () => {
      convert([1], -2, 10);
    },
    Error,
    "Wrong input base",
  );
});

Deno.test("second base is negative", () => {
  assertThrows(
    () => {
      convert([1], 2, -7);
    },
    Error,
    "Wrong output base",
  );
});

Deno.test("both bases are negative", () => {
  assertThrows(
    () => {
      convert([1], -2, -7);
    },
    Error,
    "Wrong input base",
  );
});

Deno.test("wrong output_base base not integer", () => {
  assertThrows(
    () => {
      convert([0], 3, 2.5);
    },
    Error,
    "Wrong output base",
  );
});
