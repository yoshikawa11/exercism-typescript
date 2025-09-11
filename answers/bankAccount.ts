export const ValueError = "Value error";

export class BankAccount {
  private isOpen: boolean = false;
  private _balance: number = 0;

  open(): void {
    if (this.isOpen) {
      throw new Error(ValueError);
    }
    this.isOpen = true;
  }

  deposit(amount: number): void {
    this.assertOpen();
    if (amount < 0) {
      throw new Error(ValueError);
    }
    this._balance += amount;
  }

  withdraw(amount: number): void {
    this.assertOpen();
    if (amount < 0 || amount > this._balance) {
      throw new Error(ValueError);
    }
    this._balance -= amount;
  }

  close(): void {
    this.assertOpen();
    this.isOpen = false;
    this._balance = 0;
  }

  get balance(): number {
    this.assertOpen();
    return this._balance;
  }

  set balance(_: number) {
    throw new Error(ValueError);
  }

  private assertOpen(): void {
    if (!this.isOpen) {
      throw new Error(ValueError);
    }
  }
}
