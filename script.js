function add(num1,num2){
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1%num2;
}

function operate(num1,num2,operator){
    switch (operator){
        case '+': 
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
           return  multiply(num1,num2);
            break;
        case '/':
            return divide(num1,num2);
            break;
    };
}


let display = document.getElementById('display')
display.innerText ="";
function displayData(){
    let displayValue = '';
    displayValue = this.querySelectorAll('.buttons').value;
    display.innerText = displayValue;
}