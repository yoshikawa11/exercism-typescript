const START_WITH_VOWEL_REGEXP = /^[aeiou]|xr|yt/;
const QU_REGEXP = /^(.?qu)(.*)/;
const Y_REGEXP = /^([^aeiou])(y.*)/;
const CONSONANT_REGEXP = /^([^aeiou]+)(.*)/;
const toPigLatin = (word: string): string => {
  if (START_WITH_VOWEL_REGEXP.test(word)) {
    return word + "ay";
  } else {
    const matches = word.match(QU_REGEXP) ||
      word.match(Y_REGEXP) ||
      word.match(CONSONANT_REGEXP);
    return matches ? matches[2] + matches[1] + "ay" : word + "ay";
  }
};

export function translate(phrase: string): string {
  return phrase.split(" ").map((x) => toPigLatin(x)).join(" ");
}
