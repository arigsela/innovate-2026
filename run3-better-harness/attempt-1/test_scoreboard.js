// Tests for the House Cup scoring logic. Run with: node test_scoreboard.js

const assert = require("assert");
const board = require("./scoreboard.js");

// ----- Section: a tiny test helper -----

let passed = 0;
let failed = 0;

// Runs one named test and prints whether it passed or failed.
function test(name, check) {
  try {
    check();
    passed = passed + 1;
    console.log("PASS  " + name);
  } catch (error) {
    failed = failed + 1;
    console.log("FAIL  " + name);
    console.log("      " + error.message);
  }
}

// ----- Section: the houses -----

test("there are four houses in the right order", function () {
  const names = board.HOUSES.map(function (house) {
    return house.name;
  });
  assert.deepStrictEqual(names, ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]);
});

test("every house starts at 0 points", function () {
  assert.deepStrictEqual(board.startingScores(), [0, 0, 0, 0]);
});

// ----- Section: adding points -----

test("adding 10 points twice gives 20 points", function () {
  let scores = board.startingScores();
  scores = board.addPoints(scores, 0, 10);
  scores = board.addPoints(scores, 0, 10);
  assert.deepStrictEqual(scores, [20, 0, 0, 0]);
});

test("adding points to one house leaves the others alone", function () {
  const scores = board.addPoints([5, 10, 15, 20], 2, 30);
  assert.deepStrictEqual(scores, [5, 10, 45, 20]);
});

test("adding points does not change the old list", function () {
  const oldScores = [0, 0, 0, 0];
  board.addPoints(oldScores, 1, 10);
  assert.deepStrictEqual(oldScores, [0, 0, 0, 0]);
});

// ----- Section: never going below 0 -----

test("taking 10 points from a house on 0 leaves it on 0", function () {
  const scores = board.addPoints([0, 0, 0, 0], 3, -10);
  assert.deepStrictEqual(scores, [0, 0, 0, 0]);
});

test("taking 10 points from a house on 5 stops at 0", function () {
  const scores = board.addPoints([5, 0, 0, 0], 0, -10);
  assert.deepStrictEqual(scores, [0, 0, 0, 0]);
});

test("taking 10 points from a house on 30 gives 20", function () {
  const scores = board.addPoints([30, 0, 0, 0], 0, -10);
  assert.deepStrictEqual(scores, [20, 0, 0, 0]);
});

// ----- Section: a bad award number -----

test("a good award number gets no message", function () {
  assert.strictEqual(board.checkAward("25"), "");
  assert.strictEqual(board.checkAward("1"), "");
  assert.strictEqual(board.checkAward(" 7 "), "");
});

test("an empty box gets a friendly message", function () {
  assert.notStrictEqual(board.checkAward(""), "");
});

test("words get a friendly message", function () {
  assert.notStrictEqual(board.checkAward("ten"), "");
});

test("zero gets a friendly message", function () {
  assert.notStrictEqual(board.checkAward("0"), "");
});

test("a negative number gets a friendly message", function () {
  assert.notStrictEqual(board.checkAward("-5"), "");
});

test("a number with a decimal point gets a friendly message", function () {
  assert.notStrictEqual(board.checkAward("2.5"), "");
});

// ----- Section: the 50-point limit -----

test("an award of exactly 50 is allowed", function () {
  assert.strictEqual(board.checkAward("50"), "");
});

test("an award of 51 gets a message that mentions 50", function () {
  const message = board.checkAward("51");
  assert.ok(message.includes("50"));
});

test("a huge award gets a message", function () {
  assert.notStrictEqual(board.checkAward("1000000"), "");
});

// ----- Section: the leader -----

test("the one house with the most points is Leader", function () {
  const scores = [20, 0, 10, 0];
  assert.strictEqual(board.statusWord(scores, 0), "Leader");
});

test("the other houses show no word", function () {
  const scores = [20, 0, 10, 0];
  assert.strictEqual(board.statusWord(scores, 1), "");
  assert.strictEqual(board.statusWord(scores, 2), "");
  assert.strictEqual(board.statusWord(scores, 3), "");
});

// ----- Section: a tie -----

test("two houses sharing the top score are both Tied", function () {
  const scores = [30, 10, 30, 0];
  assert.strictEqual(board.statusWord(scores, 0), "Tied");
  assert.strictEqual(board.statusWord(scores, 2), "Tied");
});

test("houses below a tie show no word", function () {
  const scores = [30, 10, 30, 0];
  assert.strictEqual(board.statusWord(scores, 1), "");
  assert.strictEqual(board.statusWord(scores, 3), "");
});

test("when every house has 0 points nobody is Leader or Tied", function () {
  const scores = [0, 0, 0, 0];
  for (let houseIndex = 0; houseIndex < scores.length; houseIndex = houseIndex + 1) {
    assert.strictEqual(board.statusWord(scores, houseIndex), "");
  }
});

test("when every house has the same points they are all Tied", function () {
  const scores = [10, 10, 10, 10];
  for (let houseIndex = 0; houseIndex < scores.length; houseIndex = houseIndex + 1) {
    assert.strictEqual(board.statusWord(scores, houseIndex), "Tied");
  }
});

// ----- Section: reset -----

test("reset puts every house back on 0", function () {
  assert.deepStrictEqual(board.resetScores(), [0, 0, 0, 0]);
});

test("after reset nobody is Leader", function () {
  const scores = board.resetScores();
  assert.strictEqual(board.statusWord(scores, 0), "");
});

// ----- Section: the bars -----

test("a house on 0 has an empty bar", function () {
  assert.strictEqual(board.barPercent([0, 0, 0, 0], 0), 0);
});

test("a bar gets longer as the house gets more points", function () {
  const shortBar = board.barPercent([10, 0, 0, 0], 0);
  const longBar = board.barPercent([20, 0, 0, 0], 0);
  assert.ok(longBar > shortBar);
});

test("a bar is never more than 100 percent full", function () {
  assert.strictEqual(board.barPercent([500, 250, 0, 0], 0), 100);
  assert.strictEqual(board.barPercent([500, 250, 0, 0], 1), 50);
});

// ----- Section: saving and loading -----

test("saved scores come back the same", function () {
  const savedText = board.scoresToText([20, 0, 45, 10]);
  assert.deepStrictEqual(board.scoresFromText(savedText), [20, 0, 45, 10]);
});

test("nothing saved yet gives starting scores", function () {
  assert.deepStrictEqual(board.scoresFromText(null), [0, 0, 0, 0]);
});

test("broken saved text gives starting scores", function () {
  assert.deepStrictEqual(board.scoresFromText("not scores"), [0, 0, 0, 0]);
  assert.deepStrictEqual(board.scoresFromText("[1, 2]"), [0, 0, 0, 0]);
  assert.deepStrictEqual(board.scoresFromText("[1, -2, 3, 4]"), [0, 0, 0, 0]);
});

// ----- Section: the final count -----

console.log("");
console.log(passed + " passed, " + failed + " failed");
if (failed > 0) {
  process.exitCode = 1;
}
