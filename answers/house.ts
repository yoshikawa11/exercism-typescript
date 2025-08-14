const words = [
    "malt",
    "rat",
    "cat",
    "dog",
    "cow with the crumpled horn",
    "maiden all forlorn",
    "man all tattered and torn",
    "priest all shaven and shorn",
    "rooster that crowed in the morn",
    "farmer sowing his corn",
    "horse and the hound and the horn",
  ],
  verbs = [
    "ate",
    "killed",
    "worried",
    "tossed",
    "milked",
    "kissed",
    "married",
    "woke",
    "kept",
    "belonged to",
  ];

export function verse(n: number): string[] {
  if (n === 1) {
    return ["This is the house that Jack built."];
  }

  const lyrics = ["that lay in the house that Jack built."];
  for (let i = 0; i <= n - 3; i++) {
    lyrics.unshift(`that ${verbs[i]} the ${words[i]}`);
  }
  lyrics.unshift("This is the " + words[n - 2]);

  return lyrics;
}

export function verses(start: number, end: number): string[] {
  let lyrics: string[] = [];
  for (let i = start; i <= end; i++) {
    lyrics = lyrics.concat(verse(i));
    lyrics.push("");
  }
  lyrics.pop();

  return lyrics;
}
