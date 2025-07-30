export const steps = (num: number): number => {
  if (num <= 0 || !Number.isInteger(num)) {
    throw new Error("Only positive numbers are allowed");
  }

  let count = 0;

  while (num !== 1) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return count;
};
