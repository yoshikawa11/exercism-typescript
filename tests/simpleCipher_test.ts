import {
  assertEquals,
  assertMatch,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { SimpleCipher } from "../answers/simpleCipher.ts";

// -- 1. コンストラクタの動作確認 --

Deno.test("Random key cipher - has key", () => {
  const cipher = new SimpleCipher();
  assertMatch(cipher.key, /^[a-z]+$/);
});

Deno.test("Random key cipher - encode returns something", () => {
  const cipher = new SimpleCipher();
  assertEquals(typeof cipher.encode("aaaaaaaaaa"), "string");
});

Deno.test("Random key cipher - decode returns something", () => {
  const cipher = new SimpleCipher();
  assertEquals(typeof cipher.decode("aaaaaaaaaa"), "string");
});

Deno.test("Random key cipher - is reversible", () => {
  const cipher = new SimpleCipher();
  const plaintext = "aaaaaaaaaa";
  const encoded = cipher.encode(plaintext);
  const decoded = cipher.decode(encoded);
  assertEquals(decoded, plaintext);
});

// -- 2. 固定キーでのエンコード・デコード --

Deno.test("Cipher with key of a - encode does nothing", () => {
  const cipher = new SimpleCipher("aaaaaaaaaa");
  assertEquals(cipher.encode("aaaaaaaaaa"), "aaaaaaaaaa");
});

Deno.test("Cipher with key of a - decode does nothing", () => {
  const cipher = new SimpleCipher("aaaaaaaaaa");
  assertEquals(cipher.decode("aaaaaaaaaa"), "aaaaaaaaaa");
});

Deno.test("Cipher with key of b - encode shifts by 1", () => {
  const cipher = new SimpleCipher("bbbbbbbbbb");
  assertEquals(cipher.encode("aaaaaaaaaa"), "bbbbbbbbbb");
});

Deno.test("Cipher with key of b - decode shifts by 1", () => {
  const cipher = new SimpleCipher("bbbbbbbbbb");
  assertEquals(cipher.decode("bbbbbbbbbb"), "aaaaaaaaaa");
});

Deno.test("Cipher with key of abc - encode", () => {
  const cipher = new SimpleCipher("abc");
  assertEquals(cipher.encode("iamapandabear"), "iboaqcnecbfcr");
});

Deno.test("Cipher with key of abc - decode", () => {
  const cipher = new SimpleCipher("abc");
  assertEquals(cipher.decode("iboaqcnecbfcr"), "iamapandabear");
});

// -- 3. エラー条件の確認

Deno.test("Cipher throws with uppercase letters", () => {
  try {
    new SimpleCipher("ABCdef");
  } catch (e) {
    assertEquals(e instanceof Error, true);
    return;
  }
  throw new Error("Expected error for uppercase key");
});

Deno.test("Cipher throws with digits in key", () => {
  try {
    new SimpleCipher("abc123xyz");
  } catch (e) {
    assertEquals(e instanceof Error, true);
    return;
  }
  throw new Error("Expected error for numeric key");
});

Deno.test("Cipher throws with empty key", () => {
  try {
    new SimpleCipher("");
  } catch (e) {
    assertEquals(e instanceof Error, true);
    return;
  }
  throw new Error("Expected error for empty key");
});
