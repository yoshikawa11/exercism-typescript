export class Allergies {
  allergicMap: Record<string, number> = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };
  score: number;
  constructor(score: number) {
    this.score = score;
  }
  isAllergicTo(item: string): boolean {
    return (this.score & this.allergicMap[item]) !== 0;
  }
  list(): string[] {
    return Object.entries(this.allergicMap)
      .filter(([_, score]) => (this.score & score) !== 0)
      .map(([name]) => name);
  }
}
