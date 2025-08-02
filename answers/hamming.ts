export const compute = (str1: string, str2: string): number => {
  if (str1.length !== str2.length) {
    throw new Error("DNA strands must be of equal length.");
  }

  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) count++;
  }
  return count;
};
