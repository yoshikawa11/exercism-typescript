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

  subset(anotherSet: CustomSet<T>): boolean {
    return this.items.every((v) => anotherSet.contains(v));
  }

  disjoint(anotherSet: CustomSet<T>): boolean {
    return this.items.every((v) => !anotherSet.contains(v));
  }

  eql(anotherSet: CustomSet<T>): boolean {
    if (this.items.length !== anotherSet.items.length) return false;
    return this.subset(anotherSet); // 互いに包含していれば等しい
  }

  add(value: T): CustomSet<T> {
    if (this.contains(value)) return this;
    return new CustomSet([...this.items, value]);
  }

  intersection(anotherSet: CustomSet<T>): CustomSet<T> {
    return new CustomSet(this.items.filter((v) => anotherSet.contains(v)));
  }

  difference(anotherSet: CustomSet<T>): CustomSet<T> {
    return new CustomSet(this.items.filter((v) => !anotherSet.contains(v)));
  }

  union(anotherSet: CustomSet<T>): CustomSet<T> {
    return new CustomSet([...new Set([...this.items, ...anotherSet.items])]);
  }
}
