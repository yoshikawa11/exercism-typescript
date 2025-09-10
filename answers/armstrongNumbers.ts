export const isArmstrongNumber = (num: number | bigint): boolean => {
  const s = String(num);
  const size = BigInt(s.length);
  let sum = 0n;

  for (const ch of s) {
    const digit = BigInt(ch);
    let pow = 1n;
    for (let i = 0n; i < size; i++) {
      pow *= digit;
    }
    sum += pow;
  }

  return sum === BigInt(num);
};
