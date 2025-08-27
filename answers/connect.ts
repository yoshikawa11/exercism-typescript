const neighbours: [number, number][] = [
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
];

export class Board {
  private board: string[][];
  private _winner: "X" | "O" | "";

  constructor(lines: string[]) {
    this.board = lines.map((line) => line.trim().split(" "));

    this._winner = this.checkWinner();
  }

  public winner(): "X" | "O" | "" {
    return this._winner;
  }

  private checkWinner(): "X" | "O" | "" {
    const rows = this.board.length;
    const cols = this.board[0].length;

    // X: 左から右
    for (let i = 0; i < rows; i++) {
      if (this.hasPath("X", i, 0)) return "X";
    }

    // O: 上から下
    for (let j = 0; j < cols; j++) {
      if (this.hasPath("O", 0, j)) return "O";
    }

    return "";
  }

  private hasPath(symbol: "X" | "O", startX: number, startY: number): boolean {
    if (this.board[startX][startY] !== symbol) return false;

    const rows = this.board.length;
    const cols = this.board[0].length;
    const visited: boolean[][] = Array.from(
      { length: rows },
      () => Array(cols).fill(false),
    );

    const stack: [number, number][] = [[startX, startY]];
    visited[startX][startY] = true;

    while (stack.length > 0) {
      const [x, y] = stack.pop()!;

      if (
        (symbol === "X" && y === cols - 1) || (symbol === "O" && x === rows - 1)
      ) {
        return true;
      }

      for (const [dx, dy] of neighbours) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 && nx < rows &&
          ny >= 0 && ny < cols &&
          !visited[nx][ny] &&
          this.board[nx][ny] === symbol
        ) {
          visited[nx][ny] = true;
          stack.push([nx, ny]);
        }
      }
    }

    return false;
  }
}
