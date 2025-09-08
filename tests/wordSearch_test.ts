import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { WordSearch } from "../answers/wordSearch.ts";

/**
 * single line grids
 */
Deno.test("single line grids - should accept an initial game grid", () => {
  const grid = ["jefblpepre"];
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch instanceof WordSearch, true);
});

Deno.test("single line grids - should accept a target search word", () => {
  const grid = ["jefblpepre"];
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["glasnost"]), { glasnost: undefined });
});

Deno.test("single line grids - should locate a word written left to right", () => {
  const grid = ["clojurermt"];
  const expectedResults = {
    clojure: { start: [1, 1], end: [1, 7] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["clojure"]), expectedResults);
});

Deno.test(
  "single line grids - should locate the same word written left to right in a different position",
  () => {
    const grid = ["mtclojurer"];
    const expectedResults = {
      clojure: { start: [1, 3], end: [1, 9] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(wordSearch.find(["clojure"]), expectedResults);
  },
);

Deno.test("single line grids - should locate a different left to right word", () => {
  const grid = ["coffeelplx"];
  const expectedResults = {
    coffee: { start: [1, 1], end: [1, 6] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["coffee"]), expectedResults);
});

Deno.test(
  "single line grids - should locate that different left to right word in a different position",
  () => {
    const grid = ["xcoffeezlp"];
    const expectedResults = {
      coffee: { start: [1, 2], end: [1, 7] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(wordSearch.find(["coffee"]), expectedResults);
  },
);

/**
 * multi line grids
 */
Deno.test("multi line grids - should locate a left to right word in a two line grid", () => {
  const grid = ["jefblpepre", "clojurermt"];
  const expectedResults = {
    clojure: { start: [2, 1], end: [2, 7] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["clojure"]), expectedResults);
});

Deno.test(
  "multi line grids - should locate a left to right word in a different position in a two line grid",
  () => {
    const grid = ["jefblpepre", "tclojurerm"];
    const expectedResults = {
      clojure: { start: [2, 2], end: [2, 8] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(wordSearch.find(["clojure"]), expectedResults);
  },
);

Deno.test("multi line grids - should locate a left to right word in a three line grid", () => {
  const grid = ["camdcimgtc", "jefblpepre", "clojurermt"];
  const expectedResults = {
    clojure: { start: [3, 1], end: [3, 7] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["clojure"]), expectedResults);
});

Deno.test("multi line grids - should locate a left to right word in a ten line grid", () => {
  const grid = [
    "jefblpepre",
    "camdcimgtc",
    "oivokprjsm",
    "pbwasqroua",
    "rixilelhrs",
    "wolcqlirpc",
    "screeaumgr",
    "alxhpburyi",
    "jalaycalmp",
    "clojurermt",
  ];
  const expectedResults = {
    clojure: { start: [10, 1], end: [10, 7] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["clojure"]), expectedResults);
});

Deno.test(
  "multi line grids - should locate a left to right word in a different position in a ten line grid",
  () => {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "clojurermt",
      "jalaycalmp",
    ];
    const expectedResults = {
      clojure: { start: [9, 1], end: [9, 7] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(wordSearch.find(["clojure"]), expectedResults);
  },
);

Deno.test("multi line grids - should locate a different left to right word in a ten line grid", () => {
  const grid = [
    "jefblpepre",
    "camdcimgtc",
    "oivokprjsm",
    "pbwasqroua",
    "rixilelhrs",
    "wolcqlirpc",
    "screeaumgr",
    "alxhpburyi",
    "clojurermt",
    "jalaycalmp",
  ];
  const expectedResults = {
    scree: { start: [7, 1], end: [7, 5] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["scree"]), expectedResults);
});

/**
 * multiple words
 */
Deno.test("multiple words - should locate two words written left to right", () => {
  const grid = [
    "aefblpepre",
    "camdcimgtc",
    "oivokprjsm",
    "pbwasqroua",
    "rixilelhrs",
    "wolcqlirpc",
    "screeaumgr",
    "alxhpburyi",
    "jalaycalmp",
    "clojurermt",
    "xjavamtzlp",
  ];
  const expectedResults = {
    clojure: { start: [10, 1], end: [10, 7] },
    java: { start: [11, 2], end: [11, 5] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["java", "clojure"]), expectedResults);
});

/**
 * different directions
 */
Deno.test("different directions - should locate a single word written right to left", () => {
  const grid = ["rixilelhrs"];
  const expectedResults = {
    elixir: { start: [1, 6], end: [1, 1] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(wordSearch.find(["elixir"]), expectedResults);
});

Deno.test(
  "different directions - should locate multiple words written in different horizontal directions",
  () => {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt",
    ];
    const expectedResults = {
      clojure: { start: [10, 1], end: [10, 7] },
      elixir: { start: [5, 6], end: [5, 1] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(wordSearch.find(["elixir", "clojure"]), expectedResults);
  },
);

/**
 * vertical directions (and diagonals)
 */
Deno.test("vertical/diagonal - should locate words written top to bottom", () => {
  const grid = [
    "jefblpepre",
    "camdcimgtc",
    "oivokprjsm",
    "pbwasqroua",
    "rixilelhrs",
    "wolcqlirpc",
    "screeaumgr",
    "alxhpburyi",
    "jalaycalmp",
    "clojurermt",
  ];
  const expectedResults = {
    clojure: { start: [10, 1], end: [10, 7] },
    elixir: { start: [5, 6], end: [5, 1] },
    ecmascript: { start: [1, 10], end: [10, 10] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(
    wordSearch.find(["elixir", "clojure", "ecmascript"]),
    expectedResults,
  );
});

Deno.test("vertical/diagonal - should locate words written bottom to top", () => {
  const grid = [
    "jefblpepre",
    "camdcimgtc",
    "oivokprjsm",
    "pbwasqroua",
    "rixilelhrs",
    "wolcqlirpc",
    "screeaumgr",
    "alxhpburyi",
    "jalaycalmp",
    "clojurermt",
  ];
  const expectedResults = {
    clojure: { start: [10, 1], end: [10, 7] },
    elixir: { start: [5, 6], end: [5, 1] },
    ecmascript: { start: [1, 10], end: [10, 10] },
    rust: { start: [5, 9], end: [2, 9] },
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(
    wordSearch.find(["elixir", "clojure", "ecmascript", "rust"]),
    expectedResults,
  );
});

Deno.test(
  "vertical/diagonal - should locate words written top left to bottom right",
  () => {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt",
    ];
    const expectedResults = {
      clojure: { start: [10, 1], end: [10, 7] },
      elixir: { start: [5, 6], end: [5, 1] },
      ecmascript: { start: [1, 10], end: [10, 10] },
      rust: { start: [5, 9], end: [2, 9] },
      java: { start: [1, 1], end: [4, 4] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(
      wordSearch.find(["clojure", "elixir", "ecmascript", "rust", "java"]),
      expectedResults,
    );
  },
);

Deno.test(
  "vertical/diagonal - should locate words written bottom right to top left",
  () => {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt",
    ];
    const expectedResults = {
      clojure: { start: [10, 1], end: [10, 7] },
      elixir: { start: [5, 6], end: [5, 1] },
      ecmascript: { start: [1, 10], end: [10, 10] },
      rust: { start: [5, 9], end: [2, 9] },
      java: { start: [1, 1], end: [4, 4] },
      lua: { start: [9, 8], end: [7, 6] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(
      wordSearch.find([
        "clojure",
        "elixir",
        "ecmascript",
        "rust",
        "java",
        "lua",
      ]),
      expectedResults,
    );
  },
);

Deno.test(
  "vertical/diagonal - should locate words written bottom left to top right",
  () => {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt",
    ];
    const expectedResults = {
      clojure: { start: [10, 1], end: [10, 7] },
      elixir: { start: [5, 6], end: [5, 1] },
      ecmascript: { start: [1, 10], end: [10, 10] },
      rust: { start: [5, 9], end: [2, 9] },
      java: { start: [1, 1], end: [4, 4] },
      lua: { start: [9, 8], end: [7, 6] },
      lisp: { start: [6, 3], end: [3, 6] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(
      wordSearch.find([
        "clojure",
        "elixir",
        "ecmascript",
        "rust",
        "java",
        "lua",
        "lisp",
      ]),
      expectedResults,
    );
  },
);

Deno.test(
  "vertical/diagonal - should locate words written top right to bottom left",
  () => {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt",
    ];
    const expectedResults = {
      clojure: { start: [10, 1], end: [10, 7] },
      elixir: { start: [5, 6], end: [5, 1] },
      ecmascript: { start: [1, 10], end: [10, 10] },
      rust: { start: [5, 9], end: [2, 9] },
      java: { start: [1, 1], end: [4, 4] },
      lua: { start: [9, 8], end: [7, 6] },
      lisp: { start: [6, 3], end: [3, 6] },
      ruby: { start: [6, 8], end: [9, 5] },
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(
      wordSearch.find([
        "clojure",
        "elixir",
        "ecmascript",
        "rust",
        "java",
        "lua",
        "lisp",
        "ruby",
      ]),
      expectedResults,
    );
  },
);

/**
 * avoiding false-positives
 */
Deno.test("avoiding false-positives - should fail to locate a word that is not in the puzzle", () => {
  const grid = [
    "jefblpepre",
    "camdcimgtc",
    "oivokprjsm",
    "pbwasqroua",
    "rixilelhrs",
    "wolcqlirpc",
    "screeaumgr",
    "alxhpburyi",
    "jalaycalmp",
    "clojurermt",
  ];
  const expectedResults = {
    clojure: { start: [10, 1], end: [10, 7] },
    elixir: { start: [5, 6], end: [5, 1] },
    ecmascript: { start: [1, 10], end: [10, 10] },
    rust: { start: [5, 9], end: [2, 9] },
    java: { start: [1, 1], end: [4, 4] },
    lua: { start: [9, 8], end: [7, 6] },
    lisp: { start: [6, 3], end: [3, 6] },
    ruby: { start: [6, 8], end: [9, 5] },
    haskell: undefined,
  };
  const wordSearch = new WordSearch(grid);
  assertEquals(
    wordSearch.find([
      "clojure",
      "elixir",
      "ecmascript",
      "rust",
      "java",
      "lua",
      "lisp",
      "ruby",
      "haskell",
    ]),
    expectedResults,
  );
});

Deno.test(
  "avoiding false-positives - should fail to locate words that are not on horizontal, vertical, or diagonal lines",
  () => {
    const grid = ["abc", "def"];
    const expectedResults = {
      aef: undefined,
      ced: undefined,
      abf: undefined,
      cbd: undefined,
    };
    const wordSearch = new WordSearch(grid);
    assertEquals(
      wordSearch.find(["aef", "ced", "abf", "cbd"]),
      expectedResults,
    );
  },
);

Deno.test(
  "avoiding false-positives - should not concatenate different lines to find a horizontal word",
  () => {
    const grid = ["abceli", "xirdfg"];
    const expectedResults = { elixir: undefined };
    const wordSearch = new WordSearch(grid);
    assertEquals(wordSearch.find(["elixir"]), expectedResults);
  },
);

Deno.test(
  "avoiding false-positives - should not wrap around horizontally to find a word",
  () => {
    const grid = ["silabcdefp"];
    const expectedResults = { lisp: undefined };
    const wordSearch = new WordSearch(grid);
    assertEquals(wordSearch.find(["lisp"]), expectedResults);
  },
);

Deno.test(
  "avoiding false-positives - should not wrap around vertically to find a word",
  () => {
    const grid = ["s", "u", "r", "a", "b", "c", "t"];
    const expectedResults = { rust: undefined };
    const wordSearch = new WordSearch(grid);
    assertEquals(wordSearch.find(["rust"]), expectedResults);
  },
);
