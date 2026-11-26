// test_grader.js: tests for grader.js. Run with: node test_grader.js

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

// Checks that the input gives a friendly message and no grade.
function checkMessage(name, text) {
  const result = grader.gradeScores(text);
  const hasMessage = typeof result.message === "string" && result.message.length > 0;
  check(name + " shows a message", hasMessage, true);
  check(name + " shows no grade", result.letter, undefined);
}

// Returns the letter grade for the typed text.
function letterOf(text) {
  return grader.gradeScores(text).letter;
}

// --- Normal case ---
const normal = grader.gradeScores("85, 90, 78");
check("normal: 85, 90, 78 average is 84.3", normal.averageText, "84.3");
check("normal: 85, 90, 78 grade is B", normal.letter, "B");
check("normal: no message", normal.message, null);
check("normal: works without spaces", grader.gradeScores("85,90,78").averageText, "84.3");
check("normal: one score works", grader.gradeScores("92").averageText, "92.0");
check("normal: decimal scores work", grader.gradeScores("92.5, 91.5").averageText, "92.0");

// --- Empty input ---
checkMessage("empty: nothing typed", "");
checkMessage("empty: only spaces", "   ");
checkMessage("empty: extra comma at the end", "85, 90,");
checkMessage("empty: two commas in a row", "85,, 90");

// --- Letters instead of numbers ---
checkMessage("letters: abc", "abc");
checkMessage("letters: one bad score in a list", "85, ninety, 78");
checkMessage("letters: number with a letter", "85a, 90");
checkMessage("letters: percent sign", "85%, 90");
check("letters: message names the bad score", grader.gradeScores("85, ninety").message.includes("ninety"), true);

// --- Numbers out of range ---
checkMessage("range: 101 is too high", "85, 101, 78");
checkMessage("range: 100.5 is too high", "100.5");
checkMessage("range: -5 is too low", "85, -5, 78");
check("range: 0 is allowed", grader.gradeScores("0").letter, "F");
check("range: 100 is allowed", grader.gradeScores("100").letter, "A");

// --- Boundaries between grades ---
check("boundary: 90 is A", letterOf("90"), "A");
check("boundary: 89 is B", letterOf("89"), "B");
check("boundary: 80 is B", letterOf("80"), "B");
check("boundary: 79 is C", letterOf("79"), "C");
check("boundary: 70 is C", letterOf("70"), "C");
check("boundary: 69 is D", letterOf("69"), "D");
check("boundary: 60 is D", letterOf("60"), "D");
check("boundary: 59 is F", letterOf("59"), "F");

// --- Policy rule: drop the lowest score when there are 4 or more ---
const three = grader.gradeScores("100, 90, 50");
check("drop: 3 scores, nothing dropped", three.dropped, null);
check("drop: 3 scores, average uses all of them", three.averageText, "80.0");
const four = grader.gradeScores("100, 90, 50, 80");
check("drop: 4 scores, lowest (50) is dropped", four.dropped, 50);
check("drop: 4 scores, average leaves out the lowest", four.averageText, "90.0");
check("drop: 4 scores, grade leaves out the lowest", four.letter, "A");
const tied = grader.gradeScores("70, 70, 90, 90");
check("drop: tied lowest, only one is dropped", tied.dropped, 70);
check("drop: tied lowest, the other one still counts", tied.averageText, "83.3");
const five = grader.gradeScores("60, 95, 85, 75, 40");
check("drop: 5 scores, only the single lowest (40) is dropped", five.dropped, 40);
check("drop: 5 scores, average of the other four", five.averageText, "78.8");

// --- Policy rule: letter comes from the average rounded to a whole number, halves up ---
check("rounding: 89.5 is A", letterOf("89, 90"), "A");
check("rounding: 89.5 still shows as 89.5", grader.gradeScores("89, 90").averageText, "89.5");
check("rounding: 89.4 is B", letterOf("89.4"), "B");
check("rounding: 79.5 is B", letterOf("79, 80"), "B");
check("rounding: 79.4 is C", letterOf("79.4"), "C");
check("rounding: 69.5 is C", letterOf("69, 70"), "C");
check("rounding: 69.4 is D", letterOf("69.4"), "D");
check("rounding: 59.5 is D", letterOf("59, 60"), "D");
check("rounding: 59.4 is F", letterOf("59.4"), "F");
check("rounding: 50.3, 88.6, 99.6 averages exactly 79.5, so B", letterOf("50.3, 88.6, 99.6"), "B");
check("rounding: display rounds halves up (84.35 shows 84.4)", grader.formatAverage(84.35), "84.4");

// --- Policy rule: D or F shows "Retake needed" ---
check("retake: F needs a retake", grader.gradeScores("50").retake, true);
check("retake: D needs a retake", grader.gradeScores("65").retake, true);
check("retake: 69.4 (D) needs a retake", grader.gradeScores("69.4").retake, true);
check("retake: 69.5 rounds to C, no retake", grader.gradeScores("69, 70").retake, false);
check("retake: C does not", grader.gradeScores("75").retake, false);
check("retake: B does not", grader.gradeScores("85").retake, false);
check("retake: A does not", grader.gradeScores("95").retake, false);

// --- Small functions on their own ---
check("splitScores trims spaces", grader.splitScores(" 85 ,90").join("|"), "85|90");
check("isValidScore accepts 92.5", grader.isValidScore("92.5"), true);
check("isValidScore rejects 1e2", grader.isValidScore("1e2"), false);
check("findLowest finds 50", grader.findLowest([90, 50, 80]), 50);
check("removeOne removes just one copy", grader.removeOne([70, 70, 90], 70).join("|"), "70|90");
check("averageOf 85, 90, 78", grader.formatAverage(grader.averageOf([85, 90, 78])), "84.3");
check("roundToWhole 89.5 is 90", grader.roundToWhole(89.5), 90);
check("letterFor 90 is A", grader.letterFor(90), "A");
check("needsRetake D is true", grader.needsRetake("D"), true);

// --- Summary ---
console.log("");
console.log(passed + " passed, " + failed + " failed");
if (failed > 0) {
  process.exitCode = 1;
}
