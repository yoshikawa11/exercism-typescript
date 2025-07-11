import { helper } from "../answers/resisterColorTrio.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(helper(["white", "white", "white"]), "99 gigaohms");
  assertEquals(helper(["orange", "orange", "black"]), "33 ohms");
  assertEquals(helper(["yellow", "violet", "yellow"]), "470 kiloohms");
});
