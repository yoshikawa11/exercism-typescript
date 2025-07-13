export function hey(input: string): string {
  const str = input.trimEnd();

  if (isSilence(str)) return "Fine. Be that way!";
  if (isShouting(str) && isQuestion(str)) {
    return "Calm down, I know what I'm doing!";
  }
  if (isShouting(str)) return "Whoa, chill out!";
  if (isQuestion(str)) return "Sure.";
  return "Whatever.";
}

const isQuestion = (str: string): boolean => str.endsWith("?");

const isShouting = (str: string): boolean => {
  const letters = str.split("").filter(isLetter);
  return letters.length > 0 && letters.every(isUpperCase);
};

const isSilence = (str: string): boolean => str === "";

const isLetter = (c: string): boolean => /[a-zA-Z]/.test(c);

const isUpperCase = (c: string): boolean => c === c.toUpperCase();
