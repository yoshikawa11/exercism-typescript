import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { transpose } from "../answers/transpose.ts";

Deno.test("empty string", () => {
  const expected: string[] = [];
  assertEquals(transpose([]), expected);
});

Deno.test("two characters in a row", () => {
  const expected = ["A", "1"];
  assertEquals(transpose(["A1"]), expected);
});

Deno.test("two characters in a column", () => {
  const expected = ["A1"];
  assertEquals(transpose(["A", "1"]), expected);
});

Deno.test("simple", () => {
  const expected = ["A1", "B2", "C3"];
  assertEquals(transpose(["ABC", "123"]), expected);
});

Deno.test("single line", () => {
  const expected = [
    "S",
    "i",
    "n",
    "g",
    "l",
    "e",
    " ",
    "l",
    "i",
    "n",
    "e",
    ".",
  ];
  assertEquals(transpose(["Single line."]), expected);
});

Deno.test("first line longer than second line", () => {
  const expected = [
    "TT",
    "hh",
    "ee",
    "  ",
    "ff",
    "oi",
    "uf",
    "rt",
    "th",
    "h ",
    " l",
    "li",
    "in",
    "ne",
    "e.",
    ".",
  ];
  assertEquals(transpose(["The fourth line.", "The fifth line."]), expected);
});

Deno.test("second line longer than first line", () => {
  const expected = [
    "TT",
    "hh",
    "ee",
    "  ",
    "fs",
    "ie",
    "rc",
    "so",
    "tn",
    " d",
    "l ",
    "il",
    "ni",
    "en",
    ".e",
    " .",
  ];
  assertEquals(transpose(["The first line.", "The second line."]), expected);
});

Deno.test("square", () => {
  const expected = ["HEART", "EMBER", "ABUSE", "RESIN", "TREND"];
  assertEquals(
    transpose(["HEART", "EMBER", "ABUSE", "RESIN", "TREND"]),
    expected,
  );
});

Deno.test("rectangle", () => {
  const expected = [
    "FOBS",
    "RULE",
    "ATOP",
    "CLOT",
    "TIME",
    "UNIT",
    "RENT",
    "EDGE",
  ];
  assertEquals(
    transpose(["FRACTURE", "OUTLINED", "BLOOMING", "SEPTETTE"]),
    expected,
  );
});

Deno.test("triangle", () => {
  const expected = [
    "TEASER",
    " EASER",
    "  ASER",
    "   SER",
    "    ER",
    "     R",
  ];
  assertEquals(
    transpose(["T", "EE", "AAA", "SSSS", "EEEEE", "RRRRRR"]),
    expected,
  );
});

Deno.test("jagged triangle", () => {
  const expected = ["123456", "1 3456", "  3456", "  3 56", "    56", "    5"];
  assertEquals(
    transpose(["11", "2", "3333", "444", "555555", "66666"]),
    expected,
  );
});

Deno.test("test many lines", () => {
  const expected = [
    "CIFWFAWDTAWITW",
    "hnrhr hohnhshh",
    "o oeopotedi ea",
    "rfmrmash  cn t",
    ".a e ie fthow ",
    " ia fr weh,whh",
    "Trnco miae  ie",
    "w ciroitr btcr",
    "oVivtfshfcuhhe",
    " eeih a uote  ",
    "hrnl sdtln  is",
    "oot ttvh tttfh",
    "un bhaeepihw a",
    "saglernianeoyl",
    "e,ro -trsui ol",
    "h uofcu sarhu ",
    "owddarrdan o m",
    "lhg to'egccuwi",
    "deemasdaeehris",
    "sr als t  ists",
    ",ebk 'phool'h,",
    "  reldi ffd   ",
    "bweso tb  rtpo",
    "oea ileutterau",
    "t kcnoorhhnatr",
    "hl isvuyee'fi ",
    " atv es iisfet",
    "ayoior trr ino",
    "l  lfsoh  ecti",
    "ion   vedpn  l",
    "kuehtteieadoe ",
    "erwaharrar,fas",
    "   nekt te  rh",
    "ismdsehphnnosa",
    "ncuse ra-tau l",
    " et  tormsural",
    "dniuthwea'g t ",
    "iennwesnr hsts",
    "g,ycoi tkrttet",
    "n ,l r s'a anr",
    "i  ef  'dgcgdi",
    "t  aol   eoe,v",
    "y  nei sl,u; e",
    ",  .sf to l   ",
    "     e rv d  t",
    "     ; ie    o",
    "       f, r   ",
    "       e  e  m",
    "       .  m  e",
    "          o  n",
    "          v  d",
    "          e  .",
    "          ,",
  ];
  assertEquals(
    transpose([
      "Chor. Two households, both alike in dignity,",
      "In fair Verona, where we lay our scene,",
      "From ancient grudge break to new mutiny,",
      "Where civil blood makes civil hands unclean.",
      "From forth the fatal loins of these two foes",
      "A pair of star-cross'd lovers take their life;",
      "Whose misadventur'd piteous overthrows",
      "Doth with their death bury their parents' strife.",
      "The fearful passage of their death-mark'd love,",
      "And the continuance of their parents' rage,",
      "Which, but their children's end, naught could remove,",
      "Is now the two hours' traffic of our stage;",
      "The which if you with patient ears attend,",
      "What here shall miss, our toil shall strive to mend.",
    ]),
    expected,
  );
});
