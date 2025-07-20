const alphabet = "abcdefghijklmnopqrstuvwxyz";

export class SimpleCipher {
  readonly key: string;

  constructor(key?: string) {
    if (key === "" || (key && !/^[a-z]+$/.test(key))) {
      throw new Error("invalid key");
    }
    this.key = key ?? getRandomKey();
  }

  public encode(plain: string): string {
    const fullKey = repeatKeyToLength(this.key, plain.length);
    const cipher: string[] = [];

    for (let i = 0; i < plain.length; i++) {
      const indexPlain = alphabet.indexOf(plain[i]);
      const indexKey = alphabet.indexOf(fullKey[i]);
      const indexCipher = (indexPlain + indexKey) % 26;
      cipher.push(alphabet[indexCipher]);
    }

    return cipher.join("");
  }

  public decode(cipher: string): string {
    const fullKey = repeatKeyToLength(this.key, cipher.length);
    const plain: string[] = [];

    for (let i = 0; i < cipher.length; i++) {
      const indexCipher = alphabet.indexOf(cipher[i]);
      const indexKey = alphabet.indexOf(fullKey[i]);
      const indexPlain = (indexCipher - indexKey + 26) % 26;
      plain.push(alphabet[indexPlain]);
    }

    return plain.join("");
  }
}

// ランダムなキーを生成（a〜z の文字列を120文字分）
function getRandomKey(): string {
  return Array.from(
    { length: 120 },
    () =>
      String.fromCharCode("a".charCodeAt(0) + Math.floor(Math.random() * 26)),
  ).join("");
}

// 与えられたキーを必要な長さにまで繰り返して切り出す
function repeatKeyToLength(key: string, length: number): string {
  return key.repeat(Math.ceil(length / key.length)).slice(0, length);
}
