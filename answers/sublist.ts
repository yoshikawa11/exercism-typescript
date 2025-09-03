export class List {
  list: number[];

  constructor(...args: number[]) {
    this.list = args;
  }

  compare(otherList: List): string {
    const list = this.list;
    const other = otherList.list;
    const lenList = list.length;
    const lenOther = other.length;

    if (lenList === lenOther) {
      return arraysEqual(list, other) ? "equal" : "unequal";
    }
    if (lenList === 0) return "sublist";
    if (lenOther === 0) return "superlist";

    if (lenList > lenOther) {
      return slidingWindow(list, lenOther).some((win) =>
          arraysEqual(win, other)
        )
        ? "superlist"
        : "unequal";
    } else {
      return slidingWindow(other, lenList).some((win) => arraysEqual(win, list))
        ? "sublist"
        : "unequal";
    }
  }
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
  return arr1.length === arr2.length && arr1.every((v, i) => v === arr2[i]);
}

// スライディングウィンドウ
function slidingWindow<T>(arr: T[], size: number): T[][] {
  return Array.from(
    { length: arr.length - size + 1 },
    (_, i) => arr.slice(i, i + size),
  );
}
