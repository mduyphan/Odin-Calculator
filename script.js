// ================
// Constant
const restArray = (array) => array.slice(1, array.length);

let currentOperation;
let number1;
let number2;


const operations = document.querySelectorAll(".button.operation");
const numberButtons = document.querySelectorAll(".number-boxes .button");
const numberDisplay = document.querySelector("#number-display");
const negativeButton = document.querySelector(".button.negative");
const equalButton = document.querySelector(".button.equal");
const resetButton = document.querySelector(".button.reset");
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
   
    return Number(firstNumber) + Number(secondNumber);
};

const subtract = function(firstNumber, secondNumber) {
    return Number(firstNumber) - Number(secondNumber);
};

const multiply = function(firstNumber, secondNumber) {
    return Number(firstNumber) * Number(secondNumber);
};

const divide = function(firstNumber, secondNumber) {
    return Number(firstNumber) / Number(secondNumber);
};

// Operation Number Number -> Number
// Return the result between number1 and number2 by math operation
const operate = (operation, number1, number2) => {
    switch (operation) {
    case "+":
	return add(number1, number2);
    case "-":
	return subtract(number1, number2);
    case "x":
	return multiply(number1, number2);
    case "/":
	return divide(number1, number2);
    }
};

// clickEvent -> "number-display"Element
// Display the clicked numbers on screen
for (let i of numberButtons) {
    i.addEventListener("click", () => {
	if ((numberDisplay.textContent.length <= 13) &&
	    ((number1 == null) || !(number2 == null))) {
	    numberDisplay.textContent += `${i.textContent}`;
	} else {
	    numberDisplay.textContent = `${i.textContent}`;
	    number2 += numberDisplay.textContent;
	}
    });
};

// clickEvent -> "number-display"Element
// Append Negative sign at the start of curren number value or Remove it from current number on click
negativeButton.addEventListener("click", () => {
    if (!isNaN(Number(numberDisplay.textContent.at(0)))) {
	numberDisplay.textContent = `-${numberDisplay.textContent}`;
	number1 = numberDisplay.textContent;
    } else {
	numberDisplay.textContent = numberDisplay.textContent.slice(1)
	number1 = numberDisplay.textContent;};
});

// clickEvent ->
// Perform calculation base on clicked operation button
for (let i of operations) {
    i.addEventListener("click", () => {
	if (currentOperation == null) {
	    number1 = numberDisplay.textContent;
	    currentOperation = i.textContent;
	// } else if (!(currentOperation == null)) {
	//     currentOperation = i.textContent;
	} else if (!(number1 == null)) {
	    number2 = number1;
	    number1 = numberDisplay.textContent;
	    numberDisplay.textContent = `${operate(currentOperation, number1, number2)}`;
	    currentOperation = null;
	    number1 = numberDisplay.textContent;
	    number2 = null;
	};
    })
};

equalButton.addEventListener("click", () => {
    if (!(currentOperation == null)) {
	numberDisplay.textContent = `${operate(currentOperation, number1, number2)}`;
	currentOperation = null;
	number1 = numberDisplay.textContent;
	number2 = null;
    }
});

resetButton.addEventListener("click", () => {
    numberDisplay.textContent = null;
    currentOperation = null;
    number1 = null;
    number2 = null;
});
