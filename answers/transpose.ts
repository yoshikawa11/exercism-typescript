export function transpose(lines: string[]): string[] {
  const maxLen = Math.max(0, ...lines.map((line) => line.length));
  const result: string[] = [];

  for (let i = 0; i < maxLen; i++) {
    const row = lines.map((line) => line[i] ?? " ").join("");
    result.push(row);
  }

  // 最後の行だけ末尾のスペースを削除する
  if (result.length > 0) {
    result[result.length - 1] = result[result.length - 1].trimEnd();
  }

  return result;
}
