export const maximumValue = (
  input: { maximumWeight: number; items: { weight: number; value: number }[] },
): number => {
  const { maximumWeight, items } = input;
  const n = items.length;

  // dp[w] = 重さw以下での最大価値
  const dp = Array(maximumWeight + 1).fill(0);

  for (let i = 0; i < n; i++) {
    const { weight, value } = items[i];
    // 重さを逆順で更新（同じアイテムを複数回使わないため）
    for (let w = maximumWeight; w >= weight; w--) {
      dp[w] = Math.max(dp[w], dp[w - weight] + value);
    }
  }
  return dp[maximumWeight];
};
