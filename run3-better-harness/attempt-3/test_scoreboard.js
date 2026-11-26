// ============================================================
// Tests for scoreboard.js. Run them with: node test_scoreboard.js
// ============================================================

const board = require("./scoreboard.js");

// ----- A tiny test helper -----

let passed = 0;
let failed = 0;

// Checks that two values match, and prints PASS or FAIL with the test name.
function check(name, actual, expected) {
  const actualText = JSON.stringify(actual);
  const expectedText = JSON.stringify(expected);
  if (actualText === expectedText) {
    passed = passed + 1;
    console.log("PASS  " + name);
  } else {
    failed = failed + 1;
    console.log("FAIL  " + name + "  (got " + actualText + ", wanted " + expectedText + ")");
  }
}

// ----- The houses -----

check("there are four houses in the school's order",
  board.HOUSES.map(function (house) { return house.name; }),
  ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]);
check("every house starts at 0", board.startScores(), [0, 0, 0, 0]);

// ----- Adding points -----

check("+10 on 0 gives 10", board.addPoints(0, board.STEP), 10);
check("+10 twice gives 20", board.addPoints(board.addPoints(0, 10), 10), 20);
check("-10 on 30 gives 20", board.addPoints(30, -board.STEP), 20);

// ----- Never going below 0 -----

check("-10 on 0 stays at 0", board.addPoints(0, -10), 0);
check("-10 on 5 stops at 0", board.addPoints(5, -10), 0);

// ----- A bad award number -----

const badAwards = ["", "   ", "abc", "0", "-5", "2.5", "1e1", "0x10", "ten"];
for (let i = 0; i < badAwards.length; i++) {
  const text = badAwards[i];
  check("award \"" + text + "\" gets a message", board.awardMessage(text) !== "", true);
  check("award \"" + text + "\" changes nothing", board.awardPoints(30, text), 30);
}
check("award \"7\" has no message", board.awardMessage("7"), "");
check("award \"7\" adds 7", board.awardPoints(30, "7"), 37);
check("award \" 7 \" with spaces adds 7", board.awardPoints(30, " 7 "), 37);

// ----- The 50-point limit -----

check("award \"50\" has no message", board.awardMessage("50"), "");
check("award \"50\" adds 50", board.awardPoints(10, "50"), 60);
check("award \"51\" gets a message", board.awardMessage("51") !== "", true);
check("award \"51\" changes nothing", board.awardPoints(10, "51"), 10);
check("award \"1000\" changes nothing", board.awardPoints(10, "1000"), 10);
check("the limit message is different from the bad number message",
  board.awardMessage("51") !== board.awardMessage("abc"), true);

// ----- The leader -----

check("the house with the most points is Leader",
  board.houseLabels([20, 0, 0, 0]), ["Leader", "", "", ""]);
check("only the top house is Leader",
  board.houseLabels([10, 40, 30, 20]), ["", "Leader", "", ""]);
check("nobody has a word when every house has 0",
  board.houseLabels([0, 0, 0, 0]), ["", "", "", ""]);

// ----- A tie -----

check("two houses sharing the top score are Tied",
  board.houseLabels([30, 30, 10, 0]), ["Tied", "Tied", "", ""]);
check("four houses sharing the top score are all Tied",
  board.houseLabels([10, 10, 10, 10]), ["Tied", "Tied", "Tied", "Tied"]);
check("a tie lower down does not matter",
  board.houseLabels([10, 10, 50, 0]), ["", "", "Leader", ""]);

// ----- Reset -----

check("reset sets every house back to 0", board.resetScores(), [0, 0, 0, 0]);
check("after a reset nobody has a word",
  board.houseLabels(board.resetScores()), ["", "", "", ""]);

// ----- Bars and words -----

check("a full bar is 100 points at the start", board.fullBarPoints([0, 0, 0, 0]), 100);
check("a full bar is still 100 points at 100", board.fullBarPoints([100, 20, 0, 0]), 100);
check("a full bar grows to 200 points after 100", board.fullBarPoints([110, 20, 0, 0]), 200);
check("20 points out of 100 is a 20 percent bar", board.barPercent(20, 100), 20);
check("0 points is an empty bar", board.barPercent(0, 100), 0);
check("1 is a point", board.pointsWord(1), "point");
check("20 are points", board.pointsWord(20), "points");

// ----- Saving and loading -----

check("saved scores come back the same",
  board.textToScores(board.scoresToText([10, 20, 30, 40])), [10, 20, 30, 40]);
check("nothing saved yet gives fresh scores", board.textToScores(null), [0, 0, 0, 0]);
check("broken saved text gives fresh scores", board.textToScores("oops"), [0, 0, 0, 0]);
check("a saved list of the wrong size gives fresh scores", board.textToScores("[1,2]"), [0, 0, 0, 0]);
check("a saved negative score gives fresh scores", board.textToScores("[10,-5,0,0]"), [0, 0, 0, 0]);

// ----- The result -----

console.log("");
console.log(passed + " passed, " + failed + " failed");
if (failed > 0) {
  process.exitCode = 1;
}
