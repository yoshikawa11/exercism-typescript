export class Squares {
  squareOfSum: number;
  sumOfSquares: number;
  difference: number;
  constructor(num: number) {
    this.squareOfSum = Math.pow(this.getSum(num), 2);
    this.sumOfSquares = this.getSumOfSquares(num);
    this.difference = this.squareOfSum - this.sumOfSquares;
  }

  getSum(num: number): number {
    return (1 + num) * num / 2;
  }

  getSumOfSquares(num: number): number {
    let answer = 0;
    for (let i = 1; i <= num; i++) {
      answer += Math.pow(i, 2);
    }
    return answer;
  }
}
