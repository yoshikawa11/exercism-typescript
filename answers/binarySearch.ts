export function find(array: number[], target: number): number | null {
  function search(start: number, end: number): number | null {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    if (array[mid] === target) return mid;
    if (array[mid] > target) return search(start, mid - 1);
    return search(mid + 1, end);
  }
  return search(0, array.length - 1);
}
