import { age } from "../answers/spaceAge.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(age(1_000_000_000, "earth"), 31.69);
  assertEquals(age(2_134_835_688, "mercury"), 280.88);
  assertEquals(age(189_839_836, "venus"), 9.78);
  assertEquals(age(2_129_871_239, "mars"), 35.88);
  assertEquals(age(901_876_382, "jupiter"), 2.41);
  assertEquals(age(2_000_000_000, "saturn"), 2.15);
  assertEquals(age(1_210_123_456, "uranus"), 0.46);
  assertEquals(age(1_821_023_456, "neptune"), 0.35);
});
