const gigaseconds = 1_000_000_000;

export class Gigasecond {
  seconds: number;
  constructor(date: Date) {
    const parsedSeconds = Math.floor(date.getTime() / 1000);
    this.seconds = parsedSeconds;
  }

  public date(): Date {
    const AfterGigaSecond = this.seconds + gigaseconds;
    return new Date(AfterGigaSecond * 1000);
  }
}
