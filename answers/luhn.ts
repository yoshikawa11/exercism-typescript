export const valid = (numbers: string): boolean => {
  const formatted = numbers.replace(/\s/g, "");
  if (!/^\d+$/.test(formatted) || formatted.length <= 1) return false;

  const sum = formatted
    .split("")
    .reverse()
    .map(Number)
    .map((digit, idx) =>
      idx % 2 === 1 ? (digit * 2 > 9 ? digit * 2 - 9 : digit * 2) : digit
    )
    .reduce((acc, val) => acc + val, 0);

  return sum % 10 === 0;
};
