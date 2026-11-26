const form = document.getElementById('grade-form');
const studentNameInput = document.getElementById('student-name');
const courseNameInput = document.getElementById('course-name');
const gradeRangeInput = document.getElementById('grade-range');
const calculateButton = document.getElementById('calculate-button');

calculateButton.addEventListener('click', calculateGrade);

function calculateGrade() {
    const studentName = studentNameInput.value.trim();
    const courseName = courseNameInput.value.trim();
    const gradeRange = parseFloat(gradeRangeInput.value);
    
    if (studentName && courseName && gradeRange > 0 && gradeRange < 101) {
        const grade = (gradeRange / 100) * 100;
        
        const resultElement = document.getElementById('result');
        resultElement.textContent = `Grade for ${studentName} in ${courseName}: ${grade}%`;
    } else {
        alert('Please enter valid input');
    }
}
