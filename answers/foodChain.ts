export function verse(n: number): string {
  const animals = [
    { name: "fly", extra: "" },
    {
      name: "spider",
      extra: "It wriggled and jiggled and tickled inside her.",
    },
    { name: "bird", extra: "How absurd to swallow a bird!" },
    { name: "cat", extra: "Imagine that, to swallow a cat!" },
    { name: "dog", extra: "What a hog, to swallow a dog!" },
    { name: "goat", extra: "Just opened her throat and swallowed a goat!" },
    { name: "cow", extra: "I don't know how she swallowed a cow!" },
    { name: "horse", extra: "She's dead, of course!" },
  ];

  const idx = n - 1;
  const animal = animals[idx];
  const lines: string[] = [];

  lines.push(`I know an old lady who swallowed a ${animal.name}.`);
  if (animal.extra) {
    lines.push(animal.extra);
  }

  if (animal.name === "horse") {
    return lines.join("\n") + "\n";
  }

  for (let i = idx; i > 0; i--) {
    const cur = animals[i];
    const prev = animals[i - 1];
    if (cur.name === "bird") {
      lines.push(
        `She swallowed the ${cur.name} to catch the ${prev.name} that wriggled and jiggled and tickled inside her.`,
      );
    } else if (cur.name === "spider") {
      lines.push(`She swallowed the ${cur.name} to catch the ${prev.name}.`);
    } else if (prev.name === "spider") {
      lines.push(
        `She swallowed the ${cur.name} to catch the ${prev.name} that wriggled and jiggled and tickled inside her.`,
      );
    } else {
      lines.push(`She swallowed the ${cur.name} to catch the ${prev.name}.`);
    }
  }

  lines.push("I don't know why she swallowed the fly. Perhaps she'll die.");

  return lines.join("\n") + "\n";
}

export function verses(start: number, end: number): string {
  const all: string[] = [];
  for (let i = start; i <= end; i++) {
    all.push(verse(i));
  }
  return all.join("\n");
}
