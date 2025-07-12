export const transcript = (dna: string): string =>
  dna.split("").map(convert).join("");

function convert(char: string): string {
  switch (char) {
    case "G":
      return "C";
    case "C":
      return "G";
    case "T":
      return "A";
    case "A":
      return "U";
    default:
      throw new Error("invalid input");
  }
}
