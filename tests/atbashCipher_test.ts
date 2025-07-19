import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { decode, encode } from "../answers/atbashCipher.ts";

Deno.test("encode yes", () => {
  assertEquals(encode("yes"), "bvh");
});

Deno.test("decode bvh", () => {
  assertEquals(decode("bvh"), "yes");
});

Deno.test("encode no", () => {
  assertEquals(encode("no"), "ml");
});

Deno.test("decode ml", () => {
  assertEquals(decode("ml"), "no");
});

Deno.test("encode OMG", () => {
  assertEquals(encode("OMG"), "lnt");
});

Deno.test("decode lnt", () => {
  assertEquals(decode("lnt"), "omg");
});

Deno.test("encode with spaces", () => {
  assertEquals(encode("O M G"), "lnt");
});

Deno.test("decode lnt (from spaced input)", () => {
  assertEquals(decode("lnt"), "omg");
});

Deno.test("encode mindblowingly", () => {
  assertEquals(encode("mindblowingly"), "nrmwy oldrm tob");
});

Deno.test("decode nrmwy oldrm tob", () => {
  assertEquals(decode("nrmwy oldrm tob"), "mindblowingly");
});

Deno.test("encode with punctuation and numbers", () => {
  assertEquals(encode("Testing, 1 2 3, testing."), "gvhgr mt123 gvhgr mt");
});

Deno.test("decode gvhgr mt123 gvhgr mt", () => {
  assertEquals(decode("gvhgr mt123 gvhgr mt"), "testing123testing");
});

Deno.test("encode Truth is fiction.", () => {
  assertEquals(encode("Truth is fiction."), "gifgs rhurx grlm");
});

Deno.test("decode gifgs rhurx grlm", () => {
  assertEquals(decode("gifgs rhurx grlm"), "truthisfiction");
});

Deno.test("encode pangram", () => {
  assertEquals(
    encode("The quick brown fox jumps over the lazy dog."),
    "gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt",
  );
});

Deno.test("decode pangram", () => {
  assertEquals(
    decode("gsvjf rxpyi ldmul cqfnk hlevi gsvoz abwlt"),
    "thequickbrownfoxjumpsoverthelazydog",
  );
});
