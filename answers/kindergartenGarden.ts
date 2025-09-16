const DEFAULT_STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
] as const;

const PLANT_MAP: Record<string, string> = {
  G: "grass",
  C: "clover",
  R: "radishes",
  V: "violets",
};

export class Garden {
  private static readonly PLANTS_PER_ROW = 2;

  private readonly rows: string[];
  private readonly studentNames: string[];

  constructor(garden: string, students: string[] = [...DEFAULT_STUDENTS]) {
    this.rows = garden.split("\n");
    this.studentNames = students.toSorted();
  }

  plants(student: string): string[] {
    const index = this.studentNames.indexOf(student);
    if (index === -1) return [];

    const start = index * Garden.PLANTS_PER_ROW;
    return this.rows.flatMap((row) =>
      row.slice(start, start + Garden.PLANTS_PER_ROW).split("").map((c) =>
        PLANT_MAP[c]
      )
    );
  }
}
