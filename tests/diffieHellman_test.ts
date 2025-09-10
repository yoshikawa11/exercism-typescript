import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { DiffieHellman } from "../answers/diffieHellman.ts";

Deno.test("throws an error if the constructor arguments are out of range", () => {
  assertThrows(() => {
    new DiffieHellman(0, 9999);
  });
});

Deno.test("throws an error if the constructor arguments are not prime", () => {
  assertThrows(() => {
    new DiffieHellman(10, 13);
  });
});

Deno.test("throws an error if private key is negative", () => {
  const diffieHellman = new DiffieHellman(23, 5);
  assertThrows(() => {
    diffieHellman.getPublicKey(-1);
  });
});

Deno.test("throws an error if private key is zero", () => {
  const diffieHellman = new DiffieHellman(23, 5);
  assertThrows(() => {
    diffieHellman.getPublicKey(0);
  });
});

Deno.test("throws an error if private key is one", () => {
  const diffieHellman = new DiffieHellman(23, 5);
  assertThrows(() => {
    diffieHellman.getPublicKey(1);
  });
});

Deno.test("throws an error if private key equals the modulus parameter p", () => {
  const p = 23;
  const g = 5;
  const diffieHellman = new DiffieHellman(p, g);
  assertThrows(() => {
    diffieHellman.getPublicKey(p);
  });
});

Deno.test("throws an error if private key is greater than the modulus parameter p", () => {
  const p = 23;
  const g = 5;
  const diffieHellman = new DiffieHellman(p, g);
  assertThrows(() => {
    diffieHellman.getPublicKey(p + 1);
  });
});

Deno.test("can calculate public key using private key", () => {
  const diffieHellman = new DiffieHellman(23, 5);
  assertEquals(diffieHellman.getPublicKey(6), 8);
});

Deno.test("can calculate public key when given a different private key", () => {
  const diffieHellman = new DiffieHellman(23, 5);
  assertEquals(diffieHellman.getPublicKey(15), 19);
});

Deno.test("can calculate secret using other party's public key", () => {
  assertEquals(new DiffieHellman(23, 5).getSecret(19, 6), 2);
});

Deno.test("key exchange", () => {
  const diffieHellman = new DiffieHellman(23, 5);
  const alicePrivateKey = 6;
  const bobPrivateKey = 15;
  const alicePublicKey = diffieHellman.getPublicKey(alicePrivateKey);
  const bobPublicKey = diffieHellman.getPublicKey(bobPrivateKey);

  const secretA = diffieHellman.getSecret(bobPublicKey, alicePrivateKey);
  const secretB = diffieHellman.getSecret(alicePublicKey, bobPrivateKey);

  assertEquals(secretA, secretB);
});
