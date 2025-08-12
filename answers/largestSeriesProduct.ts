export const largestProduct = (
  sequence: string,
  sliceLength: number,
): number => {
  validate(sequence, sliceLength);

  // スパンが0の場合、積は常に空積＝1
  if (sliceLength === 0) {
    return 1;
  }

  let maxProduct = Number.NEGATIVE_INFINITY;

  for (let i = 0; i <= sequence.length - sliceLength; i++) {
    let product = 1;
    for (let j = 0; j < sliceLength; j++) {
      product *= Number(sequence[i + j]);
    }
    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};

function validate(sequence: string, sliceLength: number): void {
  if (sliceLength < 0) {
    throw new Error("Span must not be negative");
  }
  if (sequence.length < sliceLength) {
    throw new Error("Span must be smaller than string length");
  }
  if (!/^\d*$/.test(sequence)) {
    throw new Error("Digits input must only contain digits");
  }
}
