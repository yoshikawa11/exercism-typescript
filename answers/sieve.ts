export const primes = (num: number): number[] => {
  if (num < 2) return [];

  const isPrime = new Array<boolean>(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime
    .map((p, i) => (p ? i : -1))
    .filter((i) => i !== -1);
};
