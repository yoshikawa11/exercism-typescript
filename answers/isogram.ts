export const isIsogram = (str: string): boolean => {
  const seen = new Set<string>();
  for (const char of str.toLowerCase()) {
    if (char === "-" || char === " ") continue;
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
};
