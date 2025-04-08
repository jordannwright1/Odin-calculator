let firstNum = '';
let secondNum = '';
let operator = '';


function operate(firstNum, operator, secondNum) {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);
  
  if (operator === "+") {
    return add(firstNum, secondNum);
  } else if (operator === "-") {
    return subtract(firstNum, secondNum);
  } else if (operator === "*") {
    return mutliply(firstNum, secondNum);
  } else if (operator === "/") {
   return divide(firstNum, secondNum);
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
  if (secondNum === 0) {
    return 'ERROR'
  }
  return a / b;
}

const displayContainer = document.querySelector('.display-container');
const display = document.querySelector('.display');
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  display.textContent = '0';
  firstNum = result;
  secondNum = '';
  operator = '';
});
const signBtn = document.querySelector('#sign');
let negSign = signBtn.addEventListener('click', () => {
  if (display.textContent !== '0') {
    display.textContent = parseFloat(display.textContent * -1).toString();
    if (!operator) {
      firstNum = display.textContent;
    } else {
      secondNum = display.textContent;
    }
  }
})
const percentBtn = document.querySelector('#percent');
percentBtn.addEventListener('click', () => {
  if (display.textContent !== 0 && display.textContent !== '') {
    display.textContent = parseFloat(display.textContent / 100).toString();
  }  
    if (!operator) {
      firstNum = display.textContent;
    } else {
      secondNum = display.textContent;
    }
  }
)
const divideBtn = document.querySelector('#divide');
divideBtn.addEventListener('click', () => setOperator('/'))
const sevenBtn = document.querySelector('#seven');
sevenBtn.addEventListener('click', () => updateDisplay(sevenBtn));
const eightBtn = document.querySelector('#eight');
eightBtn.addEventListener('click', () => updateDisplay(eightBtn));
const nineBtn = document.querySelector('#nine');
nineBtn.addEventListener('click', () => updateDisplay(nineBtn));
const multBtn = document.querySelector('#mult');
multBtn.addEventListener('click', () => setOperator('*'))
const fourBtn = document.querySelector('#four');
fourBtn.addEventListener('click', () => updateDisplay(fourBtn));
const fiveBtn = document.querySelector('#five');
fiveBtn.addEventListener('click', () => updateDisplay(fiveBtn));
const sixBtn = document.querySelector('#six');
sixBtn.addEventListener('click', () => updateDisplay(sixBtn));
const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click', () => setOperator('-'))
const oneBtn = document.querySelector('#one');
oneBtn.addEventListener('click', () => updateDisplay(oneBtn));
const twoBtn = document.querySelector('#two');
twoBtn.addEventListener('click', () => updateDisplay(twoBtn));
const threeBtn = document.querySelector('#three');
threeBtn.addEventListener('click', () => updateDisplay(threeBtn));
const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener('click', () => setOperator('+'))
const zeroBtn = document.querySelector('#zero');
zeroBtn.addEventListener('click', () => updateDisplay(zeroBtn));
const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => {
  if (!display.textContent.includes('.')) {
    display.textContent += decimalBtn.textContent;

  }
})
const equalBtn = document.querySelector('#equal-sign');
equalBtn.addEventListener('click', () => {
  if (firstNum && secondNum && operator) {
    let result = operate(firstNum, operator, secondNum);
    display.textContent = result;
    firstNum = result;
    secondNum = '';
    operator = '';
  }
})

//add event listeners for all the buttons//
//when you click the buttons, the display should update//
function updateDisplay(button) {
  if (display.textContent === '0') {
    display.textContent = button.textContent;

  } else {
    display.textContent += button.textContent;
  }
  if (!operator) {
    firstNum = display.textContent;
  }
  else {
    secondNum = display.textContent;
  }
 
}

function setOperator(op) {
  if (firstNum !== '') {
    operator = op;
    display.textContent = '0';
  }
}
