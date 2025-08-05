export function classify(num: number): string {
  if (num < 1) {
    throw new Error("Classification is only possible for natural numbers.");
  }

  const sum = sumArray(getProperDivisors(num));

  if (sum === num) return "perfect";
  if (sum > num) return "abundant";
  return "deficient";
}

function getProperDivisors(num: number): number[] {
  const divisors: number[] = [];
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
}

function sumArray(nums: number[]): number {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
