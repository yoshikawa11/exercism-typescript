export function ofSize(n: number): number[][] {
  const matrix: number[][] = Array.from(
    { length: n },
    () => Array<number>(n).fill(0),
  );
  let value = 1;
  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (top <= bottom && left <= right) {
    // 上辺 (左から右へ)
    for (let col = left; col <= right; col++) {
      matrix[top][col] = value++;
    }
    top++;

    // 右辺 (上から下へ)
    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = value++;
    }
    right--;

    if (top <= bottom) {
      // 下辺 (右から左へ)
      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = value++;
      }
      bottom--;
    }

    if (left <= right) {
      // 左辺 (下から上へ)
      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = value++;
      }
      left++;
    }
  }

  return matrix;
}
