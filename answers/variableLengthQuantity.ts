export function encode(values: number[]): number[] {
  const result: number[] = [];

  for (const value of values) {
    if (value < 0 || value > 0xffffffff) {
      throw new Error("Value out of range");
    }

    let val = value;
    const bytes: number[] = [];

    do {
      let byte = val & 0x7f;
      val >>>= 7;
      if (bytes.length > 0) {
        byte |= 0x80;
      }
      bytes.unshift(byte);
    } while (val > 0);

    result.push(...bytes);
  }

  return result;
}

export function decode(bytes: number[]): number[] {
  const results: number[] = [];
  let value = 0;
  let i = 0;
  const length = bytes.length;

  while (i < length) {
    value = 0;
    let hasMore = true;

    while (hasMore) {
      if (i >= length) {
        throw new Error("Incomplete sequence");
      }

      const byte = bytes[i++];
      value = (value << 7) | (byte & 0x7f);
      hasMore = (byte & 0x80) !== 0;

      if (!hasMore) {
        results.push(value);
      }
    }
  }

  return results;
}
