export const eggCount = (num: number): number => {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error("Input must be a non-negative integer");
  }

  let count = 0;
  let n = num;

  while (n > 0) {
    n &= n - 1;
    count++;
  }

  return count;
};
