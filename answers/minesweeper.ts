export const annotate = (board: string[]): string[] => {
  if (board.length === 0) return [];

  const rows = board.length;
  const cols = board[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const countMines = (x: number, y: number): string => {
    if (board[x][y] === "*") return "*";

    const count = directions.reduce((acc, [dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      return acc +
        (nx >= 0 && nx < rows && ny >= 0 && ny < cols && board[nx][ny] === "*"
          ? 1
          : 0);
    }, 0);

    return count > 0 ? String(count) : " ";
  };

  return board.map((row, i) =>
    row.split("").map((_, j) => countMines(i, j)).join("")
  );
};
