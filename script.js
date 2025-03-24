// ================
// Constant
const restArray = (array) => array.slice(1, array.length);

let currentOperations = [];
let singleNumberArray = [];
let numberArray = [];

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
// Return the result between singleNumberArray and number2 by math operation
const operate = (operation, singleNumberArray, number2) => {
    switch (operation) {
    case "+":
	return add(singleNumberArray, number2);
    case "-":
	return subtract(singleNumberArray, number2);
    case "x":
	return multiply(singleNumberArray, number2);
    case "/":
	return divide(singleNumberArray, number2);
    }
};

// clickEvent -> "number-display"Element
// Display the clicked numbers on screen
let value1;
let value2;
const displayValue = (array) => array.join("");
for (let i of numberButtons) {
    i.addEventListener("click", () => {
	if (singleNumberArray.length <= 12) {
	    singleNumberArray.push(i.textContent);
	};
	numberDisplay.textContent =  displayValue(singleNumberArray);
    });
};
		      

// clickEvent -> "number-display"Element
// Append Negative sign at the start of current number value or Remove it from current number on click
negativeButton.addEventListener("click", () => {
    let fooNumber;
    if (!(isNaN(singleNumberArray[0]))) {
	singleNumberArray.unshift("-");
	numberDisplay.textContent = displayValue(singleNumberArray);
    } else if (singleNumberArray[0] == "-") {
	singleNumberArray.shift();
	numberDisplay.textContent = displayValue(singleNumberArray);
    } else if (numberArray[(numberArray.length - 1)] > 0) {
	fooNumber = numberArray[(numberArray.length - 1)];
	numberArray[(numberArray.length - 1)] = "-" + fooNumber;
	numberDisplay.textContent = numberArray[(numberArray.length - 1)];
    } else if (numberArray[(numberArray.length - 1)] < 0) {
	numberArray[(numberArray.length - 1)] = numberArray[(numberArray.length - 1)] * -1;
	numberDisplay.textContent = numberArray[(numberArray.length - 1)];
    } else {
	console.log("Invalid Input! Must enter number before use");
    };
});
			       

// clickEvent -> Operation
// Perform calculation base on clicked operation button
for (let i of operations) {
    i.addEventListener("click", () => {
	if ((singleNumberArray.length == 0) && (numberArray.length == 0)) {
	    currentOperations = [];
	    console.log("Invalid Input! Number must be entered before any operation");
	} else if ((singleNumberArray.length > 0) && (numberArray.length == 0)) {
	    currentOperations.push(i.textContent);
	    numberArray.push(displayValue(singleNumberArray));
	    singleNumberArray = [];
	    console.log("Record operation and update numberArray and reset singleNumberArray");
	    console.log(`Current Operation is: ${currentOperations}`);
	} else if ((singleNumberArray.length == 0) && (numberArray.length >0)) {
	    currentOperations.push (i.textContent);
	    console.log(`Current opperations: ${currentOperations}`);
	} else {
	    console.log(`Current Operation is ${currentOperations}`);
	    console.log("All numbers present, begin calculation");
	    numberArray.push(operate(currentOperations[(currentOperations.length - 1)], displayValue(singleNumberArray), numberArray[(numberArray.length - 1)]));
	    currentOperations.push(i.textContent);
	    console.log(`Current Operation is ${currentOperations}`);
	    numberDisplay.textContent = numberArray[(numberArray.length - 1)];
	    singleNumberArray = [];
	    numberArray.shift();
	}
    })
};

equalButton.addEventListener("click", () => {
    if ((singleNumberArray.length == 0) && (currentOperations.length == 0)) {
	console.log("Invalid Input! Both Numbers and Operation must be present");
    } else if ((singleNumberArray.length > 0) && (numberArray.length > 0)) {
	console.log(`Current Operation is ${currentOperations}`);
	console.log("Begin calculation");
	numberArray.push(operate(currentOperations[(currentOperations.length - 1)], displayValue(singleNumberArray), numberArray[(numberArray.length - 1)]));
	numberDisplay.textContent = numberArray[(numberArray.length - 1)];
	singleNumberArray = [];
	currentOperations = [];
    };
});

resetButton.addEventListener("click", () => {
    currentOperations = [];
    singleNumberArray = [];
    numberArray = [];
    numberDisplay.textContent = displayValue(singleNumberArray);
});
