const UNITS: [number, string][] = [
  [1_000_000_000, "billion"],
  [1_000_000, "million"],
  [1_000, "thousand"],
  [100, "hundred"],
  [90, "ninety"],
  [80, "eighty"],
  [70, "seventy"],
  [60, "sixty"],
  [50, "fifty"],
  [40, "forty"],
  [30, "thirty"],
  [20, "twenty"],
  [19, "nineteen"],
  [18, "eighteen"],
  [17, "seventeen"],
  [16, "sixteen"],
  [15, "fifteen"],
  [14, "fourteen"],
  [13, "thirteen"],
  [12, "twelve"],
  [11, "eleven"],
  [10, "ten"],
  [9, "nine"],
  [8, "eight"],
  [7, "seven"],
  [6, "six"],
  [5, "five"],
  [4, "four"],
  [3, "three"],
  [2, "two"],
  [1, "one"],
  [0, "zero"], // 0 は特別扱い
];

export function sayInEnglish(num: number): string {
  if (num < 0 || num > 999_999_999_999) {
    throw new Error("Number must be between 0 and 999,999,999,999.");
  }
  if (num === 0) return "zero";

  const parts: string[] = [];

  function helper(n: number): void {
    for (const [value, name] of UNITS) {
      if (n >= value) {
        if (value >= 100) {
          const count = Math.floor(n / value);
          helper(count);
          parts.push(name);
        } else if (value >= 20) {
          parts.push(name);
        } else {
          parts.push(name);
        }
        n = n % value;
        if (n === 0) break;
        if (value < 100 && n < 10) {
          // 20～99 の十の位と一の位はハイフン
          parts[parts.length - 1] += `-${UNITS.find((u) => u[0] === n)![1]}`;
          break;
        }
      }
    }
  }

  helper(num);
  return parts.join(" ");
}
