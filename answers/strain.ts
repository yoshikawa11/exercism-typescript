function partition<T>(
  array: T[],
  predicate: (value: T) => boolean,
  keep: boolean,
): T[] {
  const result: T[] = [];
  for (const e of array) {
    if (predicate(e) === keep) {
      result.push(e);
    }
  }
  return result;
}

export function keep<T>(array: T[], predicate: (value: T) => boolean): T[] {
  return partition(array, predicate, true);
}

export function discard<T>(array: T[], predicate: (value: T) => boolean): T[] {
  return partition(array, predicate, false);
}
