export const square = (num: number): bigint => {
  if (num < 1 || num > 64) {
    throw new RangeError("square must be between 1 and 64");
  }
  return 1n << BigInt(num - 1);
};

export const total = (): bigint => {
  return (1n << 64n) - 1n;
};
