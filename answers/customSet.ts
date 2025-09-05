export class CustomSet<T> {
  private items: T[];

  constructor(values: T[] = []) {
    this.items = [...values];
  }
  empty(): boolean {
    return this.items.length === 0;
  }
  contains(value: T): boolean {
    return this.items.includes(value);
  }
}
