let firstNum;
let secondNum;
let operator;


function operate(firstNum, operator, secondNum) {
  if (operator === "+") {
    add(firstNum, secondNum);
  } else if (operator === "-") {
    subtract(firstNum, secondNum);
  } else if (operator === "*") {
    mutliply(firstNum, secondNum);
  } else if (operator === "/") {
    divide(firstNum, secondNum);
  }
}



function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function mutliply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const displayContainer = document.querySelector('.display-container');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => display.textContent = '0');
const signBtn = document.querySelector('#sign');
// signBtn.addEventListener('click', () => {
//   if (display.textContent) {

//   }
// })
const percentBtn = document.querySelector('#percent');
const divideBtn = document.querySelector('#divide');
const sevenBtn = document.querySelector('#seven');
sevenBtn.addEventListener('click', () => updateDisplay(sevenBtn));
const eightBtn = document.querySelector('#eight');
eightBtn.addEventListener('click', () => updateDisplay(eightBtn));
const nineBtn = document.querySelector('#nine');
nineBtn.addEventListener('click', () => updateDisplay(nineBtn));
const multBtn = document.querySelector('#mult');
const fourBtn = document.querySelector('#four');
fourBtn.addEventListener('click', () => updateDisplay(fourBtn));
const fiveBtn = document.querySelector('#five');
fiveBtn.addEventListener('click', () => updateDisplay(fiveBtn));
const sixBtn = document.querySelector('#six');
sixBtn.addEventListener('click', () => updateDisplay(sixBtn));
const minusBtn = document.querySelector('#minus');
const oneBtn = document.querySelector('#one');
oneBtn.addEventListener('click', () => updateDisplay(oneBtn));
const twoBtn = document.querySelector('#two');
twoBtn.addEventListener('click', () => updateDisplay(twoBtn));
const threeBtn = document.querySelector('#three');
threeBtn.addEventListener('click', () => updateDisplay(threeBtn));
const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', (firstNum, operator, secondNum) => {

})
const zeroBtn = document.querySelector('#zero');
zeroBtn.addEventListener('click', () => updateDisplay(zeroBtn));
const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => display.textContent += decimalBtn.textContent);
const equalBtn = document.querySelector('#equal-sign');
equalBtn.addEventListener('click', )

//add event listeners for all the buttons//
//when you click the buttons, the display should update//
function updateDisplay(button) {
  if (display.textContent === '0') {
    display.textContent = button.textContent;

  } else {
    display.textContent += button.textContent;
  }
  
}
