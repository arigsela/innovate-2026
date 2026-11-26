// Grade Checker: the grading logic.
// Nothing in this file touches the page, so it can be tested with Node.

// ----- Settings from our school's grading policy -----

// The lowest score is dropped when there are this many scores or more.
const SCORES_NEEDED_TO_DROP = 4;

// ----- Reading what the student typed -----

// Splits the typed text at the commas and returns the pieces that are not blank.
function splitScores(text) {
  const pieces = [];
  for (const piece of text.split(",")) {
    const trimmed = piece.trim();
    if (trimmed !== "") {
      pieces.push(trimmed);
    }
  }
  return pieces;
}

// Says whether a piece of text is written as a plain number, like 85 or 92.5.
function isNumber(piece) {
  return /^-?\d+(\.\d+)?$/.test(piece);
}

// Returns a friendly message if a piece is not a valid score, or "" if it is fine.
function checkScore(piece) {
  if (!isNumber(piece)) {
    return '"' + piece + '" is not a number. Please type scores from 0 to 100, separated by commas.';
  }
  const score = Number(piece);
  if (score < 0 || score > 100) {
    return piece + " is out of range. Each score must be from 0 to 100.";
  }
  return "";
}

// ----- Working out the average -----

// Returns the lowest score in a list.
function lowestScore(scores) {
  let lowest = scores[0];
  for (const score of scores) {
    if (score < lowest) {
      lowest = score;
    }
  }
  return lowest;
}

// Returns a copy of the list with one copy of the lowest score removed.
function dropLowest(scores) {
  const kept = scores.slice();
  kept.splice(kept.indexOf(lowestScore(kept)), 1);
  return kept;
}

// Removes the tiny errors computers make with decimals (80.49999999999999 becomes 80.5).
function removeTinyError(number) {
  return Math.round(number * 1000000) / 1000000;
}

// Returns the average of a list of scores.
function average(scores) {
  let sum = 0;
  for (const score of scores) {
    sum = sum + score;
  }
  return removeTinyError(sum / scores.length);
}

// Returns the average as text with one decimal place, like "84.3".
function formatAverage(averageScore) {
  return (Math.round(averageScore * 10) / 10).toFixed(1);
}

// ----- Choosing the grade -----

// Returns the letter grade for an average, rounding to a whole number first (halves round up).
function letterGrade(averageScore) {
  const rounded = Math.round(averageScore);
  if (rounded >= 90) {
    return "A";
  }
  if (rounded >= 80) {
    return "B";
  }
  if (rounded >= 70) {
    return "C";
  }
  if (rounded >= 60) {
    return "D";
  }
  return "F";
}

// Says whether a letter grade means the student needs a retake (D and F are not passing).
function needsRetake(letter) {
  return letter === "D" || letter === "F";
}

// ----- Putting it all together -----

// Grades the typed text and returns everything the page needs to show.
function checkGrade(text) {
  const result = { message: "", average: "", letter: "", dropped: null, retake: false };

  const pieces = splitScores(text);
  if (pieces.length === 0) {
    result.message = "Type your test scores first, separated by commas. For example: 85, 90, 78";
    return result;
  }

  let scores = [];
  for (const piece of pieces) {
    const problem = checkScore(piece);
    if (problem !== "") {
      result.message = problem;
      return result;
    }
    scores.push(Number(piece));
  }

  if (scores.length >= SCORES_NEEDED_TO_DROP) {
    result.dropped = lowestScore(scores);
    scores = dropLowest(scores);
  }

  const averageScore = average(scores);
  result.average = formatAverage(averageScore);
  result.letter = letterGrade(averageScore);
  result.retake = needsRetake(result.letter);
  return result;
}

// ----- Sharing the functions with the tests -----

// Lets Node load these functions for test_grader.js (web browsers skip this part).
if (typeof module !== "undefined") {
  module.exports = {
    splitScores,
    isNumber,
    checkScore,
    lowestScore,
    dropLowest,
    removeTinyError,
    average,
    formatAverage,
    letterGrade,
    needsRetake,
    checkGrade,
  };
}
