export const transform = (
  input: { [key: string]: string[] },
): { [key: string]: number } => {
  const result: { [key: string]: number } = {};

  for (const [point, letters] of Object.entries(input)) {
    const score = Number(point);
    for (const letter of letters) {
      result[letter.toLowerCase()] = score;
    }
  }

  return result;
};
