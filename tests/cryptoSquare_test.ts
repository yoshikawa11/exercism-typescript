import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Crypto } from "../answers/cryptoSquare.ts";

Deno.test("empty plaintext results in an empty ciphertext", () => {
  const crypto = new Crypto("");
  assertEquals(crypto.ciphertext, "");
});

Deno.test("Lowercase", () => {
  const crypto = new Crypto("A");
  assertEquals(crypto.ciphertext, "a");
});

Deno.test("Remove spaces", () => {
  const crypto = new Crypto("  b ");
  assertEquals(crypto.ciphertext, "b");
});

Deno.test("Remove punctuation", () => {
  const crypto = new Crypto("@1,%!");
  assertEquals(crypto.ciphertext, "1");
});

Deno.test("9 character plaintext results in 3 chunks of 3 characters", () => {
  const crypto = new Crypto("This is fun!");
  assertEquals(crypto.ciphertext, "tsf hiu isn");
});

Deno.test("8 character plaintext results in 3 chunks, the last one with a trailing space", () => {
  const crypto = new Crypto("Chill out.");
  assertEquals(crypto.ciphertext, "clu hlt io ");
});

Deno.test("54 character plaintext results in 7 chunks, the last two with trailing spaces", () => {
  const crypto = new Crypto(
    "If man was meant to stay on the ground, god would have given us roots.",
  );
  assertEquals(
    crypto.ciphertext,
    "imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn  sseoau ",
  );
});
