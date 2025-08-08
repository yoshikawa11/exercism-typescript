export const parse = (phrase: string): string => {
  const formatted = phrase.replace(/[:;,'!?]/g, "");
  const matches = formatted.match(/[A-Z]+[a-z]*|[a-z]+/g) ?? [];
  return matches.map((word) => word[0].toUpperCase()).join("");
};
