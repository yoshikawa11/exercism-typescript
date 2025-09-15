type Result = {
  win: number;
  draw: number;
  lose: number;
  mp: number;
  points: number;
};

export class Tournament {
  private static createEmptyResult(): Result {
    return { win: 0, draw: 0, lose: 0, mp: 0, points: 0 };
  }

  private static getOrCreateTeam(
    record: Record<string, Result>,
    team: string,
  ): Result {
    if (!record[team]) {
      record[team] = Tournament.createEmptyResult();
    }
    return record[team];
  }

  tally(input: string): string {
    const match: Record<string, Result> = {};

    for (const line of input.split("\n")) {
      if (!line.trim()) continue;

      const [team1, team2, result] = line.split(";");
      const t1 = Tournament.getOrCreateTeam(match, team1);
      const t2 = Tournament.getOrCreateTeam(match, team2);

      switch (result) {
        case "draw":
          this.applyDraw(t1, t2);
          break;
        case "win":
          this.applyWin(t1, t2);
          break;
        case "loss":
          this.applyWin(t2, t1); // loss = 相手の勝ち
          break;
        default:
          throw new Error(`Unknown result: ${result}`);
      }
    }

    return formatTable(match);
  }

  private applyDraw(t1: Result, t2: Result) {
    for (const t of [t1, t2]) {
      t.draw++;
      t.mp++;
      t.points++;
    }
  }

  private applyWin(winner: Result, loser: Result) {
    winner.win++;
    winner.mp++;
    winner.points += 3;
    loser.lose++;
    loser.mp++;
  }
}

function formatTable(matches: Record<string, Result>): string {
  const header = "Team                           | MP |  W |  D |  L |  P";

  const entries = Object.entries(matches);

  entries.sort(([aName, a], [bName, b]) => {
    const diff = b.points - a.points;
    return diff !== 0 ? diff : aName.localeCompare(bName);
  });

  const rows = entries.map(([team, r]) =>
    `${team.padEnd(30)} | ${String(r.mp).padStart(2)} | ${
      String(r.win).padStart(
        2,
      )
    } | ${String(r.draw).padStart(2)} | ${
      String(r.lose).padStart(
        2,
      )
    } | ${String(r.points).padStart(2)}`
  );

  return [header, ...rows].join("\n");
}
