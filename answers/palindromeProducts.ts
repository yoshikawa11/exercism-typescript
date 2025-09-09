type Factor = [number, number];

type Palindrome = {
  value: number | null;
  factors: Factor[];
};

type GenerateOptions = {
  minFactor: number;
  maxFactor: number;
};

type GenerateResult = {
  smallest: Palindrome;
  largest: Palindrome;
};

export const generate = (options: GenerateOptions): GenerateResult => {
  const { minFactor, maxFactor } = options;
  if (minFactor > maxFactor) throw new Error("min must be <= max");

  const { smallest, largest } = findPalindromeProducts(minFactor, maxFactor);

  return { smallest, largest };
};

const findPalindromeProducts = (min: number, max: number) => {
  let smallest: Palindrome = { value: null, factors: [] };
  let largest: Palindrome = { value: null, factors: [] };

  for (let i = min; i <= max; i++) {
    for (let j = i; j <= max; j++) {
      const product = i * j;
      if (!isPalindrome(product)) continue;

      smallest = updatePalindrome(smallest, product, [i, j]);
      largest = updatePalindrome(largest, product, [i, j]);
    }
  }

  return { smallest, largest };
};

const updatePalindrome = (
  current: Palindrome,
  product: number,
  factors: Factor,
): Palindrome => {
  if (current.value === null || product < current.value) {
    return { value: product, factors: [factors] };
  } else if (product === current.value) {
    return { ...current, factors: [...current.factors, factors] };
  }
  return current;
};

const isPalindrome = (num: number): boolean => {
  const s = String(num);
  return s === s.split("").reverse().join("");
};
