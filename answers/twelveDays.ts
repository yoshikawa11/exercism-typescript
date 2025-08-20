const verses: Record<number, [string, string]> = {
  1: ["first", "a Partridge in a Pear Tree."],
  2: ["second", "two Turtle Doves"],
  3: ["third", "three French Hens"],
  4: ["fourth", "four Calling Birds"],
  5: ["fifth", "five Gold Rings"],
  6: ["sixth", "six Geese-a-Laying"],
  7: ["seventh", "seven Swans-a-Swimming"],
  8: ["eighth", "eight Maids-a-Milking"],
  9: ["ninth", "nine Ladies Dancing"],
  10: ["tenth", "ten Lords-a-Leaping"],
  11: ["eleventh", "eleven Pipers Piping"],
  12: ["twelfth", "twelve Drummers Drumming"],
};

export function recite(from: number, to: number): string {
  validate(from, to);

  const lines: string[] = [];

  for (let day = from; day <= to; day++) {
    const [ordinal] = verses[day];
    const gifts = [];

    for (let g = day; g >= 1; g--) {
      const [, phrase] = verses[g];
      if (g === 1 && day > 1) {
        gifts.push("and " + phrase);
      } else {
        gifts.push(phrase);
      }
    }

    lines.push(
      `On the ${ordinal} day of Christmas my true love gave to me: ${
        gifts.join(
          ", ",
        )
      }\n`,
    );
  }

  return lines.join("");
}

function validate(from: number, to: number): void {
  if (from > to) throw new Error("`from` must not be greater than `to`");
  if (from < 1 || from > 12 || to < 1 || to > 12) {
    throw new Error("Numbers must be between 1 and 12");
  }
}
