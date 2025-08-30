export const calculatePrimeFactors = (num: number): number[] => {
  if (num < 2) return [];

  const result: number[] = [];
  let divisor = 2;

  while (num > 1) {
    while (num % divisor === 0) {
      result.push(divisor);
      num /= divisor;
    }
    divisor++;
    // num が divisor^2 より小さくなったら残りは素数
    if (divisor * divisor > num && num > 1) {
      result.push(num);
      break;
    }
  }

  return result;
};
