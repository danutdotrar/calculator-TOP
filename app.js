let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';

const inputDisplay = document.querySelector('.display--screen');
const numberBtns = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal-sign');


// Functions
const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// Create a new function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
    a = parseInt(a)
    b = parseInt(b)
    
    switch(operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return substract(a, b)
            break;
        case '×':
            return multiply(a, b)
            break;
        case '÷':
            if (b === 0) return "Can't divide by zero";
            return divide(a, b)
            break;
        }
}
                
// Populate display when click number
numberBtns.forEach(el=> el.addEventListener('click', displayNumber));

// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.
function displayNumber(number) {
    // If the operator is not set yet, read first number
    if (operator === '') {
        firstNum += number.target.innerText;
        inputDisplay.value = firstNum;
        // Read second number
    } else {
        secondNum += number.target.innerText;
        inputDisplay.value = secondNum;
    }
}



// Operators ForEach
operators.forEach(op => op.addEventListener('click', evaluate));

function evaluate(e) {
    // If the operator is not equal, then operator will be the current value
    if (e.target.innerText !== '=') {
        operator = e.target.value;

        console.log(firstNum);
        console.log(operator);
        inputDisplay.value = operator;
        // If equal button is pressed
    } else {
        result = (operate(operator, firstNum, secondNum));
        inputDisplay.value = result;
    }
}


