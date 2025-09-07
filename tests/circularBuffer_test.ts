import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import CircularBuffer, {
  BufferEmptyError,
  BufferFullError,
} from "../answers/circularBuffer.ts";

Deno.test("reading an empty buffer throws a BufferEmptyError", () => {
  const buffer = new CircularBuffer<string>(1);
  assertThrows(() => buffer.read(), BufferEmptyError);
});

Deno.test("write and read back one item", () => {
  const buffer = new CircularBuffer<string>(1);
  buffer.write("1");
  assertEquals(buffer.read(), "1");
  assertThrows(() => buffer.read(), BufferEmptyError);
});

Deno.test("write and read back multiple items", () => {
  const buffer = new CircularBuffer<string>(2);
  buffer.write("1");
  buffer.write("2");
  assertEquals(buffer.read(), "1");
  assertEquals(buffer.read(), "2");
  assertThrows(() => buffer.read(), BufferEmptyError);
});

Deno.test("clearing a buffer", () => {
  const buffer = new CircularBuffer<string>(2);
  buffer.write("1");
  buffer.write("2");
  buffer.clear();
  assertThrows(() => buffer.read(), BufferEmptyError);
  buffer.write("3");
  buffer.write("4");
  assertEquals(buffer.read(), "3");
  assertEquals(buffer.read(), "4");
});

Deno.test("alternate write and read", () => {
  const buffer = new CircularBuffer<string>(2);
  buffer.write("1");
  assertEquals(buffer.read(), "1");
  buffer.write("2");
  assertEquals(buffer.read(), "2");
});

Deno.test("reads back oldest item", () => {
  const buffer = new CircularBuffer<string>(3);
  buffer.write("1");
  buffer.write("2");
  buffer.read();
  buffer.write("3");
  assertEquals(buffer.read(), "2");
  assertEquals(buffer.read(), "3");
});

Deno.test("writing to a full buffer throws a BufferFullError", () => {
  const buffer = new CircularBuffer<string>(2);
  buffer.write("1");
  buffer.write("2");
  assertThrows(() => buffer.write("A"), BufferFullError);
});

Deno.test("forced writes over write oldest item in a full buffer", () => {
  const buffer = new CircularBuffer<string>(2);
  buffer.write("1");
  buffer.write("2");
  buffer.forceWrite("A");
  assertEquals(buffer.read(), "2");
  assertEquals(buffer.read(), "A");
  assertThrows(() => buffer.read(), BufferEmptyError);
});

Deno.test("forced writes act like write in a non-full buffer", () => {
  const buffer = new CircularBuffer<string>(2);
  buffer.write("1");
  buffer.forceWrite("2");
  assertEquals(buffer.read(), "1");
  assertEquals(buffer.read(), "2");
  assertThrows(() => buffer.read(), BufferEmptyError);
});

Deno.test("alternate force write and read into full buffer", () => {
  const buffer = new CircularBuffer<string>(5);
  buffer.write("1");
  buffer.write("2");
  buffer.write("3");
  buffer.read();
  buffer.read();
  buffer.write("4");
  buffer.read();
  buffer.write("5");
  buffer.write("6");
  buffer.write("7");
  buffer.write("8");
  buffer.forceWrite("A");
  buffer.forceWrite("B");
  assertEquals(buffer.read(), "6");
  assertEquals(buffer.read(), "7");
  assertEquals(buffer.read(), "8");
  assertEquals(buffer.read(), "A");
  assertEquals(buffer.read(), "B");
  assertThrows(() => buffer.read(), BufferEmptyError);
});
