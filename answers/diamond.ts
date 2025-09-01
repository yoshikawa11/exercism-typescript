export const makeDiamond = (alphabet: string): string => {
  const start = "A".charCodeAt(0);
  const end = alphabet.charCodeAt(0);
  const size = end - start;
  const width = size * 2 + 1;
  const middle = Math.floor(width / 2);

  const makeLine = (i: number): string => {
    const row = Array(width).fill(" ");
    const char = String.fromCharCode(start + i);
    row[middle - i] = char;
    row[middle + i] = char;
    return row.join("");
  };

  const result: string[] = [];

  // 上半分
  for (let i = 0; i <= size; i++) {
    result.push(makeLine(i));
  }

  // 下半分（逆順）
  for (let i = size - 1; i >= 0; i--) {
    result.push(makeLine(i));
  }

  return result.join("\n") + "\n";
};
