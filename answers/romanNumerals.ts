const ROMAN_ENTRIES_DESC = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
] as const;

export const toRoman = (num: number): string => {
  if (num < 1 || num > 3999) {
    throw new RangeError("Input must be between 1 and 3999.");
  }
  const result: string[] = [];

  for (const [unit, romanNumber] of ROMAN_ENTRIES_DESC) {
    const count = Math.floor(num / unit);
    if (count > 0) {
      result.push(romanNumber.repeat(count));
      num -= unit * count;
    }
  }
  return result.join("");
};
