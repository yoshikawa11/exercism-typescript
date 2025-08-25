// 各数字のOCRパターン（3列 x 4行）を定義
const OCR_DIGITS: Record<string, string> = {
  " _ | ||_|   ": "0",
  "     |  |   ": "1",
  " _  _||_    ": "2",
  " _  _| _|   ": "3",
  "   |_|  |   ": "4",
  " _ |_  _|   ": "5",
  " _ |_ |_|   ": "6",
  " _   |  |   ": "7",
  " _ |_||_|   ": "8",
  " _ |_| _|   ": "9",
};

/**
 * 入力文字列をOCRで数値に変換
 */
export function convert(input: string): string {
  const lines = input.split("\n");

  // 入力検証
  if (lines.length % 4 !== 0) {
    throw new Error("invalid input");
  }
  if (lines.some((line) => line.length % 3 !== 0)) {
    throw new Error("invalid input");
  }

  // 入力は4行ごとのブロック
  const blocks: string[][] = [];
  for (let i = 0; i < lines.length; i += 4) {
    blocks.push(lines.slice(i, i + 4));
  }

  return blocks
    .map((block) => parseBlock(block))
    .join(",");
}

/**
 * 1ブロック（4行分）をパースして数字列に変換
 */
function parseBlock(block: string[]): string {
  // 行の長さを揃える（不足分はスペース）
  const maxLen = Math.max(...block.map((line) => line.length));
  const padded = block.map((line) => line.padEnd(maxLen, " "));

  const digits: string[] = [];

  for (let col = 0; col < maxLen; col += 3) {
    let pattern = "";
    for (let row = 0; row < 4; row++) {
      pattern += padded[row].slice(col, col + 3);
    }
    digits.push(OCR_DIGITS[pattern] ?? "?");
  }

  return digits.join("");
}
