// ================
// Constant
const restArray = (array) => array.slice(1, array.length);

let currentOperation = [];
let numberArray = [];
let number2 = [];


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
    return Number(secondNumber) - Number(firstNumber);
};

const multiply = function(firstNumber, secondNumber) {
    return Number(firstNumber) * Number(secondNumber);
};

const divide = function(firstNumber, secondNumber) {
    return  Math.round((Number(secondNumber) / Number(firstNumber)) * 1000000000000) /1000000000000;
};

// Operation Number Number -> Number
// Return the result between numberArray and number2 by math operation
const operate = (operation, numberArray, number2) => {
    switch (operation) {
    case "+":
	return add(numberArray, number2);
    case "-":
	return subtract(numberArray, number2);
    case "x":
	return multiply(numberArray, number2);
    case "/":
	return divide(numberArray, number2);
    }
};

// clickEvent -> "number-display"Element
// Display the clicked numbers on screen
let value1;
let value2;
for (let i of numberButtons) {
    i.addEventListener("click", () => {
	if (numberArray.length <= 12) {
	    numberArray.push(i.textContent);
	};
	value1 = numberArray.join("");
	numberDisplay.textContent =  value1;
    });
};
		      

// clickEvent -> "number-display"Element
// Append Negative sign at the start of curren number value or Remove it from current number on click
negativeButton.addEventListener("click", () => {
    if (!(numberArray[0] == "-")) {
	numberArray.unshift("-");
    } else {
	numberArray.shift();
    };
    value1 = numberArray.join("");
    numberDisplay.textContent = value1;
});

// clickEvent -> Operation
// Perform calculation base on clicked operation button
for (let i of operations) {
    i.addEventListener("click", () => {
	if (currentOperation.length == 0) {
	    currentOperation.push(i.textContent);
	    console.log(currentOperation[0]);
	} else {
	    currentOperation[0] = i.textContent;
	    console.log(currentOperation[0]);
	}
	if (value2 == null) {
	    value2 = value1;
	    numberArray = [];
	} else {
	    value2 = operate(currentOperation[0], value1, value2);
	    numberDisplay.textContent = value2;
	    numberArray = [];
	    currentOperation = [];
	};;
    });

};

equalButton.addEventListener("click", () => {
    if (!(value2 == null)) {
	value2 = operate(currentOperation[0], value1, value2);
	numberDisplay.textContent = value2;
	value1 = value2;
	numberArray = [];
	currentOperation = [];
	value2 = null;
    } else numberDisplay.textContent; 
});

resetButton.addEventListener("click", () => {
    numberDisplay.textContent = null;
    currentOperation = [];
    numberArray = [];
    value2 = null;
});
