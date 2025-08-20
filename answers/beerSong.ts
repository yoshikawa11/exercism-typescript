function bottlePhrase(count: number, capitalize = false): string {
  if (count === 0) return capitalize ? "No more bottles" : "no more bottles";
  if (count === 1) return `${count} bottle`;
  return `${count} bottles`;
}

export const verse = (num: number): string => {
  switch (num) {
    case 0:
      return [
        `${bottlePhrase(0, true)} of beer on the wall, ${
          bottlePhrase(0)
        } of beer.`,
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n",
      ].join("\n");

    case 1:
      return [
        `${bottlePhrase(1, true)} of beer on the wall, ${
          bottlePhrase(1)
        } of beer.`,
        "Take it down and pass it around, no more bottles of beer on the wall.\n",
      ].join("\n");

    default:
      return [
        `${bottlePhrase(num, true)} of beer on the wall, ${
          bottlePhrase(num)
        } of beer.`,
        `Take one down and pass it around, ${
          bottlePhrase(num - 1)
        } of beer on the wall.\n`,
      ].join("\n");
  }
};

export const sing = (from = 99, to = 0): string => {
  if (to > from) {
    throw new Error("`from` must not be smaller than `to`");
  }

  const verses: string[] = [];
  for (let i = from; i >= to; i--) {
    verses.push(verse(i));
  }
  return verses.join("\n");
};
