let num1 = 0;
let num2 = 0;
let operator = null;
let result = null;

document.getElementById("calculator").addEventListener("submit", calculate);

function calculate(event) {
    event.preventDefault();
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    operator = document.getElementById("operator").value;
    result = calculateNumbers(num1, num2, operator);
    displayResult();
}

function calculateNumbers(num1, num2, operator) {
    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Error: Invalid operator!";
    }
}

function displayResult() {
    document.getElementById("output").innerHTML = `Result: ${result}`;
}
