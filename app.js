const inputDisplay = document.querySelector('.display--screen');

const numberBtns = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal-sign');


// Populate display when click number
numberBtns.forEach(el=> el.addEventListener('click', displayNumber));


// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// Functions
const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// Create a new function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers.
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)

    switch(operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return substract(a, b)
            break;
        case '*':
            return multiply(a, b)
            break;
        case '/':
            if (b === 0) return "Can't divide by zero";
            return divide(a, b)
            break;
    }
}


console.log(operate('+', 2, 3));