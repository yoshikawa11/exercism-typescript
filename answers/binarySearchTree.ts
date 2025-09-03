export class BinarySearchTree {
  data: number;
  left: BinarySearchTree | null = null;
  right: BinarySearchTree | null = null;

  constructor(num: number) {
    this.data = num;
  }

  insert(value: number): void {
    const child = value <= this.data ? "left" : "right";
    if (this[child]) {
      this[child]!.insert(value);
    } else {
      this[child] = new BinarySearchTree(value);
    }
  }

  each(callback: (data: number) => void): void {
    this.left?.each(callback);
    callback(this.data);
    this.right?.each(callback);
  }
}
