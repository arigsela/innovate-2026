// grader.js: the grading logic for Grade Checker.
// These functions only work with text and numbers. They never touch the page.

// Splits the typed text at each comma and trims the spaces off every piece.
function splitScores(text) {
  const pieces = text.split(",");
  const trimmed = [];
  for (const piece of pieces) {
    trimmed.push(piece.trim());
  }
  return trimmed;
}

// Says whether one piece of text is a plain number from 0 to 100.
function isValidScore(piece) {
  // The pattern means: digits, then optionally a dot and more digits (like 85 or 92.5).
  const looksLikeNumber = /^\d+(\.\d+)?$/.test(piece);
  return looksLikeNumber && Number(piece) <= 100;
}

// Finds the lowest score in a list.
function findLowest(scores) {
  let lowest = scores[0];
  for (const score of scores) {
    if (score < lowest) {
      lowest = score;
    }
  }
  return lowest;
}

// Returns a copy of the list with one copy of the given score taken out.
function removeOne(scores, scoreToRemove) {
  const kept = scores.slice();
  kept.splice(kept.indexOf(scoreToRemove), 1);
  return kept;
}

// Averages a list of scores, tidying away tiny computer math errors (79.49999999 becomes 79.5).
function averageOf(scores) {
  let total = 0;
  for (const score of scores) {
    total = total + score;
  }
  const average = total / scores.length;
  return Math.round(average * 1000000) / 1000000;
}

// Rounds an average to the nearest whole number, with halves rounding up (89.5 becomes 90).
function roundToWhole(average) {
  return Math.round(average);
}

// Turns an average into text with one decimal place (84.333 becomes "84.3").
function formatAverage(average) {
  return (Math.round(average * 10) / 10).toFixed(1);
}

// Picks the letter grade for a whole-number average.
function letterFor(wholeAverage) {
  if (wholeAverage >= 90) {
    return "A";
  }
  if (wholeAverage >= 80) {
    return "B";
  }
  if (wholeAverage >= 70) {
    return "C";
  }
  if (wholeAverage >= 60) {
    return "D";
  }
  return "F";
}

// Says whether a letter grade means the student needs a retake (below 70 is not passing).
function needsRetake(letter) {
  return letter === "D" || letter === "F";
}

// Does the whole job: takes the typed text and returns either a message or the grade details.
function gradeScores(text) {
  if (text.trim() === "") {
    return { message: "Please type your test scores first, for example: 85, 90, 78" };
  }

  const pieces = splitScores(text);
  const scores = [];
  for (const piece of pieces) {
    if (piece === "") {
      return { message: "It looks like a score is missing. Check for an extra comma." };
    }
    if (!isValidScore(piece)) {
      return { message: '"' + piece + '" is not a score I can use. Each score must be a number from 0 to 100.' };
    }
    scores.push(Number(piece));
  }

  // School policy: with 4 or more scores, the single lowest one is dropped.
  let dropped = null;
  let keptScores = scores;
  if (scores.length >= 4) {
    dropped = findLowest(scores);
    keptScores = removeOne(scores, dropped);
  }

  const average = averageOf(keptScores);
  const letter = letterFor(roundToWhole(average));

  return {
    message: null,
    averageText: formatAverage(average),
    letter: letter,
    dropped: dropped,
    retake: needsRetake(letter)
  };
}

// Lets test_grader.js load these functions in Node. The browser skips this part.
if (typeof module !== "undefined") {
  module.exports = {
    splitScores,
    isValidScore,
    findLowest,
    removeOne,
    averageOf,
    roundToWhole,
    formatAverage,
    letterFor,
    needsRetake,
    gradeScores
  };
}
