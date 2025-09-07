export const BufferEmptyError = "Cannot read from buffer: buffer is empty.";
export const BufferFullError = "Cannot write to buffer: buffer is full.";

export default class CircularBuffer<T> {
  private buffer: T[];
  private readonly size: number;

  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Buffer size must be greater than 0.");
    }
    this.size = size;
    this.buffer = [];
  }

  read(): T {
    if (this.isEmpty()) {
      throw new Error(BufferEmptyError);
    }
    return this.buffer.shift() as T;
  }

  write(value: T): void {
    if (this.isFull()) {
      throw new Error(BufferFullError);
    }
    this.buffer.push(value);
  }

  clear(): void {
    this.buffer = [];
  }

  forceWrite(value: T): void {
    if (this.isFull()) {
      this.buffer.shift();
    }
    this.buffer.push(value);
  }

  private isEmpty(): boolean {
    return this.buffer.length === 0;
  }

  private isFull(): boolean {
    return this.buffer.length === this.size;
  }
}
