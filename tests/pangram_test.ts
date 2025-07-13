import { isPangram } from "../answers/pangram.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(isPangram(""), false);
  assertEquals(isPangram("the quick brown fox jumps over the lazy dog"), true);
  assertEquals(
    isPangram("!!the quick brown fox jumps over the lazy dog??"),
    true,
  );
  assertEquals(
    isPangram("a quick movement of the enemy will jeopardize five gunboats"),
    false,
  );
  assertEquals(isPangram("five boxing wizards jump quickly at it"), false);
});
