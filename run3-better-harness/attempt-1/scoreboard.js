// House Cup scoring logic.
// These functions only work with numbers and text. They never touch the page,
// so index.html can use them and test_scoreboard.js can test them.

// ----- Section: the houses and the Spirit Week limits -----

// The four houses, in the order they are always shown, with their colours.
const HOUSES = [
  { name: "Gryffindor", main: "#740001", second: "#D3A625" },
  { name: "Hufflepuff", main: "#FFDB00", second: "#000000" },
  { name: "Ravenclaw", main: "#0E1A40", second: "#946B2D" },
  { name: "Slytherin", main: "#1A472A", second: "#AAAAAA" }
];

// The biggest number of points one award can give.
const MAX_AWARD = 50;

// A bar is full at this many points, until a house scores more than this.
const FULL_BAR_POINTS = 100;

// ----- Section: changing the scores -----

// Gives back a fresh list of scores with every house on 0.
function startingScores() {
  return HOUSES.map(function () {
    return 0;
  });
}

// Gives back a new list of scores with points added to one house, never below 0.
function addPoints(scores, houseIndex, amount) {
  const newScores = scores.slice();
  newScores[houseIndex] = Math.max(0, scores[houseIndex] + amount);
  return newScores;
}

// Gives back a new list of scores with every house back on 0.
function resetScores() {
  return startingScores();
}

// ----- Section: checking a typed award -----

// Gives back a friendly message if the typed award is not allowed, or "" if it is fine.
function checkAward(typedText) {
  const text = String(typedText).trim();
  const isOnlyDigits = /^[0-9]+$/.test(text);
  if (!isOnlyDigits || Number(text) === 0) {
    return "Please type a whole number bigger than 0, like 5 or 20.";
  }
  if (Number(text) > MAX_AWARD) {
    return "One award can be at most " + MAX_AWARD + " points. Please type " + MAX_AWARD + " or less.";
  }
  return "";
}

// ----- Section: working out the leader -----

// Gives back the highest score in the list.
function highestScore(scores) {
  return Math.max.apply(null, scores);
}

// Counts how many houses have exactly this many points.
function countHousesWithScore(scores, points) {
  return scores.filter(function (score) {
    return score === points;
  }).length;
}

// Gives back "Leader", "Tied" or "" for one house.
function statusWord(scores, houseIndex) {
  const highest = highestScore(scores);
  if (highest === 0 || scores[houseIndex] !== highest) {
    return "";
  }
  if (countHousesWithScore(scores, highest) > 1) {
    return "Tied";
  }
  return "Leader";
}

// ----- Section: the length of a bar -----

// Gives back how full a house's bar is, as a number from 0 to 100.
function barPercent(scores, houseIndex) {
  const fullBar = Math.max(FULL_BAR_POINTS, highestScore(scores));
  return (scores[houseIndex] / fullBar) * 100;
}

// ----- Section: saving and loading -----

// Turns the list of scores into text that can be saved.
function scoresToText(scores) {
  return JSON.stringify(scores);
}

// Says whether a saved value is a proper list of scores, one whole number per house.
function isGoodScoreList(saved) {
  if (!Array.isArray(saved) || saved.length !== HOUSES.length) {
    return false;
  }
  return saved.every(function (score) {
    return Number.isInteger(score) && score >= 0;
  });
}

// Turns saved text back into a list of scores, or starting scores if the text is missing or broken.
function scoresFromText(savedText) {
  let saved;
  try {
    saved = JSON.parse(savedText);
  } catch (error) {
    return startingScores();
  }
  if (!isGoodScoreList(saved)) {
    return startingScores();
  }
  return saved;
}

// ----- Section: sharing these functions with the tests -----

// Node uses "module" to share code. A web page does not have it, so this is skipped there.
if (typeof module !== "undefined") {
  module.exports = {
    HOUSES: HOUSES,
    MAX_AWARD: MAX_AWARD,
    FULL_BAR_POINTS: FULL_BAR_POINTS,
    startingScores: startingScores,
    addPoints: addPoints,
    resetScores: resetScores,
    checkAward: checkAward,
    highestScore: highestScore,
    countHousesWithScore: countHousesWithScore,
    statusWord: statusWord,
    barPercent: barPercent,
    scoresToText: scoresToText,
    isGoodScoreList: isGoodScoreList,
    scoresFromText: scoresFromText
  };
}
