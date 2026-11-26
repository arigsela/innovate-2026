// House Cup scoring logic.
// These functions only work with numbers and text. They never touch the page,
// so they can be tested with: node test_scoreboard.js

// --- The houses, in the order they are always shown ---
const HOUSES = [
  { name: "Gryffindor", mainColour: "#740001", secondColour: "#D3A625" },
  { name: "Hufflepuff", mainColour: "#FFDB00", secondColour: "#000000" },
  { name: "Ravenclaw", mainColour: "#0E1A40", secondColour: "#946B2D" },
  { name: "Slytherin", mainColour: "#1A472A", secondColour: "#AAAAAA" }
];

// --- Spirit Week rule: the most points one award can give ---
const MAX_AWARD = 50;

// --- Starting and resetting ---

// Makes the starting list of points: 0 for every house.
function startScores() {
  return HOUSES.map(function () {
    return 0;
  });
}

// Sets every house back to 0 points.
function resetScores() {
  return startScores();
}

// --- Changing points ---

// Returns a new list of points with the amount added to one house, never below 0.
function addPoints(scores, houseIndex, amount) {
  const newScores = scores.slice();
  newScores[houseIndex] = Math.max(0, scores[houseIndex] + amount);
  return newScores;
}

// Returns a friendly message if the typed award is not allowed, or "" if it is fine.
function getAwardProblem(typedText) {
  const points = Number(typedText);
  if (typedText.trim() === "" || !Number.isInteger(points) || points <= 0) {
    return "Please type a whole number greater than 0, like 5 or 20.";
  }
  if (points > MAX_AWARD) {
    return "One award can be at most " + MAX_AWARD + " points. Please type " + MAX_AWARD + " or less.";
  }
  return "";
}

// --- Leader and ties ---

// Finds the highest number of points any house has.
function getTopScore(scores) {
  return Math.max.apply(null, scores);
}

// Returns "Leader", "Tied" or "" for one house.
function getStatus(scores, houseIndex) {
  const topScore = getTopScore(scores);
  if (topScore === 0 || scores[houseIndex] !== topScore) {
    return "";
  }
  const housesAtTop = scores.filter(function (points) {
    return points === topScore;
  }).length;
  if (housesAtTop > 1) {
    return "Tied";
  }
  return "Leader";
}

// --- Bar length ---

// Returns how many points a full bar stands for: 100, or the next 100 above the top score.
function getFullBarPoints(scores) {
  return Math.max(100, Math.ceil(getTopScore(scores) / 100) * 100);
}

// Returns how long one house's bar should be, as a percentage from 0 to 100.
function getBarPercent(scores, houseIndex) {
  return (scores[houseIndex] * 100) / getFullBarPoints(scores);
}

// --- Saved points ---

// Turns saved text back into a list of points, or starts at 0 if the text is missing or broken.
function readSavedScores(savedText) {
  let saved;
  try {
    saved = JSON.parse(savedText);
  } catch (error) {
    return startScores();
  }
  if (!Array.isArray(saved) || saved.length !== HOUSES.length) {
    return startScores();
  }
  for (const points of saved) {
    if (!Number.isInteger(points) || points < 0) {
      return startScores();
    }
  }
  return saved;
}

// --- Sharing with the tests ---
// Node uses this to load the functions. A web browser skips it.
if (typeof module !== "undefined") {
  module.exports = {
    HOUSES: HOUSES,
    MAX_AWARD: MAX_AWARD,
    startScores: startScores,
    resetScores: resetScores,
    addPoints: addPoints,
    getAwardProblem: getAwardProblem,
    getTopScore: getTopScore,
    getStatus: getStatus,
    getFullBarPoints: getFullBarPoints,
    getBarPercent: getBarPercent,
    readSavedScores: readSavedScores
  };
}
