export class RobotController {
  private usedNames = new Set<string>();

  public createRobot(): Robot {
    const name = this.generateName();
    return new Robot(name, this);
  }

  public generateName(): string {
    const name = this.randomLetters(2) + this.randomDigits(3);
    if (this.usedNames.has(name)) {
      return this.generateName();
    }
    this.usedNames.add(name);
    return name;
  }

  public releaseName(name: string) {
    this.usedNames.delete(name);
  }

  private randomLetters(length: number): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return Array.from(
      { length },
      () => letters[Math.floor(Math.random() * letters.length)],
    ).join("");
  }

  private randomDigits(length: number): string {
    return Array.from({ length }, () => String(Math.floor(Math.random() * 10)))
      .join("");
  }
}

export class Robot {
  public name: string;
  private controller: RobotController;

  constructor(name: string, controller: RobotController) {
    this.name = name;
    this.controller = controller;
  }

  public reset() {
    this.controller.releaseName(this.name);
    this.name = this.controller.generateName();
  }
}
