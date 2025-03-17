const restArray = (array) => array.slice(1, array.length);

let number1;
let number2;
let operation;

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


