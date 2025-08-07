type TripletOptions = {
  minFactor?: number;
  maxFactor?: number;
  sum: number;
};

class Triplet {
  constructor(private a: number, private b: number, private c: number) {}

  toArray(): [number, number, number] {
    return [this.a, this.b, this.c];
  }
}

export function triplets(
  { minFactor = 1, maxFactor, sum }: TripletOptions,
): Triplet[] {
  const result: Triplet[] = [];
  maxFactor ??= sum;

  for (let a = minFactor; a < maxFactor; a++) {
    for (let b = a + 1; b < maxFactor; b++) {
      const c = sum - a - b;
      if (c > b && c <= maxFactor && a * a + b * b === c * c) {
        result.push(new Triplet(a, b, c));
      }
    }
  }

  return result;
}
