// ================
// Constant
const arrayLastElementValue = (array) => array[(array.length - 1)]
const arrayLastElementPos = (array) => array.length - 1;

let currentOperations = [];
let singleNumberArray = [];
let numberArray = [];

const operations = document.querySelectorAll(".button.operation");
const numberButtons = document.querySelectorAll(".button.number");
const numberDisplay = document.querySelector("#number-display");
const negativeButton = document.querySelector(".button.negative");
const equalButton = document.querySelector(".button.equal");
const resetButton = document.querySelector(".button.reset");
const decimalButton = document.querySelector(".button.decimal");
const deleteButton = document.querySelector(".button.delete");
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
   
    return Math.round((Number(secondNumber) + Number(firstNumber)) * 1000000000000) /1000000000000;
};

const subtract = function(firstNumber, secondNumber) {
    return Math.round((Number(secondNumber) - Number(firstNumber)) * 1000000000000) /1000000000000;
};

const multiply = function(firstNumber, secondNumber) {
    return Math.round((Number(secondNumber) * Number(firstNumber)) * 1000000000000) /1000000000000;
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
const displayValue = (array) => array.join("");

for (let i of numberButtons) {
    i.addEventListener("click", () => {
	if (singleNumberArray.length <= 12) {
	    singleNumberArray.push(i.textContent);
	};
	numberDisplay.textContent = displayValue(singleNumberArray);
    });
};

document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        if (singleNumberArray.length <= 12) {
	    singleNumberArray.push(event.key);
	};
	numberDisplay.textContent = displayValue(singleNumberArray);
    };
});

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
    } else if (arrayLastElementValue(numberArray) > 0) {
	fooNumber = arrayLastElementValue(numberArray);
	numberArray[arrayLastElementPos(numberArray)] = "-" + fooNumber;
	numberDisplay.textContent = arrayLastElementValue(numberArray);
    } else if (arrayLastElementValue(numberArray) < 0) {
	numberArray[arrayLastElementPos(numberArray)] = arrayLastElementValue(numberArray) * -1;
	numberDisplay.textContent = arrayLastElementValue(numberArray);
    } else {
	console.log("Invalid Input! Must enter number before use");
    };
});

document.addEventListener("keydown", (event) => {
    if (event.key === "n") {
	let fooNumber;
	if (!(isNaN(singleNumberArray[0]))) {
	    singleNumberArray.unshift("-");
	    numberDisplay.textContent = displayValue(singleNumberArray);
	} else if (singleNumberArray[0] == "-") {
	    singleNumberArray.shift();
	    numberDisplay.textContent = displayValue(singleNumberArray);
	} else if (arrayLastElementValue(numberArray) > 0) {
	    fooNumber = arrayLastElementValue(numberArray);
	    numberArray[arrayLastElementPos(numberArray)] = "-" + fooNumber;
	    numberDisplay.textContent = arrayLastElementValue(numberArray);
	} else if (arrayLastElementValue(numberArray) < 0) {
	    numberArray[arrayLastElementPos(numberArray)] = arrayLastElementValue(numberArray) * -1;
	    numberDisplay.textContent = arrayLastElementValue(numberArray);
	} else {
	    console.log("Invalid Input! Must enter number before use");
	};
    }
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
	    numberArray.push(operate(currentOperations[(currentOperations.length - 1)], displayValue(singleNumberArray), arrayLastElementValue(numberArray)));
	    currentOperations.push(i.textContent);
	    console.log(`Current Operation is ${currentOperations}`);
	    numberDisplay.textContent = arrayLastElementValue(numberArray);
	    singleNumberArray = [];
	    numberArray.shift();
	}
    })
};

document.addEventListener("keydown", (event) => {
    if ((event.key === "+") || (event.key === "-") || (event.key === "x") || (event.key === "/")) {
	if ((singleNumberArray.length == 0) && (numberArray.length == 0)) {
	    currentOperations = [];
	    console.log("Invalid Input! Number must be entered before any operation");
	} else if ((singleNumberArray.length > 0) && (numberArray.length == 0)) {
	    currentOperations.push(event.key);
	    numberArray.push(displayValue(singleNumberArray));
	    singleNumberArray = [];
	    console.log("Record operation and update numberArray and reset singleNumberArray");
	    console.log(`Current Operation is: ${currentOperations}`);
	} else if ((singleNumberArray.length == 0) && (numberArray.length >0)) {
	    currentOperations.push (event.key);
	    console.log(`Current opperations: ${currentOperations}`);
	} else {
	    console.log(`Current Operation is ${currentOperations}`);
	    console.log("All numbers present, begin calculation");
	    numberArray.push(operate(currentOperations[(currentOperations.length - 1)], displayValue(singleNumberArray), arrayLastElementValue(numberArray)));
	    currentOperations.push(event.key);
	    console.log(`Current Operation is ${currentOperations}`);
	    numberDisplay.textContent = arrayLastElementValue(numberArray);
	    singleNumberArray = [];
	    numberArray.shift();
	}}
});
	

