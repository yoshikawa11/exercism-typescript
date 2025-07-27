export const squareRoot = (n: number): number => {
  if (n < 0) throw new Error("negative not allowed");
  if (n === 0 || n === 1) return n;

  let res = 0;
  let bit = 1 << 30; // 最初に2^30を立てる（intの最大ビット）

  // 入力n以下の最大の平方数を見つける
  while (bit > n) bit >>= 2;

  while (bit !== 0) {
    if (n >= res + bit) {
      n -= res + bit;
      res = (res >> 1) + bit;
    } else {
      res >>= 1;
    }
    bit >>= 2;
  }

  return res;
};
