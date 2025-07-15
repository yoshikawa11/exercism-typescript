const actions = [
  "wink",
  "double blink",
  "close your eyes",
  "jump",
];

export function doAction(num: number): string[] {
  if (num < 0) return [];

  const shouldReverse = (num & 16) !== 0;
  const selectedActions = actions.filter((_, idx) => (num & (1 << idx)) !== 0);

  return shouldReverse ? selectedActions.reverse() : selectedActions;
}
