import {
  assertEquals,
  assertStrictEquals,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import {
  createCallback,
  createComputed,
  createInput,
} from "../answers/react.ts";

// c51ee736-d001-4f30-88d1-0c8e8b43cd07
Deno.test("input cells have a value", () => {
  const initialValue = 10;
  const [input, _setInput] = createInput(initialValue);
  assertEquals(input(), initialValue);
});

// dedf0fe0-da0c-4d5d-a582-ffaf5f4d0851
Deno.test("an input cell's value can be set", () => {
  const newValue = 20;
  const [input, setInput] = createInput(4);
  setInput(newValue);
  assertEquals(input(), newValue);
});

// 5854b975-f545-4f93-8968-cc324cde746e
Deno.test("compute cells calculate initial value", () => {
  const [input] = createInput(1);
  const output = createComputed(() => input() + 1);
  assertEquals(output(), 2);
});

// 25795a3d-b86c-4e91-abe7-1c340e71560c
Deno.test("compute cell takes inputs in correct order", () => {
  const [[one], [two]] = [createInput(1), createInput(2)];
  const output = createComputed(() => one() + two() * 10);
  assertEquals(output(), 21);
});

// c62689bf-7be5-41bb-b9f8-65178ef3e8ba
Deno.test("compute cells update value when inputs are changed", () => {
  const [input, setInput] = createInput(1);
  const output = createComputed(() => input() + 1);
  setInput(3);
  assertEquals(output(), 4);
});

// 5ff36b09-0a88-48d4-b7f8-69dcf3feea40
Deno.test("compute cells can depend on other compute cells", () => {
  const [input, setInput] = createInput(1);
  const timesTwo = createComputed(() => input() * 2);
  const timesThirty = createComputed(() => input() * 30);
  const sum = createComputed(() => timesTwo() + timesThirty());
  assertEquals(sum(), 32);
  setInput(3);
  assertEquals(sum(), 96);
});

// abe33eaf-68ad-42a5-b728-05519ca88d2d
Deno.test("compute cells fire callbacks", () => {
  const [input, setInput] = createInput(1);
  const output = createComputed(() => input() + 1);
  let value = 0;
  createCallback(() => (value = output()));
  setInput(3);
  assertEquals(value, 4);
});

// 9e5cb3a4-78e5-4290-80f8-a78612c52db2
Deno.test("callbacks fire only when output values change", () => {
  const [input, setInput] = createInput(1);
  const output = createComputed(
    () => (input() < 3 ? 111 : 222),
    undefined,
    true,
  );
  let value: number | undefined;
  createCallback(() => (value = output()));
  value = undefined;
  setInput(2);
  assertStrictEquals(value, undefined);
  setInput(4);
  assertEquals(value, 222);
});

// ada17cb6-7332-448a-b934-e3d7495c13d
Deno.test("callbacks do not report already reported values", () => {
  const [input, setInput] = createInput(1);
  const output = createComputed(() => input() + 1);

  let value: number | undefined;
  createCallback(() => (value = output()));

  setInput(2);
  assertEquals(value, 3);

  setInput(3);
  assertEquals(value, 4);
});

// ac271900-ea5c-461c-9add-eeebcb8c03e5
Deno.test("callbacks can fire from multiple cells", () => {
  const [input, setInput] = createInput(1);
  const plus_one = createComputed(() => input() + 1);
  const minus_one = createComputed(() => input() - 1);

  let value1 = 0;
  createCallback(() => (value1 = plus_one()));
  let value2 = 0;
  createCallback(() => (value2 = minus_one()));

  setInput(10);
  assertEquals(value1, 11);
  assertEquals(value2, 9);
});

// From JavaScript track
Deno.test("static callbacks fire even if their own value has not changed", () => {
  const [input, setInput] = createInput(1);
  const output = createComputed(
    () => (input() < 3 ? 111 : 222),
    undefined,
    true,
  );
  const values: string[] = [];
  createCallback(() => {
    const _dontCare = output();
    values.push("cell changed");
  });
  values.pop();
  setInput(2);
  assertEquals(values, []);
  setInput(4);
  setInput(2);
  setInput(4);
  assertEquals(values, ["cell changed", "cell changed", "cell changed"]);
});

// 95a82dcc-8280-4de3-a4cd-4f19a84e3d6f
Deno.test("callbacks can be added and removed", () => {
  const [input, setInput] = createInput(11);
  const output = createComputed(() => input() + 1);

  const values1: number[] = [];
  const unsubscribe1 = createCallback(() => values1.push(output()));
  values1.pop();
  const values2: number[] = [];
  createCallback(() => values2.push(output()));
  values2.pop();

  setInput(31);

  unsubscribe1();

  const values3: number[] = [];
  createCallback(() => values3.push(output()));
  values3.pop();

  setInput(41);

  assertEquals(values1, [32]);
  assertEquals(values2, [32, 42]);
  assertEquals(values3, [42]);
});

// f2a7b445-f783-4e0e-8393-469ab4915f2a
Deno.test("removing a callback multiple times doesn't interfere with other callbacks", () => {
  const [input, setInput] = createInput(1);
  const output = createComputed(() => input() + 1);

  const values1: number[] = [];
  const unsubscribe1 = createCallback(() => values1.push(output()));
  values1.pop();
  const values2: number[] = [];
  createCallback(() => values2.push(output()));
  values2.pop();

  unsubscribe1();
  unsubscribe1();
  unsubscribe1();

  setInput(2);

  assertEquals(values1, []);
  assertEquals(values2, [3]);
});

// daf6feca-09e0-4ce5-801d-770ddfe1c268
Deno.test("callbacks should only be called once, even if multiple dependencies change", () => {
  const [input, setInput] = createInput(1);
  const plusOne = createComputed(() => input() + 1);
  const minusOne1 = createComputed(() => input() - 1);
  const minusOne2 = createComputed(() => minusOne1() - 1);
  const output = createComputed(() => plusOne() * minusOne2());

  const values: number[] = [];
  createCallback(() => values.push(output()));
  values.pop();

  setInput(4);

  assertEquals(values, [10]);
});

// 9a5b159f-b7aa-4729-807e-f1c38a46d377
Deno.test("callbacks should not be called if dependencies change but output value doesn't change", () => {
  const [input, setInput] = createInput(1);
  const plusOne = createComputed(() => input() + 1);
  const minusOne = createComputed(() => input() - 1);
  const alwaysTwo = createComputed(
    () => plusOne() - minusOne(),
    undefined,
    true,
  );

  const values: number[] = [];
  createCallback(() => values.push(alwaysTwo()));
  values.pop();

  setInput(2);
  setInput(3);
  setInput(4);
  setInput(5);

  assertEquals(values, []);
});
