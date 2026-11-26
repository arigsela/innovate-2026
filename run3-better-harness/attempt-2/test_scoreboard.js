// Tests for the House Cup scoring logic.
// Run with: node test_scoreboard.js

const scoreboard = require("./scoreboard.js");

let passed = 0;
let failed = 0;

// Compares what we got with what we expected and prints PASS or FAIL.
function check(testName, actual, expected) {
  const actualText = JSON.stringify(actual);
  const expectedText = JSON.stringify(expected);
  if (actualText === expectedText) {
    passed = passed + 1;
    console.log("PASS  " + testName);
  } else {
    failed = failed + 1;
    console.log("FAIL  " + testName);
    console.log("      expected " + expectedText + " but got " + actualText);
  }
}

// --- The houses ---
check("there are four houses", scoreboard.HOUSES.length, 4);
check(
  "houses are in the right order",
  scoreboard.HOUSES.map(function (house) { return house.name; }),
  ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]
);
check("every house starts at 0", scoreboard.startScores(), [0, 0, 0, 0]);

// --- Adding points ---
check("+10 adds 10 points", scoreboard.addPoints([0, 0, 0, 0], 0, 10), [10, 0, 0, 0]);
check(
  "+10 twice gives 20 points",
  scoreboard.addPoints(scoreboard.addPoints([0, 0, 0, 0], 0, 10), 0, 10),
  [20, 0, 0, 0]
);
check("an award adds the typed number", scoreboard.addPoints([10, 0, 30, 0], 2, 25), [10, 0, 55, 0]);
check("-10 takes 10 points away", scoreboard.addPoints([30, 0, 0, 0], 0, -10), [20, 0, 0, 0]);

const before = [10, 20, 30, 40];
scoreboard.addPoints(before, 1, 10);
check("adding points does not change the old list", before, [10, 20, 30, 40]);

// --- Never going below 0 ---
check("-10 at 0 stays at 0", scoreboard.addPoints([0, 0, 0, 0], 3, -10), [0, 0, 0, 0]);
check("-10 at 5 stops at 0", scoreboard.addPoints([0, 5, 0, 0], 1, -10), [0, 0, 0, 0]);

// --- A bad award number ---
const badNumberMessage = "Please type a whole number greater than 0, like 5 or 20.";
check("an empty box is a bad award", scoreboard.getAwardProblem(""), badNumberMessage);
check("spaces only is a bad award", scoreboard.getAwardProblem("   "), badNumberMessage);
check("a word is a bad award", scoreboard.getAwardProblem("ten"), badNumberMessage);
check("0 is a bad award", scoreboard.getAwardProblem("0"), badNumberMessage);
check("a negative number is a bad award", scoreboard.getAwardProblem("-5"), badNumberMessage);
check("a decimal number is a bad award", scoreboard.getAwardProblem("2.5"), badNumberMessage);
check("a good award has no problem", scoreboard.getAwardProblem("25"), "");
check("1 is a good award", scoreboard.getAwardProblem("1"), "");

// --- The 50-point limit ---
const tooBigMessage = "One award can be at most 50 points. Please type 50 or less.";
check("the limit is 50 points", scoreboard.MAX_AWARD, 50);
check("50 is allowed", scoreboard.getAwardProblem("50"), "");
check("51 is too big", scoreboard.getAwardProblem("51"), tooBigMessage);
check("1000 is too big", scoreboard.getAwardProblem("1000"), tooBigMessage);

// --- The leader ---
check("the house with the most points is Leader", scoreboard.getStatus([20, 0, 0, 0], 0), "Leader");
check("a house with fewer points is not Leader", scoreboard.getStatus([20, 10, 0, 0], 1), "");
check("the last house can be Leader", scoreboard.getStatus([20, 10, 0, 35], 3), "Leader");
check("nobody is Leader when every house has 0", scoreboard.getStatus([0, 0, 0, 0], 0), "");

// --- A tie ---
check("two houses on the top score are Tied (first)", scoreboard.getStatus([30, 30, 10, 0], 0), "Tied");
check("two houses on the top score are Tied (second)", scoreboard.getStatus([30, 30, 10, 0], 1), "Tied");
check("a house below a tie shows nothing", scoreboard.getStatus([30, 30, 10, 0], 2), "");
check("four houses on the same score are all Tied", scoreboard.getStatus([40, 40, 40, 40], 3), "Tied");
check("a tie lower down does not matter", scoreboard.getStatus([50, 20, 20, 0], 0), "Leader");
check("houses tied lower down show nothing", scoreboard.getStatus([50, 20, 20, 0], 1), "");

// --- Reset ---
check("reset sets every house back to 0", scoreboard.resetScores(), [0, 0, 0, 0]);
check("nobody is Leader after reset", scoreboard.getStatus(scoreboard.resetScores(), 0), "");

// --- Bar length ---
check("a bar is empty at 0 points", scoreboard.getBarPercent([0, 0, 0, 0], 0), 0);
check("20 points is 20% of the bar", scoreboard.getBarPercent([20, 0, 0, 0], 0), 20);
check("100 points fills the bar", scoreboard.getBarPercent([100, 50, 0, 0], 0), 100);
check("a full bar grows to 200 points after 100", scoreboard.getFullBarPoints([110, 50, 0, 0]), 200);
check("110 points is 55% of a 200-point bar", scoreboard.getBarPercent([110, 50, 0, 0], 0), 55);

// --- Saved points ---
check("saved points are read back", scoreboard.readSavedScores("[10,20,30,40]"), [10, 20, 30, 40]);
check("nothing saved starts at 0", scoreboard.readSavedScores(null), [0, 0, 0, 0]);
check("broken saved text starts at 0", scoreboard.readSavedScores("oops"), [0, 0, 0, 0]);
check("the wrong number of houses starts at 0", scoreboard.readSavedScores("[10,20]"), [0, 0, 0, 0]);
check("saved negative points start at 0", scoreboard.readSavedScores("[10,-5,0,0]"), [0, 0, 0, 0]);

// --- Summary ---
console.log("");
console.log(passed + " passed, " + failed + " failed");
if (failed > 0) {
  process.exitCode = 1;
}
