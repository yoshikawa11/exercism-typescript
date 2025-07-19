const ASCII_A = "a".charCodeAt(0);
const ASCII_Z = "z".charCodeAt(0);
const ASCII_0 = "0".charCodeAt(0);
const ASCII_9 = "9".charCodeAt(0);

function isLetter(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return (code >= ASCII_A && code <= ASCII_Z) ||
    (code >= ASCII_A + 32 && code <= ASCII_Z + 32);
}

function isDigit(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return code >= ASCII_0 && code <= ASCII_9;
}

function atbash(ch: string): string {
  const code = ch.toLowerCase().charCodeAt(0);
  return String.fromCharCode(ASCII_Z - (code - ASCII_A));
}

export function encode(text: string): string {
  const result: string[] = [];

  let groupCount = 0;
  for (const ch of text) {
    if (isDigit(ch)) {
      result.push(ch);
      groupCount++;
    } else if (isLetter(ch)) {
      result.push(atbash(ch));
      groupCount++;
    }

    if (groupCount === 5) {
      result.push(" ");
      groupCount = 0;
    }
  }

  // remove trailing space
  if (result[result.length - 1] === " ") {
    result.pop();
  }

  return result.join("");
}

export function decode(text: string): string {
  const result: string[] = [];

  for (const ch of text) {
    if (isDigit(ch)) {
      result.push(ch);
    } else if (isLetter(ch)) {
      result.push(atbash(ch));
    }
  }

  return result.join("");
}
