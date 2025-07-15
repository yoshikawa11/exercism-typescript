export class Clock {
  hours: number;
  minutes: number;
  constructor(num1: number, num2?: number) {
    this.hours = num1;
    this.minutes = num2 ?? 0;
    this.normalize();
  }

  private normalize() {
    const totalMinutes = this.hours * 60 + this.minutes;
    const minutesInDay = ((totalMinutes % 1440) + 1440) % 1440;
    this.hours = Math.floor(minutesInDay / 60);
    this.minutes = minutesInDay % 60;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hours, this.minutes - minutes);
  }

  public toString(): string {
    return `${this.hours.toString().padStart(2, "0")}:${
      this.minutes.toString().padStart(2, "0")
    }`;
  }

  public equals(clock: Clock): boolean {
    return this.toString() === clock.toString();
  }
}
