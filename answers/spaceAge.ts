const PLANETS: { [K: string]: number } = {
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Earth: 1.0,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.4474498,
  Uranus: 84.016846,
  Neptune: 164.79132,
};

export function age(seconds: number, planet: string): number {
  const key = planet.charAt(0).toUpperCase() + planet.slice(1);
  const years = seconds / PLANETS[key] / 31_557_600;
  return Math.round(years * 100) / 100;
}
