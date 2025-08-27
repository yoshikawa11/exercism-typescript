export function solve(puzzle: string): Record<string, number> | undefined {
  // 1. 式を分割
  const [lhs, rhs] = puzzle.split("==").map((s) => s.trim());
  const words = lhs.split("+").map((s) => s.trim()).concat(rhs);

  // 2. 文字を収集
  const letters = Array.from(new Set(puzzle.replace(/[^A-Z]/g, "")));
  if (letters.length > 10) throw new Error("Too many letters");

  // 3. 先頭文字は0禁止
  const leading = new Set(words.map((w) => w[0]));

  // 4. 再帰探索
  function* permute(
    remaining: number[],
    assigned: Record<string, number> = {},
  ): Generator<Record<string, number>> {
    if (Object.keys(assigned).length === letters.length) {
      yield assigned;
      return;
    }
    const nextLetter = letters[Object.keys(assigned).length];
    for (const d of remaining) {
      if (d === 0 && leading.has(nextLetter)) continue;
      yield* permute(remaining.filter((x) => x !== d), {
        ...assigned,
        [nextLetter]: d,
      });
    }
  }

  // 5. 割当ごとに評価
  for (const mapping of permute([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
    const values = words.map((w) =>
      Number(w.split("").map((ch) => mapping[ch]).join(""))
    );
    const sum = values.slice(0, -1).reduce((a, b) => a + b, 0);
    if (sum === values[values.length - 1]) {
      return mapping;
    }
  }
  return undefined;
}
