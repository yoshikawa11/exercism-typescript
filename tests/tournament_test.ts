import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { Tournament } from "../answers/tournament.ts";

Deno.test("just the header if no input", () => {
  assertEquals(
    new Tournament().tally(""),
    "Team                           | MP |  W |  D |  L |  P",
  );
});

Deno.test("a win is three points, a loss is zero points", () => {
  assertEquals(
    new Tournament().tally("Allegoric Alaskans;Blithering Badgers;win"),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3",
      "Blithering Badgers             |  1 |  0 |  0 |  1 |  0",
    ].join("\n"),
  );
});

Deno.test("a win can also be expressed as a loss", () => {
  assertEquals(
    new Tournament().tally("Blithering Badgers;Allegoric Alaskans;loss"),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Allegoric Alaskans             |  1 |  1 |  0 |  0 |  3",
      "Blithering Badgers             |  1 |  0 |  0 |  1 |  0",
    ].join("\n"),
  );
});

Deno.test("a different team can win", () => {
  assertEquals(
    new Tournament().tally("Blithering Badgers;Allegoric Alaskans;win"),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Blithering Badgers             |  1 |  1 |  0 |  0 |  3",
      "Allegoric Alaskans             |  1 |  0 |  0 |  1 |  0",
    ].join("\n"),
  );
});

Deno.test("a draw is one point each", () => {
  assertEquals(
    new Tournament().tally("Allegoric Alaskans;Blithering Badgers;draw"),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Allegoric Alaskans             |  1 |  0 |  1 |  0 |  1",
      "Blithering Badgers             |  1 |  0 |  1 |  0 |  1",
    ].join("\n"),
  );
});

Deno.test("There can be more than one match", () => {
  assertEquals(
    new Tournament().tally(
      [
        "Allegoric Alaskans;Blithering Badgers;win",
        "Allegoric Alaskans;Blithering Badgers;win",
      ].join("\n"),
    ),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Allegoric Alaskans             |  2 |  2 |  0 |  0 |  6",
      "Blithering Badgers             |  2 |  0 |  0 |  2 |  0",
    ].join("\n"),
  );
});

Deno.test("There can be more than one winner", () => {
  assertEquals(
    new Tournament().tally(
      [
        "Allegoric Alaskans;Blithering Badgers;loss",
        "Allegoric Alaskans;Blithering Badgers;win",
      ].join("\n"),
    ),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Allegoric Alaskans             |  2 |  1 |  0 |  1 |  3",
      "Blithering Badgers             |  2 |  1 |  0 |  1 |  3",
    ].join("\n"),
  );
});

Deno.test("There can be more than two teams", () => {
  assertEquals(
    new Tournament().tally(
      [
        "Allegoric Alaskans;Blithering Badgers;win",
        "Blithering Badgers;Courageous Californians;win",
        "Courageous Californians;Allegoric Alaskans;loss",
      ].join("\n"),
    ),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Allegoric Alaskans             |  2 |  2 |  0 |  0 |  6",
      "Blithering Badgers             |  2 |  1 |  0 |  1 |  3",
      "Courageous Californians        |  2 |  0 |  0 |  2 |  0",
    ].join("\n"),
  );
});

Deno.test("typical input", () => {
  assertEquals(
    new Tournament().tally(
      [
        "Allegoric Alaskans;Blithering Badgers;win",
        "Devastating Donkeys;Courageous Californians;draw",
        "Devastating Donkeys;Allegoric Alaskans;win",
        "Courageous Californians;Blithering Badgers;loss",
        "Blithering Badgers;Devastating Donkeys;loss",
        "Allegoric Alaskans;Courageous Californians;win",
      ].join("\n"),
    ),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Devastating Donkeys            |  3 |  2 |  1 |  0 |  7",
      "Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6",
      "Blithering Badgers             |  3 |  1 |  0 |  2 |  3",
      "Courageous Californians        |  3 |  0 |  1 |  2 |  1",
    ].join("\n"),
  );
});

Deno.test("incomplete competition (not all pairs have played)", () => {
  assertEquals(
    new Tournament().tally(
      [
        "Allegoric Alaskans;Blithering Badgers;loss",
        "Devastating Donkeys;Allegoric Alaskans;loss",
        "Courageous Californians;Blithering Badgers;draw",
        "Allegoric Alaskans;Courageous Californians;win",
      ].join("\n"),
    ),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6",
      "Blithering Badgers             |  2 |  1 |  1 |  0 |  4",
      "Courageous Californians        |  2 |  0 |  1 |  1 |  1",
      "Devastating Donkeys            |  1 |  0 |  0 |  1 |  0",
    ].join("\n"),
  );
});

Deno.test("ties broken alphabetically", () => {
  assertEquals(
    new Tournament().tally(
      [
        "Courageous Californians;Devastating Donkeys;win",
        "Allegoric Alaskans;Blithering Badgers;win",
        "Devastating Donkeys;Allegoric Alaskans;loss",
        "Courageous Californians;Blithering Badgers;win",
        "Blithering Badgers;Devastating Donkeys;draw",
        "Allegoric Alaskans;Courageous Californians;draw",
      ].join("\n"),
    ),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Allegoric Alaskans             |  3 |  2 |  1 |  0 |  7",
      "Courageous Californians        |  3 |  2 |  1 |  0 |  7",
      "Blithering Badgers             |  3 |  0 |  1 |  2 |  1",
      "Devastating Donkeys            |  3 |  0 |  1 |  2 |  1",
    ].join("\n"),
  );
});

Deno.test("ensure points sorted numerically", () => {
  assertEquals(
    new Tournament().tally(
      [
        "Devastating Donkeys;Blithering Badgers;win",
        "Devastating Donkeys;Blithering Badgers;win",
        "Devastating Donkeys;Blithering Badgers;win",
        "Devastating Donkeys;Blithering Badgers;win",
        "Blithering Badgers;Devastating Donkeys;win",
      ].join("\n"),
    ),
    [
      "Team                           | MP |  W |  D |  L |  P",
      "Devastating Donkeys            |  5 |  4 |  0 |  1 | 12",
      "Blithering Badgers             |  5 |  1 |  0 |  4 |  3",
    ].join("\n"),
  );
});
