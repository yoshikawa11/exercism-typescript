export function convert(num: number): string {
  const result: string[] = [];
  if (num % 3 === 0) result.push("Pling");
  if (num % 5 === 0) result.push("Plang");
  if (num % 7 === 0) result.push("Plong");
  return result.length === 0 ? String(num) : result.join("");
}
