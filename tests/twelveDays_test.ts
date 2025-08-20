import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { recite } from "../answers/twelveDays.ts";

Deno.test("first day a partridge in a pear tree", () => {
  const expected =
    "On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\n";
  assertEquals(recite(1, 1), expected);
});

Deno.test("second day two turtle doves", () => {
  const expected =
    "On the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(2, 2), expected);
});

Deno.test("third day three french hens", () => {
  const expected =
    "On the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(3, 3), expected);
});

Deno.test("fourth day four calling birds", () => {
  const expected =
    "On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(4, 4), expected);
});

Deno.test("fifth day five gold rings", () => {
  const expected =
    "On the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(5, 5), expected);
});

Deno.test("sixth day six geese-a-laying", () => {
  const expected =
    "On the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(6, 6), expected);
});

Deno.test("seventh day seven swans-a-swimming", () => {
  const expected =
    "On the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(7, 7), expected);
});

Deno.test("eighth day eight maids-a-milking", () => {
  const expected =
    "On the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(8, 8), expected);
});

Deno.test("ninth day nine ladies dancing", () => {
  const expected =
    "On the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(9, 9), expected);
});

Deno.test("tenth day ten lords-a-leaping", () => {
  const expected =
    "On the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(10, 10), expected);
});

Deno.test("eleventh day eleven pipers piping", () => {
  const expected =
    "On the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(11, 11), expected);
});

Deno.test("twelfth day twelve drummers drumming", () => {
  const expected =
    "On the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(12, 12), expected);
});

Deno.test("recites first three verses of the song", () => {
  const expected =
    "On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\nOn the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\nOn the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(1, 3), expected);
});

Deno.test("recites three verses from the middle of the song", () => {
  const expected =
    "On the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(4, 6), expected);
});

Deno.test("recites the whole song", () => {
  const expected =
    "On the first day of Christmas my true love gave to me: a Partridge in a Pear Tree.\nOn the second day of Christmas my true love gave to me: two Turtle Doves, and a Partridge in a Pear Tree.\nOn the third day of Christmas my true love gave to me: three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the fourth day of Christmas my true love gave to me: four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the fifth day of Christmas my true love gave to me: five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the sixth day of Christmas my true love gave to me: six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the seventh day of Christmas my true love gave to me: seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the eighth day of Christmas my true love gave to me: eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the ninth day of Christmas my true love gave to me: nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the tenth day of Christmas my true love gave to me: ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the eleventh day of Christmas my true love gave to me: eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\nOn the twelfth day of Christmas my true love gave to me: twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.\n";
  assertEquals(recite(1, 12), expected);
});
