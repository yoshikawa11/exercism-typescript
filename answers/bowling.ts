export class Bowling {
  private rolls: number[] = [];

  private static readonly MAX_PINS = 10;
  private static readonly MAX_FRAMES = 10;

  private static readonly ERRORS = {
    NEGATIVE: "Negative roll is invalid",
    TOO_MANY_PINS: "Pin count exceeds pins on the lane",
    GAME_OVER: "Cannot roll after game is over",
    INCOMPLETE: "Score cannot be taken until the end of the game",
  };

  public roll(pins: number): void {
    if (pins < 0) throw new Error(Bowling.ERRORS.NEGATIVE);
    if (pins > Bowling.MAX_PINS) throw new Error(Bowling.ERRORS.TOO_MANY_PINS);
    if (this.isGameComplete()) throw new Error(Bowling.ERRORS.GAME_OVER);

    this.rolls.push(pins);
    this.validateRolls();
  }

  public score(): number {
    if (!this.isGameComplete()) {
      throw new Error(Bowling.ERRORS.INCOMPLETE);
    }

    let score = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < Bowling.MAX_FRAMES; frame++) {
      if (this.isStrike(rollIndex)) {
        score += Bowling.MAX_PINS + this.strikeBonus(rollIndex);
        rollIndex += 1;
      } else if (this.isSpare(rollIndex)) {
        score += Bowling.MAX_PINS + this.spareBonus(rollIndex);
        rollIndex += 2;
      } else {
        score += this.sumOfBallsInFrame(rollIndex);
        rollIndex += 2;
      }
    }
    return score;
  }

  private validateRolls(): void {
    let rollIndex = 0;

    // 各フレームごとの通常チェック
    for (let frame = 0; frame < Bowling.MAX_FRAMES; frame++) {
      if (this.rolls[rollIndex] === undefined) return;

      if (this.isStrike(rollIndex)) {
        rollIndex += 1;
      } else {
        const first = this.rolls[rollIndex];
        const second = this.rolls[rollIndex + 1];
        if (second !== undefined && first + second > Bowling.MAX_PINS) {
          throw new Error(Bowling.ERRORS.TOO_MANY_PINS);
        }
        rollIndex += 2;
      }
    }

    this.validateTenthFrame(rollIndex);
  }

  private validateTenthFrame(rollIndex: number): void {
    const start = rollIndex - (this.isStrike(rollIndex - 1) ? 1 : 2);
    if (start < 0 || start >= this.rolls.length) return;

    const tenth = this.rolls.slice(start);
    if (tenth.length < 2) return;

    if (this.isStrike(start)) {
      // 例: [10, x, y]
      if (tenth.length >= 3) {
        const [, b1, b2] = tenth;
        if (b1 !== Bowling.MAX_PINS && b1 + b2 > Bowling.MAX_PINS) {
          throw new Error(Bowling.ERRORS.TOO_MANY_PINS);
        }
      }
    } else if (this.isSpare(start)) {
      // 例: [7, 3, x]
      if (tenth.length >= 3 && tenth[2] > Bowling.MAX_PINS) {
        throw new Error(Bowling.ERRORS.TOO_MANY_PINS);
      }
    }
  }

  private isGameComplete(): boolean {
    let rollIndex = 0;
    let frame = 0;

    while (frame < Bowling.MAX_FRAMES && rollIndex < this.rolls.length) {
      rollIndex += this.isStrike(rollIndex) ? 1 : 2;
      frame++;
    }
    if (frame < Bowling.MAX_FRAMES) return false;

    // --- 10フレーム目のボーナス処理 ---
    const lastStart = rollIndex - (this.isStrike(rollIndex - 1) ? 1 : 2);
    const last = this.rolls.slice(lastStart);

    if (this.isStrike(lastStart) || this.isSpare(lastStart)) {
      return last.length >= 3;
    }
    return last.length >= 2;
  }

  private isStrike(rollIndex: number): boolean {
    return this.rolls[rollIndex] === Bowling.MAX_PINS;
  }

  private isSpare(rollIndex: number): boolean {
    return (
      (this.rolls[rollIndex] ?? 0) + (this.rolls[rollIndex + 1] ?? 0) ===
        Bowling.MAX_PINS
    );
  }

  private strikeBonus(rollIndex: number): number {
    return (this.rolls[rollIndex + 1] ?? 0) + (this.rolls[rollIndex + 2] ?? 0);
  }

  private spareBonus(rollIndex: number): number {
    return this.rolls[rollIndex + 2] ?? 0;
  }

  private sumOfBallsInFrame(rollIndex: number): number {
    return (this.rolls[rollIndex] ?? 0) + (this.rolls[rollIndex + 1] ?? 0);
  }
}
