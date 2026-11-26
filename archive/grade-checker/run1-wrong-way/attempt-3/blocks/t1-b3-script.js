const studentNameInput = document.getElementById('student-name');
const courseNameInput = document.getElementById('course-name');
const gradeInput = document.getElementById('grade');
const resultParagraph = document.getElementById('result');

const calculateGrade = (grade) => {
    // Simple grade calculator that returns a grade from 0 to 100
    if (grade >= 0 && grade <= 100) {
        if (grade >= 90) {
            return 'A';
        } else if (grade >= 80) {
            return 'B';
        } else if (grade >= 70) {
            return 'C';
        } else if (grade >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    } else {
        return 'Invalid grade';
    }
}

const formSubmitHandler = () => {
    const studentName = studentNameInput.value.trim();
    const courseName = courseNameInput.value.trim();
    const grade = parseFloat(gradeInput.value);

    if (studentName && courseName && grade) {
        const calculatedGrade = calculateGrade(grade);
        resultParagraph.innerText = `Grade for ${courseName}: ${calculatedGrade}`;
        resultParagraph.style.color = 'green';
    } else {
        resultParagraph.innerText = 'Please fill in all fields';
        resultParagraph.style.color = 'red';
    }
}

document.getElementById('grade-form').addEventListener('submit', formSubmitHandler);

// Test the grade calculator
console.log(calculateGrade(80));
console.log(calculateGrade(92));
console.log(calculateGrade(67));
