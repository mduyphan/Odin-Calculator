// ================
// Constant
const restArray = (array) => array.slice(1, array.length);

let number1;
let number2;
let operation;

const numberButtons = document.querySelectorAll(".number-boxes .button");
const numberDisplay = document.querySelector("#number-display");
const negativeButton = document.querySelector(".button.negative");
// ================
// Data Definition
// Operation is one of:
//	- "+"
//	- "-"
//	- "*"
//	- "/"

// ================
// Function

// Number Number -> Number
// Basic Math Operations Functions
const add = function(firstNumber, secondNumber) {
   
    return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
};

const multiply = function(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
};

const divide = function(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
};

// Operation Number Number -> Number
// Return the result between number1 and number2 by math operation
const operate = (operation, number1, number2) => {
    switch (operation) {
    case "+":
	return add(number1, number2);
    case "-":
	return subtract(number1, number2);
    case "*":
	return multiply(number1, number2);
    case "/":
	return divide(number1, number2);
    }
};

// clickEvent -> "number-display"Element
// Display the clicked numbers on screen
for (let i of numberButtons) {
    i.addEventListener("click", () => {
	numberDisplay.textContent += `${i.textContent}`;
    });
};

// clickEvent -> "number-display"Element
// Append Negative sign at the start of curren number value or Remove it from current number on click
negativeButton.addEventListener("click", () => {
    if (!isNaN(Number(numberDisplay.textContent.at(0)))) {
	numberDisplay.textContent = `-${numberDisplay.textContent}`;
    } else {numberDisplay.textContent = numberDisplay.textContent.slice(1)};
});
