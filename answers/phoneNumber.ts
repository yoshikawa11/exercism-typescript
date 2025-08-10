export const clean = (phoneNumber: string): string => {
  const MIN_LENGTH = 10;
  const MAX_LENGTH = 11;
  const COUNTRY_CODE = "1";

  // 不許可の文字チェック
  if (/[A-Za-z]/.test(phoneNumber)) {
    throw new Error("Letters not permitted");
  }
  if (/[^0-9+\-\s().]/.test(phoneNumber)) {
    throw new Error("Punctuations not permitted");
  }

  // 許可された記号を除去
  const digits = phoneNumber.replace(/[\+\-\(\)\s.]/g, "");

  // 桁数チェック
  if (digits.length > MAX_LENGTH) {
    throw new Error("More than 11 digits");
  }
  if (digits.length < MIN_LENGTH) {
    throw new Error("Incorrect number of digits");
  }

  // 国番号チェック
  const target = digits.length === MAX_LENGTH
    ? (() => {
      if (!digits.startsWith(COUNTRY_CODE)) {
        throw new Error("11 digits must start with 1");
      }
      return digits.slice(1);
    })()
    : digits;

  // エリアコード・交換コードチェック
  if (/^[01]/.test(target)) {
    throw new Error(
      `Area code cannot start with ${target[0] === "0" ? "zero" : "one"}`,
    );
  }
  if (/^[01]/.test(target.slice(3))) {
    throw new Error(
      `Exchange code cannot start with ${target[3] === "0" ? "zero" : "one"}`,
    );
  }

  return target;
};
