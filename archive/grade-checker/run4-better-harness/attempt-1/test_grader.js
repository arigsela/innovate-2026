// Tests for grader.js. Run them with: node test_grader.js

const grader = require("./grader.js");

// ----- A tiny test helper -----

let passed = 0;
let failed = 0;

// Compares what we got with what we expected and prints PASS or FAIL.
function check(name, actual, expected) {
  const actualText = JSON.stringify(actual);
  const expectedText = JSON.stringify(expected);
  if (actualText === expectedText) {
    passed = passed + 1;
    console.log("PASS  " + name);
  } else {
    failed = failed + 1;
    console.log("FAIL  " + name + "  (expected " + expectedText + " but got " + actualText + ")");
  }
}

// Says whether grading the text gave a friendly message and no grade.
function gaveMessageOnly(text) {
  const result = grader.checkGrade(text);
  return result.message !== "" && result.average === "" && result.letter === "";
}

// ----- A normal case -----

console.log("\nNormal case");
const normal = grader.checkGrade("85, 90, 78");
check("85, 90, 78 has no message", normal.message, "");
check("85, 90, 78 has average 84.3", normal.average, "84.3");
check("85, 90, 78 has grade B", normal.letter, "B");
check("85, 90, 78 drops nothing", normal.dropped, null);
check("85, 90, 78 needs no retake", normal.retake, false);
check("scores work without spaces", grader.checkGrade("85,90,78").average, "84.3");
check("one score on its own works", grader.checkGrade("92").letter, "A");
check("decimal scores work", grader.checkGrade("90.5, 91.5").average, "91.0");
check("a comma left at the end is ignored", grader.checkGrade("85, 90, 78,").average, "84.3");

// ----- Empty input -----

console.log("\nEmpty input");
check("an empty box gives a message and no grade", gaveMessageOnly(""), true);
check("only spaces gives a message and no grade", gaveMessageOnly("   "), true);
check("only commas gives a message and no grade", gaveMessageOnly(", ,"), true);

// ----- Letters instead of numbers -----

console.log("\nLetters instead of numbers");
check("abc gives a message and no grade", gaveMessageOnly("abc"), true);
check("one bad score among good ones gives a message", gaveMessageOnly("85, ninety, 78"), true);
check("the message names the bad score", grader.checkGrade("85, ninety, 78").message.includes("ninety"), true);
check("a number with letters attached is not a number", gaveMessageOnly("85pts"), true);
check("two numbers with a space between are not one score", gaveMessageOnly("85 90"), true);

// ----- Numbers out of range -----

console.log("\nNumbers out of range");
check("101 gives a message and no grade", gaveMessageOnly("85, 101"), true);
check("-1 gives a message and no grade", gaveMessageOnly("-1, 85"), true);
check("100.5 gives a message and no grade", gaveMessageOnly("100.5"), true);
check("the message names the out-of-range score", grader.checkGrade("85, 150").message.includes("150"), true);
check("0 is allowed", grader.checkGrade("0").message, "");
check("100 is allowed", grader.checkGrade("100").message, "");

// ----- The boundaries between grades -----

console.log("\nBoundaries between grades");
check("100 is an A", grader.letterGrade(100), "A");
check("90 is an A", grader.letterGrade(90), "A");
check("89 is a B", grader.letterGrade(89), "B");
check("80 is a B", grader.letterGrade(80), "B");
check("79 is a C", grader.letterGrade(79), "C");
check("70 is a C", grader.letterGrade(70), "C");
check("69 is a D", grader.letterGrade(69), "D");
check("60 is a D", grader.letterGrade(60), "D");
check("59 is an F", grader.letterGrade(59), "F");
check("0 is an F", grader.letterGrade(0), "F");

// ----- Policy rule: drop the lowest score when there are 4 or more -----

console.log("\nPolicy: drop the lowest score");
check("3 scores: nothing is dropped", grader.checkGrade("50, 90, 100").dropped, null);
check("3 scores: all of them count", grader.checkGrade("50, 90, 100").average, "80.0");
check("4 scores: the lowest is dropped", grader.checkGrade("50, 90, 100, 80").dropped, 50);
check("4 scores: the average leaves out the lowest", grader.checkGrade("50, 90, 100, 80").average, "90.0");
check("5 scores: only one score is dropped", grader.checkGrade("60, 70, 80, 90, 100").average, "85.0");
check("a tie for lowest drops only one of them", grader.dropLowest([70, 70, 90, 100]), [70, 90, 100]);
check("a tie for lowest still averages correctly", grader.checkGrade("70, 70, 90, 100").average, "86.7");
check("the lowest is found wherever it is in the list", grader.checkGrade("90, 100, 80, 50").dropped, 50);

// ----- Policy rule: round the average to a whole number for the letter grade -----

console.log("\nPolicy: rounding for the letter grade");
check("89.5 rounds up to an A", grader.letterGrade(89.5), "A");
check("89.4 stays a B", grader.letterGrade(89.4), "B");
check("79.5 rounds up to a B", grader.letterGrade(79.5), "B");
check("69.5 rounds up to a C", grader.letterGrade(69.5), "C");
check("59.5 rounds up to a D", grader.letterGrade(59.5), "D");
check("59.4 stays an F", grader.letterGrade(59.4), "F");
check("89, 90 is an A", grader.checkGrade("89, 90").letter, "A");
check("89, 90 still shows the average as 89.5", grader.checkGrade("89, 90").average, "89.5");
check("decimal scores that average exactly 80.5 are a B", grader.checkGrade("80.2, 80.8").letter, "B");
check("the average always shows one decimal place", grader.checkGrade("80, 90").average, "85.0");

// ----- Policy rule: D and F need a retake -----

console.log("\nPolicy: retake needed");
check("A needs no retake", grader.needsRetake("A"), false);
check("B needs no retake", grader.needsRetake("B"), false);
check("C needs no retake", grader.needsRetake("C"), false);
check("D needs a retake", grader.needsRetake("D"), true);
check("F needs a retake", grader.needsRetake("F"), true);
check("an average of 65 needs a retake", grader.checkGrade("60, 70").retake, true);
check("an average of 69.5 is a C, so no retake", grader.checkGrade("69, 70").retake, false);
check("an average of 40 needs a retake", grader.checkGrade("30, 50").retake, true);

// ----- The result -----

console.log("\n" + passed + " passed, " + failed + " failed");
if (failed > 0) {
  process.exit(1);
}
