export const nth = (num: number): number => {
  if (num <= 0) {
    throw new Error("Prime is not possible");
  }
  let count = 0;
  let inputNumber = 2;
  while (true) {
    if (isPrime(inputNumber)) {
      count++;
      if (count === num) return inputNumber;
    }
    inputNumber++;
  }
};

const isPrime = (inputNumber: number) => {
  if (inputNumber < 2) return false;
  if (inputNumber === 2) return true;
  if (inputNumber % 2 === 0) return false;

  for (let i = 3; i * i <= inputNumber; i += 2) {
    if (inputNumber % i === 0) return false;
  }
  return true;
};
