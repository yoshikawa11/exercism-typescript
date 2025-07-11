import { dialog } from "../answers/twoFer.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(dialog("Alice"), "One for Alice, one for me.");
  assertEquals(dialog(), "One for you, one for me.");
  assertEquals(dialog("Bohdan"), "One for Bohdan, one for me.");
});
