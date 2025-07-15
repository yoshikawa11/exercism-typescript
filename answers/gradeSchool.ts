export class GradeSchool {
  roster: Map<number, string[]>;
  constructor() {
    this.roster = new Map();
  }
  public add(name: string, grade: number) {
    const value = this.roster.get(grade);
    if (this.isInvalidStudent(name)) return;
    if (!value) {
      const newValue = [name];
      this.roster.set(grade, newValue);
      return;
    }
    value.push(name);
    const sortedValue = value.toSorted();
    this.roster.set(grade, sortedValue);
    this.roster = new Map([...this.roster].sort());
  }

  private isInvalidStudent(name: string): boolean {
    for (const key of this.roster.keys()) {
      if (this.roster.get(key)?.includes(name)) return true;
    }
    return false;
  }

  public grade(grade: number): string[] {
    const value = this.roster.get(grade);
    if (!value) return [];
    return value;
  }

  public showRoster(): { [grade: number]: string[] } {
    const obj: { [grade: number]: string[] } = {};
    this.roster.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }
}

const main = () => {
  const school = new GradeSchool();
  school.add("Bob", 2);
  school.add("Jim", 1);
  school.add("Alice", 1);
  school.add("Jim", 1);
  console.log(school.grade(2));
  console.log(school.showRoster());
};

main();
