export const InvalidInputError = "";

type Direction = "north" | "east" | "south" | "west";
type Coordinates = [number, number];

const DIRECTIONS: Direction[] = ["north", "east", "south", "west"];
const DELTAS: Record<Direction, Coordinates> = {
  north: [0, 1],
  east: [1, 0],
  south: [0, -1],
  west: [-1, 0],
};

export class Robot {
  bearing: Direction = "north";
  coordinates: Coordinates = [0, 0];

  place(input: { direction: string; x: number; y: number }): void {
    if (!DIRECTIONS.includes(input.direction as Direction)) {
      throw new Error(InvalidInputError);
    }
    this.bearing = input.direction as Direction;
    this.coordinates = [input.x, input.y];
  }

  evaluate(commands: string): void {
    const actions: Record<string, () => void> = {
      A: () => this.advance(),
      R: () => this.turn(1),
      L: () => this.turn(-1),
    };
    for (const ch of commands) {
      actions[ch]?.();
    }
  }

  private advance(): void {
    const [dx, dy] = DELTAS[this.bearing];
    const [x, y] = this.coordinates;
    this.coordinates = [x + dx, y + dy];
  }

  private turn(step: 1 | -1): void {
    const idx = DIRECTIONS.indexOf(this.bearing);
    const next = (idx + step + DIRECTIONS.length) % DIRECTIONS.length;
    this.bearing = DIRECTIONS[next];
  }
}
