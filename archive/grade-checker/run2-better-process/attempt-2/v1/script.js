// script.js

// Function to validate the input
function validateInput(scores) {
  return scores.every(score => isNumber(score));
}

// Add a friendly message for invalid input
function displayInvalidMessage(message) {
  resultDiv.textContent = message;
}
