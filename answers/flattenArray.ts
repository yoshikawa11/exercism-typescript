export function flatten<T>(array: readonly unknown[]): T[] {
  const result: T[] = [];

  const helper = (arr: readonly unknown[]) => {
    for (const item of arr) {
      if (Array.isArray(item)) {
        helper(item);
      } else if (item !== null && item !== undefined) {
        result.push(item as T);
      }
    }
  };

  helper(array);
  return result;
}
