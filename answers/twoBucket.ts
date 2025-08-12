export class TwoBucket {
  goalBucket = "";
  otherBucket = 0;
  actions = 0;

  constructor(
    private limitOne: number,
    private limitTwo: number,
    private goal: number,
    private startBucket: string,
  ) {
    this.solve();
  }

  private solve() {
    type State = { one: number; two: number; actions: number };
    const visited = new Set<string>();

    const init: State = this.startBucket === "one"
      ? { one: this.limitOne, two: 0, actions: 1 }
      : { one: 0, two: this.limitTwo, actions: 1 };

    const queue: State[] = [init];
    visited.add(`${init.one},${init.two}`);

    while (queue.length > 0) {
      const { one, two, actions } = queue.shift()!;

      if (one === this.goal || two === this.goal) {
        this.goalBucket = one === this.goal ? "one" : "two";
        this.otherBucket = one === this.goal ? two : one;
        this.actions = actions;
        return;
      }

      const nextStates: State[] = [
        // fill one
        { one: this.limitOne, two, actions: actions + 1 },
        // fill two
        { one, two: this.limitTwo, actions: actions + 1 },
        // empty one
        { one: 0, two, actions: actions + 1 },
        // empty two
        { one, two: 0, actions: actions + 1 },
        // pour one -> two
        (() => {
          const pour = Math.min(one, this.limitTwo - two);
          return { one: one - pour, two: two + pour, actions: actions + 1 };
        })(),
        // pour two -> one
        (() => {
          const pour = Math.min(two, this.limitOne - one);
          return { one: one + pour, two: two - pour, actions: actions + 1 };
        })(),
      ];

      for (const s of nextStates) {
        const key = `${s.one},${s.two}`;
        if (!visited.has(key)) {
          visited.add(key);
          queue.push(s);
        }
      }
    }

    throw new Error("No solution");
  }

  moves() {
    return this.actions;
  }
}
