export class Crypto {
  ciphertext: string;

  constructor(plain: string) {
    this.ciphertext = this.cipher(plain);
  }

  private cipher(text: string): string {
    const prepared = normalize(text);
    if (!prepared) return "";

    const size = getLength(prepared.length);
    const rows = getArray(size, prepared);
    const result = convertString(rows, size);

    return blockify(result, rows.length);
  }
}

const normalize = (text: string): string =>
  text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

const getLength = (len: number): number => Math.ceil(Math.sqrt(len));

const getArray = (size: number, str: string): string[] => {
  const regex = new RegExp(`.{1,${size}}`, "g");
  const result = str.match(regex);
  return result || [];
};

const convertString = (rows: string[], size: number): string => {
  let str = "";
  for (let col = 0; col < size; col++) {
    for (let row = 0; row < rows.length; row++) {
      if (col < rows[row].length) str += rows[row][col];
    }
  }
  return str;
};

const blockify = (str: string, size: number): string => {
  const blocks: string[] = [];
  const blockCount = Math.ceil(str.length / size);
  const padNeeded = blockCount * size - str.length;

  for (let i = 0; i < blockCount; i++) {
    const start = i > blockCount - padNeeded ? i * size - 1 : i * size;
    const n = i > blockCount - padNeeded - 1 ? size - 1 : size;
    const end = start + n;
    let block = str.slice(start, end);
    if (block.length < size) block = block.padEnd(size, " ");
    blocks.push(block);
  }

  return blocks.join(" ");
};
