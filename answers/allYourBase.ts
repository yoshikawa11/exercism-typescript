export const convert = (
  array: number[],
  fromBase: number,
  toBase: number,
): number[] => {
  validate(array, fromBase, toBase);

  // 特殊ケース: [0]
  if (array.length === 1 && array[0] === 0) return [0];

  const decimalValue = toDecimal(array, fromBase);
  return fromDecimal(decimalValue, toBase);
};

const toDecimal = (array: number[], fromBase: number): number =>
  array.reduce(
    (acc, digit) => acc * fromBase + digit,
    0,
  );

const fromDecimal = (value: number, toBase: number): number[] => {
  const digits: number[] = [];
  let n = value;

  while (n > 0) {
    digits.push(n % toBase);
    n = Math.floor(n / toBase);
  }

  return digits.reverse();
};

const validate = (
  array: number[],
  fromBase: number,
  toBase: number,
): void => {
  if (!Number.isInteger(fromBase) || fromBase < 2) {
    throw new Error("Wrong input base");
  }
  if (!Number.isInteger(toBase) || toBase < 2) {
    throw new Error("Wrong output base");
  }
  if (array.length === 0) {
    throw new Error("Input has wrong format");
  }
  if (array.length > 1 && array[0] === 0) {
    throw new Error("Input has wrong format");
  }
  if (array.some((digit) => digit < 0 || digit >= fromBase)) {
    throw new Error("Input has wrong format");
  }
  if (array.length !== 1 && array.every((digit) => digit === 0)) {
    throw new Error("Input has wrong format");
  }
};
