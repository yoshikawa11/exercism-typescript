export const saddlePoints = (
  input: number[][],
): { row: number; column: number }[] => {
  const result: { row: number; column: number }[] = [];
  if (input.length === 0 || input[0].length === 0) {
    return result;
  }

  const rowMax: number[] = input.map((row) => Math.max(...row));

  const colMin: number[] = [];
  const cols = input[0].length;
  for (let j = 0; j < cols; j++) {
    let minVal = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < input.length; i++) {
      if (input[i][j] < minVal) {
        minVal = input[i][j];
      }
    }
    colMin[j] = minVal;
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const value = input[i][j];
      if (value === rowMax[i] && value === colMin[j]) {
        result.push({ row: i + 1, column: j + 1 });
      }
    }
  }

  return result;
};
