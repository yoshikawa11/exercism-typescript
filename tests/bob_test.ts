import { hey } from "../answers/bob.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(hey("Tom-ay-to, tom-aaaah-to."), "Whatever.");
  assertEquals(hey("WATCH OUT!"), "Whoa, chill out!");
  assertEquals(hey("ABCDEFG"), "Whoa, chill out!");
  assertEquals(hey("Does this cryogenic chamber make me look fat?"), "Sure.");
  assertEquals(hey("You are, what, like 15?"), "Sure.");
  assertEquals(
    hey("WHAT THE HELL WERE YOU THINKING?"),
    "Calm down, I know what I'm doing!",
  );
  assertEquals(hey("1, 2, 3 GO!"), "Whoa, chill out!");
  assertEquals(hey(""), "Fine. Be that way!");
  assertEquals(hey("   "), "Fine. Be that way!");
  assertEquals(hey("\t\t\t\t\t\t\t\t\t\t"), "Fine. Be that way!");
  assertEquals(
    hey("\nDoes this cryogenic chamber make me look fat?\nNo."),
    "Whatever.",
  );
  assertEquals(
    hey("Okay if like my  spacebar  quite a bit?   "),
    "Sure.",
  );
});
