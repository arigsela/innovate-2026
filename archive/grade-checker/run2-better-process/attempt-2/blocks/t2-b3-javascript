// script.js

// Get the input field and button elements
const scoresInput = document.getElementById('scores-input');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');
const gradeDiv = document.getElementById('grade');

// Function to calculate the average
function calculateAverage(scores) {
  // Check if all scores are valid
  if (scores.every(score => isNumber(score))) {
    // Calculate the average
    const sum = scores.reduce((a, b) => a + b, 0);
    return sum / scores.length;
  } else {
    return 'Invalid scores. Please enter numbers from 0 to 100.';
  }
}

// Function to check if a value is a number
function isNumber(value) {
  return !isNaN(parseFloat(value)) && value % 1 === 0;
}

// Function to calculate the grade based on the average
function calculateGrade(avg) {
  if (avg >= 90) return 'A';
  else if (avg >= 80) return 'B';
  else if (avg >= 70) return 'C';
  else if (avg >= 60) return 'D';
  else return 'F';
}

// Add an event listener to the calculate button
calculateBtn.addEventListener('click', () => {
  // Get the input scores
  const scores = scoresInput.value.split(',').map(Number);

  // Check if the input is valid
  if (scores.length === 0) {
    resultDiv.textContent = 'Please enter scores separated by commas.';
  } else if (scores.some(score => score < 0 || score > 100)) {
    resultDiv.textContent = 'Invalid scores. Please enter numbers from 0 to 100.';
  } else {
    // Calculate the average
    const average = calculateAverage(scores);

    // Display the result
    resultDiv.textContent = `Average: ${average.toFixed(1)}`;
    // Display the grade
    gradeDiv.textContent = calculateGrade(average);
  }
});
