export class LinkedList<T> {
  private list: T[] = [];

  public push(element: T): void {
    this.list.push(element);
  }

  public pop(): T | null {
    return this.list.length === 0 ? null : this.list.pop() ?? null;
  }

  public unshift(element: T): void {
    this.list.unshift(element);
  }

  public shift(): T | null {
    return this.list.length === 0 ? null : this.list.shift() ?? null;
  }

  public count(): number {
    return this.list.length;
  }

  public delete(element: T): void {
    const index = this.list.indexOf(element);
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }
}
