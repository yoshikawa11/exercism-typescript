export const rotate = (str: string, shift: number): string => {
  const rotateChar = (code: number, base: number): string => {
    const rotated = ((code - base + shift) % 26) + base;
    return String.fromCharCode(rotated);
  };

  let result = "";

  for (const ch of str) {
    const code = ch.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      // A-Z
      result += rotateChar(code, 65);
    } else if (code >= 97 && code <= 122) {
      // a-z
      result += rotateChar(code, 97);
    } else {
      result += ch;
    }
  }

  return result;
};
