export class ComplexNumber {
  real: number;
  imag: number;
  constructor(num1: number, num2: number) {
    this.real = num1;
    this.imag = num2;
  }

  add(cn: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + cn.real, this.imag + cn.imag);
  }

  sub(cn: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - cn.real, this.imag - cn.imag);
  }

  mul(cn: ComplexNumber): ComplexNumber {
    const newReal = this.real * cn.real - this.imag * cn.imag;
    const newImag = this.imag * cn.real + this.real * cn.imag;
    return new ComplexNumber(newReal, newImag);
  }

  div(cn: ComplexNumber): ComplexNumber {
    const newReal = (this.real * cn.real + this.imag * cn.imag) /
      (Math.pow(cn.real, 2) + Math.pow(cn.imag, 2));
    const newImag = (this.imag * cn.real - this.real * cn.imag) /
      (Math.pow(cn.real, 2) + Math.pow(cn.imag, 2));
    return new ComplexNumber(newReal, newImag);
  }
  get abs(): number {
    return Math.hypot(this.real, this.imag);
  }

  get conj(): ComplexNumber {
    return new ComplexNumber(this.real, -this.imag);
  }

  get exp(): ComplexNumber {
    const expReal = Math.exp(this.real);
    return new ComplexNumber(
      expReal * Math.cos(this.imag),
      expReal * Math.sin(this.imag),
    );
  }
}
