export const answer = (question: string): number => {
  const lastLetter = question.charAt(question.length - 1);
  const words = question.slice(0, question.length - 1).split(" ");
  console.log(words, lastLetter);
  if (
    words[0] !== "What" || words[1] !== "is" || lastLetter !== "?"
  ) {
    throw new Error("Non-math questions");
  }
  let isPreviousNumber = false;
  let operation = "";
  let answer = 0;
  for (let i = 2; i < words.length; i = i + 1) {
    if (!isNaN(Number(words[i]))) {
      const currentNumber = Number(words[i]);
      if (isPreviousNumber) {
        throw new Error("Word problems with invalid syntax");
      }
      isPreviousNumber = true;
      if (operation === "") answer = currentNumber;
      if (operation === "add") answer = answer + currentNumber;
      if (operation === "substraction") answer = answer - currentNumber;
      if (operation === "multiplication") answer = answer * currentNumber;
      if (operation === "division") answer = answer / currentNumber;
    } else {
      if (!isPreviousNumber) {
        throw new Error("Word problems with invalid syntax");
      }
      isPreviousNumber = false;
      const isValidOp = (str: string): [boolean, string] => {
        switch (str) {
          case "plus":
            return [true, "add"];
          case "minus":
            return [true, "substraction"];
          case "multiplied":
            if (words[i + 1] !== "by") {
              throw new Error("Word problems with invalid syntax");
            }
            i = i + 1;
            return [true, "multiplication"];
          case "divided":
            if (words[i + 1] !== "by") {
              throw new Error("Word problems with invalid syntax");
            }
            i = i + 1;
            return [true, "division"];
          default:
            throw new Error("Unsupported operations");
        }
      };
      const result = isValidOp(words[i]);
      if (!result[0]) throw new Error("Non-math questions");
      operation = result[1];
    }
  }

  return answer;
};
