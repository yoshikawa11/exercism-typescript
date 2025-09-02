export class Triangle {
  private lists: number[][];

  constructor(num: number) {
    this.lists = [];
    for (let i = 0; i < num; i++) {
      this.lists.push(this.buildRow(i));
    }
  }

  private buildRow(rowIndex: number): number[] {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];

    const prev = this.lists[rowIndex - 1];
    const row = [1];

    for (let j = 1; j < rowIndex; j++) {
      row.push(prev[j - 1] + prev[j]);
    }

    row.push(1);
    return row;
  }

  get rows(): number[][] {
    return this.lists;
  }

  get lastRow(): number[] {
    return this.lists[this.lists.length - 1];
  }
}
