// Tests for grader.js. Run with: node test_grader.js

const grader = require("./grader.js");

let passed = 0;
let failed = 0;

// Compares what we got with what we expected and prints PASS or FAIL.
function check(name, actual, expected) {
  if (actual === expected) {
    passed = passed + 1;
    console.log("PASS  " + name);
  } else {
    failed = failed + 1;
    console.log("FAIL  " + name + "  (expected " + expected + ", got " + actual + ")");
  }
}

// Returns true when the result is a friendly message with no average and no grade.
function isMessageOnly(result) {
  return result.message !== "" && result.averageText === "" && result.letter === "";
}

// --- A normal case ---
const normal = grader.gradeScores("85, 90, 78");
check("normal: 85, 90, 78 has no message", normal.message, "");
check("normal: 85, 90, 78 average is 84.3", normal.averageText, "84.3");
check("normal: 85, 90, 78 grade is B", normal.letter, "B");
check("normal: 3 scores, nothing dropped", normal.dropped, null);
check("normal: B does not need a retake", normal.retakeNeeded, false);
check("normal: works without spaces", grader.gradeScores("85,90,78").averageText, "84.3");
check("normal: one score on its own", grader.gradeScores("92").averageText, "92.0");
check("normal: decimal scores are allowed", grader.gradeScores("88.5, 91.5").averageText, "90.0");
check("normal: a comma at the end is ignored", grader.gradeScores("85, 90, 78,").averageText, "84.3");

// --- Empty input ---
check("empty: empty box gives a message only", isMessageOnly(grader.gradeScores("")), true);
check("empty: spaces only gives a message only", isMessageOnly(grader.gradeScores("   ")), true);
check("empty: commas only gives a message only", isMessageOnly(grader.gradeScores(", ,")), true);

// --- Letters instead of numbers ---
check("letters: abc gives a message only", isMessageOnly(grader.gradeScores("abc")), true);
check("letters: 85, abc, 90 gives a message only", isMessageOnly(grader.gradeScores("85, abc, 90")), true);
check("letters: message names the bad piece", grader.gradeScores("85, abc, 90").message.includes("abc"), true);
check("letters: 85 90 without a comma gives a message only", isMessageOnly(grader.gradeScores("85 90")), true);
check("letters: 9O with a letter O gives a message only", isMessageOnly(grader.gradeScores("9O")), true);

// --- Numbers out of range ---
check("range: 101 gives a message only", isMessageOnly(grader.gradeScores("85, 101")), true);
check("range: -1 gives a message only", isMessageOnly(grader.gradeScores("-1, 85")), true);
check("range: 100.5 gives a message only", isMessageOnly(grader.gradeScores("100.5")), true);
check("range: message names the bad score", grader.gradeScores("85, 101").message.includes("101"), true);
check("range: 0 is allowed", grader.gradeScores("0").message, "");
check("range: 100 is allowed", grader.gradeScores("100").message, "");

// --- Boundaries between grades ---
check("boundary: 100 is A", grader.letterGrade(100), "A");
check("boundary: 90 is A", grader.letterGrade(90), "A");
check("boundary: 89 is B", grader.letterGrade(89), "B");
check("boundary: 80 is B", grader.letterGrade(80), "B");
check("boundary: 79 is C", grader.letterGrade(79), "C");
check("boundary: 70 is C", grader.letterGrade(70), "C");
check("boundary: 69 is D", grader.letterGrade(69), "D");
check("boundary: 60 is D", grader.letterGrade(60), "D");
check("boundary: 59 is F", grader.letterGrade(59), "F");
check("boundary: 0 is F", grader.letterGrade(0), "F");

// --- Policy rule: with 4 or more scores, drop the single lowest and say which ---
const four = grader.gradeScores("90, 80, 70, 60");
check("drop: 4 scores drops the lowest (60)", four.dropped, 60);
check("drop: 4 scores averages the other three", four.averageText, "80.0");
check("drop: 4 scores grade uses the new average", four.letter, "B");
const three = grader.gradeScores("90, 80, 60");
check("drop: 3 scores drops nothing", three.dropped, null);
check("drop: 3 scores averages all three", three.averageText, "76.7");
const five = grader.gradeScores("100, 90, 80, 70, 20");
check("drop: 5 scores drops only one score (20)", five.dropped, 20);
check("drop: 5 scores averages the other four", five.averageText, "85.0");
const tie = grader.gradeScores("70, 70, 90, 90");
check("drop: a tie for lowest drops only one copy", tie.dropped, 70);
check("drop: a tie for lowest keeps the other copy", tie.averageText, "83.3");
check("drop: lowest can be typed first", grader.gradeScores("50, 90, 90, 90").averageText, "90.0");

// --- Policy rule: letter grade comes from the whole-number average, halves round up ---
check("rounding: 89.5 is A", grader.letterGrade(89.5), "A");
check("rounding: 89.4 is B", grader.letterGrade(89.4), "B");
check("rounding: 79.5 is B", grader.letterGrade(79.5), "B");
check("rounding: 79.4 is C", grader.letterGrade(79.4), "C");
check("rounding: 69.5 is C", grader.letterGrade(69.5), "C");
check("rounding: 69.4 is D", grader.letterGrade(69.4), "D");
check("rounding: 59.5 is D", grader.letterGrade(59.5), "D");
check("rounding: 59.4 is F", grader.letterGrade(59.4), "F");
const half = grader.gradeScores("89, 90");
check("rounding: 89, 90 still shows 89.5", half.averageText, "89.5");
check("rounding: 89, 90 is an A", half.letter, "A");
check("rounding: average shows one decimal place", grader.formatAverage(84.3333), "84.3");
check("rounding: whole average still shows .0", grader.formatAverage(90), "90.0");
check("rounding: 84.25 shows as 84.3", grader.formatAverage(84.25), "84.3");
check("rounding: 84.35 shows as 84.4", grader.formatAverage(1687 / 20), "84.4");

// --- Policy rule: D or F shows "Retake needed" ---
check("retake: A does not need a retake", grader.needsRetake("A"), false);
check("retake: B does not need a retake", grader.needsRetake("B"), false);
check("retake: C does not need a retake", grader.needsRetake("C"), false);
check("retake: D needs a retake", grader.needsRetake("D"), true);
check("retake: F needs a retake", grader.needsRetake("F"), true);
check("retake: average of 65 needs a retake", grader.gradeScores("60, 70").retakeNeeded, true);
check("retake: average of 40 needs a retake", grader.gradeScores("30, 50").retakeNeeded, true);
check("retake: average of 69.5 is a C, no retake", grader.gradeScores("69, 70").retakeNeeded, false);
check("retake: average of 69.4 is a D, retake", grader.gradeScores("69.4").retakeNeeded, true);

// --- The small helper functions ---
check("helper: splitScores trims the spaces", grader.splitScores(" 85 ,90 ").join("|"), "85|90");
check("helper: checkScore accepts 85", grader.checkScore("85"), "");
check("helper: findLowest finds 62", grader.findLowest([88, 62, 95]), 62);
check("helper: removeOne takes out one copy", grader.removeOne([70, 70, 90], 70).join("|"), "70|90");
check("helper: findAverage of 80 and 90 is 85", grader.findAverage([80, 90]), 85);

// --- Summary ---
console.log("");
console.log(passed + " passed, " + failed + " failed");
if (failed > 0) {
  process.exitCode = 1;
}
