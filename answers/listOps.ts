export class List<T> {
  list: T[] = [];
  static create<T>(...args: T[]): List<T> {
    const newList = new List<T>();
    for (let i = 0; i < args.length; i++) {
      newList.list[newList.list.length] = args[i];
    }
    return newList;
  }
  public forEach(callback: (item: T, index: number) => void): void {
    for (let i = 0; i < this.list.length; i++) {
      callback(this.list[i], i);
    }
  }
}

// 動作確認
function main() {
  console.log(List.create());
  const test = List.create(1, 3, 4);
  test.forEach((i) => console.log(i));
}

main();
