export function encode(input: string): string {
  return input.replace(/(.)\1*/g, (match) => {
    return match.length > 1 ? match.length + match[0] : match[0];
  });
}

export function decode(input: string): string {
  return input.replace(/(\d*)(.)/g, (_, count, char) => {
    const repeat = count === "" ? 1 : Number(count);
    return char.repeat(repeat);
  });
}
