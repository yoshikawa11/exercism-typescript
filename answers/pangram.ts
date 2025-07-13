export function isPangram(str: string): boolean {
  return new Set(
    str.toLowerCase().split("").filter((c) => c >= "a" && c <= "z"),
  ).size === 26;
}
