export function isPaired(input: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const ch of input) {
    if (["(", "{", "["].includes(ch)) {
      stack.push(ch);
    } else if ([")", "}", "]"].includes(ch)) {
      if (stack.pop() !== pairs[ch]) {
        return false;
      }
    }
    // skip
  }

  return stack.length === 0;
}
