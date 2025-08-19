export const proverb = (...args: string[]): string => {
  const lines: string[] = [];

  for (let i = 0; i < args.length - 1; i++) {
    lines.push(`For want of a ${args[i]} the ${args[i + 1]} was lost.`);
  }

  lines.push(`And all for the want of a ${args[0]}.`);
  return lines.join("\n");
};