// Equal Operation
equalButton.addEventListener("click", () => {
    if ((singleNumberArray.length == 0) && (currentOperations.length == 0)) {
	console.log("Invalid Input! Both Numbers and Operation must be present");
    } else if ((singleNumberArray.length > 0) && (numberArray.length > 0)) {
	console.log(`Current Operation is ${currentOperations}`);
	console.log("Begin calculation");
	numberArray.push(operate(currentOperations[(currentOperations.length - 1)], displayValue(singleNumberArray), arrayLastElementValue(numberArray)));
	numberDisplay.textContent = arrayLastElementValue(numberArray);
	singleNumberArray = [];
	currentOperations = [];
    };
});

document.addEventListener("keydown", (event) => {
    if (event.key === "=") {
	if ((singleNumberArray.length == 0) && (currentOperations.length == 0)) {
	console.log("Invalid Input! Both Numbers and Operation must be present");
    } else if ((singleNumberArray.length > 0) && (numberArray.length > 0)) {
	console.log(`Current Operation is ${currentOperations}`);
	console.log("Begin calculation");
	numberArray.push(operate(currentOperations[(currentOperations.length - 1)], displayValue(singleNumberArray), arrayLastElementValue(numberArray)));
	numberDisplay.textContent = arrayLastElementValue(numberArray);
	singleNumberArray = [];
	currentOperations = [];
    }}
});

// Reset Button
resetButton.addEventListener("click", () => {
    currentOperations = [];
    singleNumberArray = [];
    numberArray = [];
    numberDisplay.textContent = displayValue(singleNumberArray);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "c") {
	currentOperations = [];
	singleNumberArray = [];
	numberArray = [];
	numberDisplay.textContent = displayValue(singleNumberArray);
    };
});

// Decimal Function
decimalButton.addEventListener("click", () => {
    let textNumberArray;
    if (numberDisplay.textContent.at((numberDisplay.textContent.length - 1)) == ".") {
	console.log("Invalid Input!");
    } else if ((singleNumberArray.length == 0) && (currentOperations.length == 0)
	       && (numberDisplay.textContent.length == 0)) {
	console.log("Invalid Input!");
    } else if (numberDisplay.textContent == displayValue(singleNumberArray)) {
	singleNumberArray.push(".");
	numberDisplay.textContent = displayValue(singleNumberArray);
    }; 
});

document.addEventListener("keydown", (event) => {
    if (event.key === ".") {
	let textNumberArray;
	if (numberDisplay.textContent.at((numberDisplay.textContent.length - 1)) == ".") {
	    console.log("Invalid Input!");
	} else if ((singleNumberArray.length == 0) && (currentOperations.length == 0)
		   && (numberDisplay.textContent.length == 0)) {
	    console.log("Invalid Input!");
	} else if (numberDisplay.textContent == displayValue(singleNumberArray)) {
	    singleNumberArray.push(".");
	    numberDisplay.textContent = displayValue(singleNumberArray);
	}; 
    }
});

// Delete Function
deleteButton.addEventListener("click", () => {
    let textNumberArray;
    if (numberDisplay.textContent == displayValue(singleNumberArray)) {
	singleNumberArray.pop();
	numberDisplay.textContent = displayValue(singleNumberArray);
    } else if (numberDisplay.textContent == arrayLastElementValue(numberArray)) {
	textNumberArray = String(arrayLastElementValue(numberArray)).split("");
	textNumberArray.pop();
	numberDisplay.textContent = textNumberArray.join("");
	numberArray[arrayLastElementPos(numberArray)] = numberDisplay.textContent;
    };
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
	let textNumberArray;
	if (numberDisplay.textContent == displayValue(singleNumberArray)) {
	    singleNumberArray.pop();
	    numberDisplay.textContent = displayValue(singleNumberArray);
	} else if (numberDisplay.textContent == arrayLastElementValue(numberArray)) {
	    textNumberArray = String(arrayLastElementValue(numberArray)).split("");
	    textNumberArray.pop();
	    numberDisplay.textContent = textNumberArray.join("");
	    numberArray[arrayLastElementPos(numberArray)] = numberDisplay.textContent;
	};
    }
});
