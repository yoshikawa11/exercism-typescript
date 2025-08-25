import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { convert } from "../answers/ocrNumbers.ts";

Deno.test("recognizes zero", () => {
  assertEquals(convert(" _ \n" + "| |\n" + "|_|\n" + "   "), "0");
});

Deno.test("recognizes one", () => {
  assertEquals(convert("   \n" + "  |\n" + "  |\n" + "   "), "1");
});

Deno.test("recognizes two", () => {
  assertEquals(convert(" _ \n" + " _|\n" + "|_ \n" + "   "), "2");
});

Deno.test("recognizes three", () => {
  assertEquals(convert(" _ \n" + " _|\n" + " _|\n" + "   "), "3");
});

Deno.test("recognizes four", () => {
  assertEquals(convert("   \n" + "|_|\n" + "  |\n" + "   "), "4");
});

Deno.test("recognizes five", () => {
  assertEquals(convert(" _ \n" + "|_ \n" + " _|\n" + "   "), "5");
});

Deno.test("recognizes six", () => {
  assertEquals(convert(" _ \n" + "|_ \n" + "|_|\n" + "   "), "6");
});

Deno.test("recognizes seven", () => {
  assertEquals(convert(" _ \n" + "  |\n" + "  |\n" + "   "), "7");
});

Deno.test("recognizes eight", () => {
  assertEquals(convert(" _ \n" + "|_|\n" + "|_|\n" + "   "), "8");
});

Deno.test("recognizes nine", () => {
  assertEquals(convert(" _ \n" + "|_|\n" + " _|\n" + "   "), "9");
});

Deno.test("recognizes ten", () => {
  assertEquals(convert("    _ \n" + "  || |\n" + "  ||_|\n" + "      "), "10");
});

Deno.test("identifies garble", () => {
  assertEquals(convert("   \n" + "| |\n" + "| |\n" + "   "), "?");
});

Deno.test("converts 110101100", () => {
  assertEquals(
    convert(
      "       _     _        _  _ \n" +
        "  |  || |  || |  |  || || |\n" +
        "  |  ||_|  ||_|  |  ||_||_|\n" +
        "                           ",
    ),
    "110101100",
  );
});

Deno.test("identifies garble mixed in", () => {
  assertEquals(
    convert(
      "       _     _           _ \n" +
        "  |  || |  || |     || || |\n" +
        "  |  | _|  ||_|  |  ||_||_|\n" +
        "                           ",
    ),
    "11?10?1?0",
  );
});

Deno.test("converts 1234567890", () => {
  assertEquals(
    convert(
      "    _  _     _  _  _  _  _  _ \n" +
        "  | _| _||_||_ |_   ||_||_|| |\n" +
        "  ||_  _|  | _||_|  ||_| _||_|\n" +
        "                              ",
    ),
    "1234567890",
  );
});

Deno.test("converts 123,456,789", () => {
  assertEquals(
    convert(
      "    _  _ \n" +
        "  | _| _|\n" +
        "  ||_  _|\n" +
        "         \n" +
        "    _  _ \n" +
        "|_||_ |_ \n" +
        "  | _||_|\n" +
        "         \n" +
        " _  _  _ \n" +
        "  ||_||_|\n" +
        "  ||_| _|\n" +
        "         ",
    ),
    "123,456,789",
  );
});
