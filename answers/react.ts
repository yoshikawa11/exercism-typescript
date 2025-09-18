type Callback = () => void;
type ComputedCell = {
  compute: () => number;
  value?: number;
  eq?: boolean;
};

const callbacks: Callback[] = [];
const computed: ComputedCell[] = [];

export const createInput = (initial: number) => {
  // 既存状態をリセット
  callbacks.length = 0;
  computed.length = 0;

  let value = initial;

  const getValue = () => value;

  const setValue = (next: number) => {
    const eqCell = computed.find((c) => c.eq);
    const prevEqValue = eqCell?.compute();
    value = next;
    const nextEqValue = eqCell?.compute();

    if (eqCell && prevEqValue === nextEqValue) {
      return eqCell.value ?? value;
    }

    // 全コールバックを実行
    callbacks.forEach((cb) => cb());
    return value;
  };

  return [getValue, setValue] as const;
};

export const createComputed = (
  compute: () => number,
  initial?: number,
  eq?: boolean,
) => {
  const cell: ComputedCell = { compute, value: initial, eq };
  computed.push(cell);
  return compute;
};

export const createCallback = (cb: Callback) => {
  callbacks.push(cb);
  return () => {
    const index = callbacks.indexOf(cb);
    if (index !== -1) callbacks.splice(index, 1);
  };
};
