export class Series {
  private readonly sequence: string;

  constructor(sequence: string) {
    if (!sequence) {
      throw new Error("series cannot be empty");
    }
    this.sequence = sequence;
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength < 0) throw new Error("slice length cannot be negative");
    if (sliceLength === 0) throw new Error("slice length cannot be zero");
    if (sliceLength > this.sequence.length) {
      throw new Error("slice length cannot be greater than series length");
    }

    const { sequence } = this;
    const result: number[][] = [];

    for (let i = 0; i <= sequence.length - sliceLength; i++) {
      result.push(
        Array.from(sequence.slice(i, i + sliceLength), (ch) => Number(ch)),
      );
    }
    return result;
  }
}
