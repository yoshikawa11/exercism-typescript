export function count(str: string): Map<string, number> {
  const counter = new Map<string, number>();
  const normalized = str
    .toLowerCase()
    .replace(/[;:,.?`!\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  for (const raw of normalized.split(" ")) {
    if (!raw) continue;

    // 前後のアポストロフィのみ除去（中間は保持）
    const word = raw.replace(/^'+|'+$/g, "");

    if (word) {
      counter.set(word, (counter.get(word) ?? 0) + 1);
    }
  }
  return counter;
}
