export class GameOfLife {
  matrix: number[][];
  constructor(matrix: number[][]) {
    this.matrix = matrix;
  }
  tick(): void {
    const newMatrix = this.matrix.map((row, i) =>
      row.map((_, j) => changeCell(this.matrix, i, j))
    );
    this.matrix = newMatrix;
  }
  state(): number[][] {
    return this.matrix;
  }
}

function changeCell(
  matrix: number[][],
  index1: number,
  index2: number,
): number {
  const cell = matrix[index1][index2];
  const countAlive = countAliveCell(matrix, index1, index2);
  if (cell === 1) {
    if (countAlive === 2 || countAlive === 3) return 1;
  } else {
    if (countAlive === 3) return 1;
  }
  return 0; // dead cell
}
function countAliveCell(
  matrix: number[][],
  index1: number,
  index2: number,
): number {
  const directions: number[][] = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];
  let count = 0;
  for (const [dx, dy] of directions) {
    const x = dx + index1;
    const y = dy + index2;
    if (x < 0 || x >= matrix.length || y < 0 || y >= matrix[0].length) continue;
    if (matrix[x][y] === 1) count++;
  }
  return count;
}
