// ============================================================
// House Cup scoring logic.
// These functions only work with numbers and text. They never
// touch the page, so the browser and the tests can both use them.
// ============================================================

// ----- The houses and the Spirit Week numbers -----

// The four houses, in the school's order, with their colours.
const HOUSES = [
  { name: "Gryffindor", mainColour: "#740001", secondColour: "#D3A625" },
  { name: "Hufflepuff", mainColour: "#FFDB00", secondColour: "#000000" },
  { name: "Ravenclaw", mainColour: "#0E1A40", secondColour: "#946B2D" },
  { name: "Slytherin", mainColour: "#1A472A", secondColour: "#AAAAAA" }
];

// How many points the +10 and -10 buttons change.
const STEP = 10;

// The most points one award can give.
const MAX_AWARD = 50;

// How many points a full bar stands for at the start.
const BAR_STEP = 100;

// ----- Changing points -----

// Makes a fresh list of scores: one 0 for each house.
function startScores() {
  const scores = [];
  for (let i = 0; i < HOUSES.length; i++) {
    scores.push(0);
  }
  return scores;
}

// Adds a change to some points and never lets the answer go below 0.
function addPoints(points, change) {
  const total = points + change;
  if (total < 0) {
    return 0;
  }
  return total;
}

// Sets every house back to 0.
function resetScores() {
  return startScores();
}

// ----- Checking a typed award -----

// Says whether the typed text is a whole number greater than 0.
function isWholeNumberAboveZero(text) {
  const onlyDigits = /^[0-9]+$/.test(text.trim());
  return onlyDigits && Number(text) > 0;
}

// Gives the friendly message for a typed award, or "" when the award is fine.
function awardMessage(text) {
  if (!isWholeNumberAboveZero(text)) {
    return "Please type a whole number from 1 to " + MAX_AWARD + ", like 5 or 20.";
  }
  if (Number(text) > MAX_AWARD) {
    return "One award can be at most " + MAX_AWARD + " points. Please type " + MAX_AWARD + " or less.";
  }
  return "";
}

// Gives the points after an award, or the same points when the award is not allowed.
function awardPoints(points, text) {
  if (awardMessage(text) !== "") {
    return points;
  }
  return addPoints(points, Number(text));
}

// ----- Leader and Tied -----

// Finds the highest score in the list.
function highestScore(scores) {
  let highest = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }
  return highest;
}

// Counts how many houses have a given score.
function countScore(scores, score) {
  let count = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === score) {
      count = count + 1;
    }
  }
  return count;
}

// Works out the word for each house: "Leader", "Tied", or "" for no word.
function houseLabels(scores) {
  const highest = highestScore(scores);
  let word = "Leader";
  if (countScore(scores, highest) > 1) {
    word = "Tied";
  }
  const labels = [];
  for (let i = 0; i < scores.length; i++) {
    if (highest > 0 && scores[i] === highest) {
      labels.push(word);
    } else {
      labels.push("");
    }
  }
  return labels;
}

// ----- Words and bar lengths -----

// Picks "point" for exactly 1 and "points" for everything else.
function pointsWord(points) {
  if (points === 1) {
    return "point";
  }
  return "points";
}

// Works out how many points a full bar stands for: 100, then 200, 300 and so on.
function fullBarPoints(scores) {
  const highest = highestScore(scores);
  if (highest <= BAR_STEP) {
    return BAR_STEP;
  }
  return Math.ceil(highest / BAR_STEP) * BAR_STEP;
}

// Works out how long a bar is, as a percent of the full bar.
function barPercent(points, fullBar) {
  return (points / fullBar) * 100;
}

// ----- Saving and loading -----

// Turns the scores into text so the browser can save them.
function scoresToText(scores) {
  return JSON.stringify(scores);
}

// Says whether a saved value is a proper list of scores, one per house.
function isScoreList(value) {
  if (!Array.isArray(value) || value.length !== HOUSES.length) {
    return false;
  }
  for (let i = 0; i < value.length; i++) {
    if (!Number.isInteger(value[i]) || value[i] < 0) {
      return false;
    }
  }
  return true;
}

// Turns saved text back into scores, or fresh scores when the text is missing or broken.
function textToScores(text) {
  let saved;
  try {
    saved = JSON.parse(text);
  } catch (error) {
    return startScores();
  }
  if (!isScoreList(saved)) {
    return startScores();
  }
  return saved;
}

// ----- Sharing with the tests -----

// Lets test_scoreboard.js use these functions in Node. The browser skips this part.
if (typeof module !== "undefined") {
  module.exports = {
    HOUSES, STEP, MAX_AWARD, BAR_STEP,
    startScores, addPoints, resetScores,
    isWholeNumberAboveZero, awardMessage, awardPoints,
    highestScore, countScore, houseLabels,
    pointsWord, fullBarPoints, barPercent,
    scoresToText, isScoreList, textToScores
  };
}
