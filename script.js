let display = document.querySelector('.display');
let firstOperand = null;
let operator = null;

function appendNumber(num) {
  display.textContent += num;
}

function appendOperator(op) {
  firstOperand = parseFloat(display.textContent);
  operator = op;
  display.textContent += op;
}

function appendDecimal(dec) {
  if (!display.textContent.includes(dec)) {
    display.textContent += dec;
  }
}

function clearDisplay() {
  display.textContent = '';
  firstOperand = null;
  operator = null;
}

function calculate() {
  let secondOperand = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(operator) + 1));

  let result = 0;
  if (operator === '+') {
    result = firstOperand + secondOperand;
  } else if (operator === '-') {
    result = firstOperand - secondOperand;
  } else if (operator === '*') {
    result = firstOperand * secondOperand;
  } else if (operator === '/') {
    if (secondOperand === 0) {
      display.textContent = "Error: Division by zero";
      return;
    }
    result = firstOperand / secondOperand;
  }

  display.textContent = result;
  firstOperand = null;
  operator = null;
}
