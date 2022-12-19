let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';

const inputDisplay = document.querySelector('.display--screen');
const numberBtns = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('#equal-sign');
const clearBtn = document.querySelector('.all-clear');
const dotBtn = document.querySelector('.decimal-sign');
const deleteBtn = document.querySelector('.delete');

// Functions
const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

// Call one of the above functions on the numbers
function operate(operator, a, b) {
    a = parseFloat(a)
    b = parseFloat(b)
    
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
            if (b == 0) {
                return `Can't divide`;
            } else {
                return divide(a, b);
            }
            break;
        }
};

// Populate the display when you click the number buttons. 
function displayNumber(number) {
    // If the operator is not set yet, read first number
    if (operator === '') {
        firstNum += Number(parseFloat(number.target.value));
        inputDisplay.value = firstNum;
        // Read second number
    } else {
        secondNum += Number(parseFloat(number.target.value));
        inputDisplay.value = secondNum;
        if (secondNum == 0 && operator == '÷') inputDisplay.value = `Can't divide`
    }
};

// Evaluate the inputs
function evaluate(e) {
    // If the operator is not equal, then operator will be the current value
    if (e.target.value !== '=' && secondNum == '') {
        operator = e.target.value;
        
    } else if (firstNum !== '' && secondNum !== '' && e.target.value !== '=') {
        result = operate(operator, firstNum, secondNum);
        operator = e.target.value;
        secondNum = '';
        firstNum = result;
        
    } else if (e.target.value == '=') {
        result = operate(operator, firstNum, secondNum);
        firstNum = result;
        secondNum = ''; 
    }

    inputDisplay.value = Math.round(result * 100) / 100;
};

// Clear all
function clear() {
    firstNum = '';
    secondNum = '';
    result = '';
    operator = '';
    inputDisplay.value = '';
};

// Add decimal
function addDot() {
    if (operator == '' && !firstNum.includes('.')) {
        firstNum += '.';
    }
    
    if (operator !== '' && !secondNum.includes('.')) {
        secondNum += '.';
    }
};

// Delete one element
function deleteElement() {
    inputDisplay.value = inputDisplay.value.toString().split('').join('').slice(0,-1);
    if (secondNum == '')  {
        result = inputDisplay.value;
        firstNum = result;

    } else if (firstNum !== '' && operator !== '=')  {
        result = inputDisplay.value;
        secondNum = result;
    }
};

// Populate display when click number
numberBtns.forEach(el=> el.addEventListener('click', displayNumber));

// ForEach operator evaluate
operators.forEach(op => op.addEventListener('click', evaluate));

// Clear all
clearBtn.addEventListener('click', clear);

// Add dot button
dotBtn.addEventListener('click', addDot);

// Add delete button
deleteBtn.addEventListener('click', deleteElement);
