export class QueenAttack {
  private static readonly BOARD_SIZE = 8;
  private static readonly ERROR_OUT_OF_BOARD =
    "Queen must be placed on the board";
  private static readonly ERROR_SAME_SPACE =
    "Queens cannot share the same space";

  readonly white: [number, number];
  readonly black: [number, number];

  constructor(
    positions?: {
      readonly white?: readonly number[];
      readonly black?: readonly number[];
    },
  ) {
    this.white = positions?.white
      ? [...positions.white] as [number, number]
      : [7, 3];
    this.black = positions?.black
      ? [...positions.black] as [number, number]
      : [0, 3];

    QueenAttack.validate(this.white, this.black);
  }

  get canAttack(): boolean {
    const [wx, wy] = this.white;
    const [bx, by] = this.black;
    return (
      wx === bx ||
      wy === by ||
      Math.abs(wx - bx) === Math.abs(wy - by)
    );
  }

  toString(): string {
    const board = Array.from(
      { length: QueenAttack.BOARD_SIZE },
      () => Array.from({ length: QueenAttack.BOARD_SIZE }, () => "_"),
    );

    const [wx, wy] = this.white;
    board[wx][wy] = "W";

    const [bx, by] = this.black;
    board[bx][by] = "B";

    return board.map((row) => row.join(" ")).join("\n");
  }

  private static validate(
    white: [number, number],
    black: [number, number],
  ): void {
    const inBounds = ([x, y]: [number, number]) =>
      x >= 0 && x < QueenAttack.BOARD_SIZE && y >= 0 &&
      y < QueenAttack.BOARD_SIZE;

    if (!inBounds(white) || !inBounds(black)) {
      throw new Error(QueenAttack.ERROR_OUT_OF_BOARD);
    }
    if (white[0] === black[0] && white[1] === black[1]) {
      throw new Error(QueenAttack.ERROR_SAME_SPACE);
    }
  }
}
