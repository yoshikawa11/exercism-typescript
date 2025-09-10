export class DiffieHellman {
  private static readonly MIN_KEY = 2;
  public static readonly MAX_LIMIT = 100;

  readonly p: number;
  readonly g: number;
  readonly privateKey: number;

  constructor(p: number, g: number) {
    validate(p, g);
    this.p = p;
    this.g = g;
    this.privateKey = this.generatePrivateKey();
  }

  private generatePrivateKey(): number {
    const min = DiffieHellman.MIN_KEY;
    const max = this.p - 1;
    return Math.floor(Math.random() * (max - min) + min);
  }

  getPublicKey(privateKey: number): number {
    if (privateKey < DiffieHellman.MIN_KEY) {
      throw new Error(ERROR_NOT_POSITIVE);
    }
    if (privateKey >= this.p) {
      throw new Error(ERROR_NOT_GREATER_THAN_P);
    }
    return Math.pow(this.g, privateKey) % this.p;
  }

  getSecret(otherPublicKey: number, myPrivateKey: number): number {
    return Math.pow(otherPublicKey, myPrivateKey) % this.p;
  }
}

const ERROR_NOT_GREATER_THAN_P = "Private key must be less than p.";
const ERROR_NOT_POSITIVE = "Private key must be greater than 1.";
const ERROR_OUT_OF_RANGE = "Numbers must be between 1 and 100.";
const ERROR_NOT_PRIME = "Numbers must be prime.";

function validate(p: number, g: number): void {
  const MIN = 1;
  const MAX = DiffieHellman.MAX_LIMIT;

  if (p < MIN || p > MAX || g < MIN || g > MAX) {
    throw new Error(ERROR_OUT_OF_RANGE);
  }
  if (!isPrime(p) || !isPrime(g)) {
    throw new Error(ERROR_NOT_PRIME);
  }
}

function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
