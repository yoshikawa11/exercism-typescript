export class Triangle {
  private a: number;
  private b: number;
  private c: number;

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  private isValid(): boolean {
    const { a, b, c } = this;
    if (a <= 0 || b <= 0 || c <= 0) return false;
    return a + b > c && b + c > a && c + a > b;
  }

  isTriangle(): boolean {
    return this.isValid();
  }

  isEquilateral(): boolean {
    const { a, b, c } = this;
    return this.isValid() && a === b && b === c;
  }

  isIsosceles(): boolean {
    const { a, b, c } = this;
    return this.isValid() && (a === b || b === c || a === c);
  }

  isScalene(): boolean {
    const { a, b, c } = this;
    return this.isValid() && a !== b && b !== c && a !== c;
  }
}
