interface Response {
  [key: string]: {
    start: number[];
    end: number[];
  } | undefined;
}

export class WordSearch {
  private grid: string[][];
  private directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];

  constructor(grid: string[]) {
    // "ABC" → ["A","B","C"] にして2D配列化
    this.grid = grid.map((row) => row.split(""));
  }

  public find(words: string[]): Response {
    const response: Response = {};

    for (const word of words) {
      response[word] = undefined; // 先にundefinedで初期化
      let found = false;

      for (let row = 0; row < this.grid.length && !found; row++) {
        for (let col = 0; col < this.grid[row].length; col++) {
          if (word[0] !== this.grid[row][col]) continue;

          const wordFound = this.recursiveFindWord(word, row, col);
          if (wordFound) {
            response[word] = {
              start: [row + 1, col + 1],
              end: [wordFound[0] + 1, wordFound[1] + 1],
            };
            found = true; // この単語は見つかったので次の単語へ
            break;
          }
        }
      }
    }

    return response;
  }

  private recursiveFindWord(
    word: string,
    row: number,
    col: number,
    position = 0,
    direction = -1,
  ): false | number[] {
    // 盤面外チェック & 一致判定
    if (this.grid[row]?.[col] !== word[position]) return false;
    if (position === word.length - 1) return [row, col];

    for (const [i, [dr, dc]] of this.directions.entries()) {
      if (direction > -1 && direction !== i) continue;

      const next = this.recursiveFindWord(
        word,
        row + dr,
        col + dc,
        position + 1,
        i,
      );
      if (next) return next;
    }

    return false;
  }
}
