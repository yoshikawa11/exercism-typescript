export const sum = (factors: number[], limit: number): number => {
  const multiples = new Set<number>();

  for (const factor of factors) {
    if (factor === 0) continue;
    for (let multiple = factor; multiple < limit; multiple += factor) {
      multiples.add(multiple);
    }
  }

  let total = 0;
  for (const m of multiples) total += m;
  return total;
};
