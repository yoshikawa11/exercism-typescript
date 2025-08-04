export const nucleotideCounts = (
  str: string,
): { [key: string]: number } => {
  const result: { [key: string]: number } = { A: 0, C: 0, G: 0, T: 0 };
  for (const c of str) {
    if (!"ACGT".includes(c)) throw new Error("error");
    result[c]++;
  }
  return result;
};
