let display = document.getElementById('display')
display.innerText = "";

let btns = document.querySelectorAll('button[id^=but]');

btns.forEach(btn =>
    btn.addEventListener('click', event => {
        displayData(btn.innerText)
    }
    ));



let num1 = "";
let operator = "";
let num2 = "";
let result = "";
//*********************************************************
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);

        case '-':
            return subtract(num1, num2);

        case '*':
            return multiply(num1, num2);

        case '/':
            return divide(num1, num2);

    };
}

function displayData(displayValue) {
    if (displayValue == "+" || displayValue == "-" || displayValue == "*" || displayValue == "/") {
        if (operator !== "") {
            num2 = parseInt(display.innerText.split(operator).pop());
            result = operate(num1, num2, operator);
            operator = displayValue;
            num1 = result;
        } else {
            num1 = parseInt(display.innerText);
            operator = displayValue;
        }
    }

    display.innerText += displayValue;

    if (displayValue == "=") {
        num2 = parseInt(display.innerText.split(operator).pop());
        display.innerText = operate(num1, num2, operator);
        result = parseInt(display.innerText);
    }

    if (displayValue == "clear") {
        return clearDisplay();
    }


}

function clearDisplay() {
    display.innerText = "";
    num1 = "";
    num2 = "";
    operator = "";
}