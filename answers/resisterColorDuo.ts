const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export function helper(array: string[]): number {
  return COLORS.indexOf(array[0]) * 10 + COLORS.indexOf(array[1]);
}
