const inputDisplay = document.querySelector('.display--screen');

const numberBtns = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equal-sign');


// Populate display when click number
numberBtns.forEach(el=> el.addEventListener('click', displayNumber));

function displayNumber() {
    inputDisplay.value += this.value;
}


// Functions
const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;