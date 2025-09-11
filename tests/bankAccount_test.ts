import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.224.0/assert/mod.ts";
import { BankAccount, ValueError } from "../answers/bankAccount.ts";

Deno.test("newly opened account has zero balance", () => {
  const account = new BankAccount();
  account.open();
  assertEquals(account.balance, 0);
});

Deno.test("can deposit money", () => {
  const account = new BankAccount();
  account.open();
  account.deposit(100);
  assertEquals(account.balance, 100);
});

Deno.test("can deposit money sequentially", () => {
  const account = new BankAccount();
  account.open();
  account.deposit(100);
  account.deposit(50);
  assertEquals(account.balance, 150);
});

Deno.test("can withdraw money", () => {
  const account = new BankAccount();
  account.open();
  account.deposit(100);
  account.withdraw(50);
  assertEquals(account.balance, 50);
});

Deno.test("can withdraw money sequentially", () => {
  const account = new BankAccount();
  account.open();
  account.deposit(100);
  account.withdraw(20);
  account.withdraw(80);
  assertEquals(account.balance, 0);
});

Deno.test("checking balance of closed account throws error", () => {
  const account = new BankAccount();
  account.open();
  account.close();
  assertThrows(() => account.balance, ValueError);
});

Deno.test("deposit into closed account throws error", () => {
  const account = new BankAccount();
  account.open();
  account.close();
  assertThrows(() => {
    account.deposit(50);
  }, ValueError);
});

Deno.test("withdraw from closed account throws error", () => {
  const account = new BankAccount();
  account.open();
  account.close();
  assertThrows(() => {
    account.withdraw(50);
  }, ValueError);
});

Deno.test("close already closed account throws error", () => {
  const account = new BankAccount();
  assertThrows(() => {
    account.close();
  }, ValueError);
});

Deno.test("open already opened account throws error", () => {
  const account = new BankAccount();
  account.open();
  assertThrows(() => {
    account.open();
  }, ValueError);
});

Deno.test("reopened account does not retain balance", () => {
  const account = new BankAccount();
  account.open();
  account.deposit(50);
  account.close();
  account.open();
  assertEquals(account.balance, 0);
});

Deno.test("cannot withdraw more than deposited", () => {
  const account = new BankAccount();
  account.open();
  account.deposit(25);
  assertThrows(() => {
    account.withdraw(50);
  }, ValueError);
});

Deno.test("cannot withdraw negative amount", () => {
  const account = new BankAccount();
  account.open();
  account.deposit(100);
  assertThrows(() => {
    account.withdraw(-50);
  }, ValueError);
});

Deno.test("cannot deposit negative amount", () => {
  const account = new BankAccount();
  account.open();
  assertThrows(() => {
    account.deposit(-50);
  }, ValueError);
});

Deno.test("changing balance directly throws error", () => {
  const account = new BankAccount();
  account.open();
  assertThrows(() => {
    account.balance = 100;
  }, Error);
});
