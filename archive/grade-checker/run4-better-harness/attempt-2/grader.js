// Grade Checker: the grading logic.
// These functions only work with text and numbers. They never touch the page.

// Splits the typed text at the commas and returns the pieces that are not blank.
function splitScores(text) {
  const pieces = text.split(",");
  const result = [];
  for (const piece of pieces) {
    const trimmed = piece.trim();
    if (trimmed !== "") {
      result.push(trimmed);
    }
  }
  return result;
}

// Returns a friendly message if a piece is not a score from 0 to 100, or "" if it is fine.
function checkScore(piece) {
  const number = Number(piece);
  if (Number.isNaN(number)) {
    return '"' + piece + '" is not a number. Please type scores with commas between them, like 85, 90, 78.';
  }
  if (number < 0 || number > 100) {
    return piece + " is not a score from 0 to 100. Please check it and try again.";
  }
  return "";
}

// Returns the lowest score in a list.
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
  const copy = scores.slice();
  copy.splice(copy.indexOf(scoreToRemove), 1);
  return copy;
}

// Returns the average of a list of scores.
function findAverage(scores) {
  let total = 0;
  for (const score of scores) {
    total = total + score;
  }
  return total / scores.length;
}

// Returns the average as text with one decimal place, like "84.3".
function formatAverage(average) {
  const rounded = Math.round(average * 10) / 10;
  return rounded.toFixed(1);
}

// Returns the letter grade for an average, rounded to a whole number first (halves round up).
function letterGrade(average) {
  const rounded = Math.round(average);
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

// Returns true when the letter grade is not passing (D or F), so a retake is needed.
function needsRetake(letter) {
  return letter === "D" || letter === "F";
}

// Works out everything the page shows for the typed text: a message, or the average, grade, dropped score and retake.
function gradeScores(text) {
  const result = {
    message: "",
    averageText: "",
    letter: "",
    dropped: null,
    retakeNeeded: false
  };

  // Empty box: ask for scores.
  const pieces = splitScores(text);
  if (pieces.length === 0) {
    result.message = "Please type your test scores first, for example: 85, 90, 78";
    return result;
  }

  // Stop at the first piece that is not a score from 0 to 100.
  let scores = [];
  for (const piece of pieces) {
    const message = checkScore(piece);
    if (message !== "") {
      result.message = message;
      return result;
    }
    scores.push(Number(piece));
  }

  // School policy: with 4 or more scores, drop the single lowest one.
  if (scores.length >= 4) {
    result.dropped = findLowest(scores);
    scores = removeOne(scores, result.dropped);
  }

  const average = findAverage(scores);
  result.averageText = formatAverage(average);
  result.letter = letterGrade(average);
  result.retakeNeeded = needsRetake(result.letter);
  return result;
}

// Lets test_grader.js load these functions when run with Node. Browsers skip this part.
if (typeof module !== "undefined") {
  module.exports = {
    splitScores: splitScores,
    checkScore: checkScore,
    findLowest: findLowest,
    removeOne: removeOne,
    findAverage: findAverage,
    formatAverage: formatAverage,
    letterGrade: letterGrade,
    needsRetake: needsRetake,
    gradeScores: gradeScores
  };
}
