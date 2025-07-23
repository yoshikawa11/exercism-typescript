export class List<T> {
  private elements: T[];

  private constructor(elements: T[]) {
    this.elements = elements;
  }

  static create<T>(...args: T[]): List<T> {
    return new List<T>(args);
  }

  public append(list: List<T>): List<T> {
    const result = [...this.elements];
    for (let i = 0; i < list.elements.length; i = i + 1) {
      result[result.length] = list.elements[i];
    }
    return new List(result);
  }

  public concat(lists: List<List<T>>): List<T> {
    const result = [...this.elements];
    lists.forEach((list) => {
      for (let i = 0; i < list.elements.length; i = i + 1) {
        result[result.length] = list.elements[i];
      }
    });
    return new List(result);
  }

  public filter(callback: (item: T) => boolean): List<T> {
    const result = [];
    for (let i = 0; i < this.elements.length; i++) {
      if (callback(this.elements[i])) result[result.length] = this.elements[i];
    }
    return new List(result);
  }

  public map(callback: (item: T) => T): List<T> {
    const result = [];
    for (let i = 0; i < this.elements.length; i++) {
      result[result.length] = callback(this.elements[i]);
    }
    return new List(result);
  }

  public foldl<U>(callback: (acc: U, item: T) => U, initial: U): U {
    let acc = initial;
    for (let i = 0; i < this.elements.length; i++) {
      acc = callback(acc, this.elements[i]);
    }
    return acc;
  }

  public foldr<U>(callback: (item: T, acc: U) => U, initial: U): U {
    let acc = initial;
    for (let i = this.elements.length - 1; i >= 0; i--) {
      acc = callback(this.elements[i], acc);
    }
    return acc;
  }

  public reverse(): List<T> {
    const result = [];
    for (let i = this.elements.length - 1; i >= 0; i--) {
      result[result.length] = this.elements[i];
    }
    return new List(result);
  }

  public forEach(callback: (item: T) => void): void {
    for (let i = 0; i < this.elements.length; i++) {
      callback(this.elements[i]);
    }
  }

  toArray(): T[] {
    return [...this.elements];
  }
}
