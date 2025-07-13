export class Matrix {
  private readonly _rows: number[][];
  private readonly _columns: number[][];

  constructor(input: string) {
    // 副作用なしの純粋関数を呼んで初期化
    this._rows = parseRows(input);
    this._columns = transpose(this._rows);
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}

// 純粋関数: 入力文字列 → rows
const parseRows = (input: string): number[][] =>
  input
    .trim()
    .split('\n')
    .map(line =>
      line.trim().split(/\s+/).map(Number)
    );

// 純粋関数: 行配列 → 列配列（転置）
const transpose = <T>(matrix: T[][]): T[][] =>
  matrix[0].map((_, colIndex) =>
    matrix.map(row => row[colIndex])
  );
