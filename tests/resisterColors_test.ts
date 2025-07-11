import { helper } from "../answers/resisterColor.ts";
import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";

Deno.test("test", () => {
  assertEquals(helper(["brown", "red", "orange", "yellow"]), 1);
  assertEquals(helper(["grey", "yellow"]), 8);
});
