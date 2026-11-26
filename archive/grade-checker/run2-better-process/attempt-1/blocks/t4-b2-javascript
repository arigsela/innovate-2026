// Get the input field and button elements
const scoreInput = document.getElementById('score-input');
const calculateButton = document.getElementById('calculate-button');
const averageMessage = document.getElementById('average-message');
const gradeMessage = document.getElementById('grade-message');

// Get the average and grade elements
let average = 0;
let grade = 'A';

// Define the calculateAverageAndGrade function
function calculateAverageAndGrade() {
    // Get the input field and button elements
    const scores = Array.from(scoreInput.value.split(',')).map(Number);
    average = scores.reduce((a, b) => a + b, 0) / scores.length;
    averageMessage.textContent = `Average: ${average.toFixed(1)}`;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    gradeMessage.textContent = `Grade: ${grade}`;
}

// Add an event listener to the button
calculateButton.addEventListener('click', calculateAverageAndGrade);

// Function to clear the input field and display a friendly message
function clearInput() {
    scoreInput.value = '';
    averageMessage.textContent = '';
    gradeMessage.textContent = '';
}
