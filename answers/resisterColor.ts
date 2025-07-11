const colors = [
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
  const index = array[0];
  return colors.indexOf(index);
}
