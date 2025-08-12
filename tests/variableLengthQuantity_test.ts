import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { decode, encode } from "../answers/variableLengthQuantity.ts";

Deno.test("Encode a series of integers, producing a series of bytes.", () => {
  Deno.test("zero", () => {
    assertEquals(encode([0]), [0]);
  });

  Deno.test("arbitrary single byte", () => {
    assertEquals(encode([0x40]), [0x40]);
  });

  Deno.test("largest single byte", () => {
    assertEquals(encode([0x7f]), [0x7f]);
  });

  Deno.test("smallest double byte", () => {
    assertEquals(encode([0x80]), [0x81, 0]);
  });

  Deno.test("arbitrary double byte", () => {
    assertEquals(encode([0x2000]), [0xc0, 0]);
  });

  Deno.test("largest double byte", () => {
    assertEquals(encode([0x3fff]), [0xff, 0x7f]);
  });

  Deno.test("smallest triple byte", () => {
    assertEquals(encode([0x4000]), [0x81, 0x80, 0]);
  });

  Deno.test("arbitrary triple byte", () => {
    assertEquals(encode([0x100000]), [0xc0, 0x80, 0]);
  });

  Deno.test("largest triple byte", () => {
    assertEquals(encode([0x1fffff]), [0xff, 0xff, 0x7f]);
  });

  Deno.test("smallest quadruple byte", () => {
    assertEquals(encode([0x200000]), [0x81, 0x80, 0x80, 0]);
  });

  Deno.test("arbitrary quadruple byte", () => {
    assertEquals(encode([0x8000000]), [0xc0, 0x80, 0x80, 0]);
  });

  Deno.test("largest quadruple byte", () => {
    assertEquals(encode([0xfffffff]), [0xff, 0xff, 0xff, 0x7f]);
  });

  Deno.test("smallest quintuple byte", () => {
    assertEquals(encode([0x10000000]), [0x81, 0x80, 0x80, 0x80, 0]);
  });

  Deno.test("arbitrary quintuple byte", () => {
    assertEquals(encode([0xff000000]), [0x8f, 0xf8, 0x80, 0x80, 0]);
  });

  Deno.test("maximum 32-bit integer input", () => {
    assertEquals(encode([0xffffffff]), [0x8f, 0xff, 0xff, 0xff, 0x7f]);
  });

  Deno.test("two single-byte values", () => {
    assertEquals(encode([0x40, 0x7f]), [0x40, 0x7f]);
  });

  Deno.test("two multi-byte values", () => {
    assertEquals(encode([0x4000, 0x123456]), [
      0x81,
      0x80,
      0,
      0xc8,
      0xe8,
      0x56,
    ]);
  });

  Deno.test("many multi-byte values", () => {
    const input = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000];
    const expected = [
      0xc0,
      0,
      0xc8,
      0xe8,
      0x56,
      0xff,
      0xff,
      0xff,
      0x7f,
      0,
      0xff,
      0x7f,
      0x81,
      0x80,
      0,
    ];
    assertEquals(encode(input), expected);
  });
});

Deno.test("Decode a series of bytes, producing a series of integers.", () => {
  Deno.test("one byte", () => {
    assertEquals(decode([0x7f]), [0x7f]);
  });

  Deno.test("two bytes", () => {
    assertEquals(decode([0xc0, 0]), [0x2000]);
  });

  Deno.test("three bytes", () => {
    assertEquals(decode([0xff, 0xff, 0x7f]), [0x1fffff]);
  });

  Deno.test("four bytes", () => {
    assertEquals(decode([0x81, 0x80, 0x80, 0]), [0x200000]);
  });

  Deno.test("maximum 32-bit integer", () => {
    assertEquals(decode([0x8f, 0xff, 0xff, 0xff, 0x7f]), [0xffffffff]);
  });

  Deno.test("incomplete sequence causes error", () => {
    assertThrows(
      () => {
        decode([0xff]);
      },
      Error,
      "Incomplete sequence",
    );
  });

  Deno.test("incomplete sequence causes error, even if value is zero", () => {
    assertThrows(
      () => {
        decode([0x80]);
      },
      Error,
      "Incomplete sequence",
    );
  });

  Deno.test("multiple values", () => {
    const input = [
      0xc0,
      0,
      0xc8,
      0xe8,
      0x56,
      0xff,
      0xff,
      0xff,
      0x7f,
      0,
      0xff,
      0x7f,
      0x81,
      0x80,
      0,
    ];
    const expected = [0x2000, 0x123456, 0xfffffff, 0, 0x3fff, 0x4000];
    assertEquals(decode(input), expected);
  });
});
