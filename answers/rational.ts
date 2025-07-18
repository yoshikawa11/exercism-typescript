export class Rational {
  numerator: number;
  denominator: number;

  constructor(num: number, deno: number) {
    const { numerator, denominator } = Rational.normalize(num, deno);
    this.numerator = numerator;
    this.denominator = denominator;
  }

  static normalize(
    num: number,
    deno: number,
  ): { numerator: number; denominator: number } {
    if (deno === 0) throw new Error("Denominator cannot be zero");

    // 正規化: 符号を分子に寄せて、約分
    const sign = deno < 0 ? -1 : 1;
    const gcd = Rational.gcd(num, deno);
    return {
      numerator: (num / gcd) * sign,
      denominator: Math.abs(deno / gcd),
    };
  }

  abs(): Rational {
    return new Rational(Math.abs(this.numerator), this.denominator);
  }

  add(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator + this.denominator * r.numerator,
      this.denominator * r.denominator,
    );
  }

  sub(r: Rational): Rational {
    return new Rational(
      this.numerator * r.denominator - this.denominator * r.numerator,
      this.denominator * r.denominator,
    );
  }

  mul(r: Rational): Rational {
    return new Rational(
      this.numerator * r.numerator,
      this.denominator * r.denominator,
    );
  }

  div(r: Rational): Rational {
    if (r.numerator === 0) throw new Error("Division by zero");
    return new Rational(
      this.numerator * r.denominator,
      this.denominator * r.numerator,
    );
  }

  // 整数べき乗（rational^n）
  exprational(n: number): Rational {
    if (n >= 0) {
      return new Rational(
        this.numerator ** n,
        this.denominator ** n,
      );
    } else {
      return new Rational(
        this.denominator ** -n,
        this.numerator ** -n,
      );
    }
  }

  // 有理数^実数 = Math.pow(rational as float, n)
  expreal(n: number): number {
    return Math.pow(this.numerator / this.denominator, n);
  }

  // 実数^有理数 = Math.pow(base, numerator / denominator)
  static expRational(base: number, r: Rational): number {
    return Math.pow(base, r.numerator / r.denominator);
  }

  equals(other: Rational): boolean {
    return (
      this.numerator === other.numerator &&
      this.denominator === other.denominator
    );
  }

  // JavaScriptで数値として使うときに必要
  valueOf(): number {
    return this.numerator / this.denominator;
  }

  private static gcd(a: number, b: number): number {
    return b === 0 ? Math.abs(a) : Rational.gcd(b, a % b);
  }
}
