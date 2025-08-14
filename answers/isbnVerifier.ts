export const isValid = (code: string): boolean => {
  const isbn = code.replace(/-/g, "");

  if (isbn.length !== 10) return false;
  if (!/^\d{9}[\dX]$/.test(isbn)) return false;

  const sum = [...isbn].reduce((acc, char, index) => {
    const value = char === "X" ? 10 : Number(char);
    return acc + value * (10 - index);
  }, 0);

  return sum % 11 === 0;
};
