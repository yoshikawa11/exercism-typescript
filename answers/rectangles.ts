export function count(grid: string[]): number {
  if (grid.length === 0 || grid.every((row) => row.length === 0)) return 0;

  const rows = grid.length;

  // 補助関数：水平線があるか
  function hasHorizontal(y: number, x1: number, x2: number): boolean {
    for (let x = x1 + 1; x < x2; x++) {
      if ((grid[y][x] ?? " ") !== "-" && (grid[y][x] ?? " ") !== "+") {
        return false;
      }
    }
    return true;
  }

  // 補助関数：垂直線があるか
  function hasVertical(x: number, y1: number, y2: number): boolean {
    for (let y = y1 + 1; y < y2; y++) {
      if ((grid[y][x] ?? " ") !== "|" && (grid[y][x] ?? " ") !== "+") {
        return false;
      }
    }
    return true;
  }

  // + の位置を列挙
  const pluses: [number, number][] = [];
  for (let y = 0; y < rows; y++) {
    const row = grid[y];
    for (let x = 0; x < row.length; x++) {
      if (row[x] === "+") pluses.push([y, x]);
    }
  }

  let countRect = 0;

  // 2つの + を左上と右下として長方形を作れるか判定
  for (let i = 0; i < pluses.length; i++) {
    const [y1, x1] = pluses[i];
    for (let j = i + 1; j < pluses.length; j++) {
      const [y2, x2] = pluses[j];
      if (y2 <= y1 || x2 <= x1) continue; // 左上、右下の条件
      // 右上と左下に + があるか
      if ((grid[y1][x2] ?? " ") !== "+" || (grid[y2][x1] ?? " ") !== "+") {
        continue;
      }
      // 上下の水平線と左右の垂直線が揃っているか
      if (
        hasHorizontal(y1, x1, x2) &&
        hasHorizontal(y2, x1, x2) &&
        hasVertical(x1, y1, y2) &&
        hasVertical(x2, y1, y2)
      ) {
        countRect++;
      }
    }
  }

  return countRect;
}
