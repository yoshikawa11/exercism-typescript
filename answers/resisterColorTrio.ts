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

const UNIT: { [K: string]: string } = {
  "black": " ohms",
  "brown": "0 ohms",
  "red": "00 ohms",
  "orange": " kiloohms",
  "yellow": "0 kiloohms",
  "green": "00 kiloohms",
  "blue": "megaohms",
  "violet": "0 megaohms",
  "grey": "00 megaohms",
  "white": " gigaohms",
};

export function helper(array: string[]): string {
  const value = COLORS.indexOf(array[0]) * 10 + COLORS.indexOf(array[1]);
  const unit = UNIT[array[2]];
  return `${value}${unit}`;
}
