let firstNumber = [];
let secondNumber = [];
let chosenOperator = [];
let result = [];
let numberPressed = []
let displayContainer = document.querySelector('#displayContainer');

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function divideNumbers(a, b) {
    return a / b
}

function multiplyNumbers(a, b) {
    return a * b
}

function operate(a, b, operator){
    result.length = 0
    switch(operator){
        case '+':
            result.push(addNumbers(a, b));
            return result;
        case '-':
            result.push(subtractNumbers(a, b));
            return result;
        case '/':
            result.push(divideNumbers(a, b));
            return result;
        case '*':
            result.push(multiplyNumbers(a, b));
            return result;
    }
}

function cleanArray(numberArr) {
    let clean = Number(numberArr.join(''));
    return clean;
}

function getDisplayNum(arr) {
    let displayNum = document.createElement('span');
    displayContainer.appendChild(displayNum);
    displayNum.textContent = cleanArray(arr);
}


let btnNum = document.querySelector('#numberContainer');
btnNum.addEventListener('click',function (e) {
    if (chosenOperator.length == 0) {
        result.length = 0
        numberPressed.length = 0;
        numberPressed.push(e.target.id);
        firstNumber.push(cleanArray(numberPressed));
        displayContainer.textContent = ''
        getDisplayNum(firstNumber);
    }
    else if (chosenOperator.Length != 0){
        numberPressed.length = 0;
        numberPressed.push(e.target.id);
        secondNumber.push(cleanArray(numberPressed));
        displayContainer.textContent = ''
        getDisplayNum(secondNumber);
    }
})

let btnOperator = document.querySelector('#operatorContainer');
btnOperator.addEventListener('click', function (e) {
    if (result.length == 0){
        displayContainer.textContent = '';
        chosenOperator.length = 0;
        chosenOperator.push(e.target.id)
        //add some effect here to show current selection (pressed down in css?)
    }else if (result.length != 0) {
        chosenOperator.length = 0;
        chosenOperator.push(e.target.id)
    }
})

let btnSpecial = document.querySelector('#specialContainer');
btnSpecial.addEventListener('click',function (e) {
    if (e.target.id == '=' && cleanArray(secondNumber) == 0 && chosenOperator.join('') == '/') {
        displayContainer.textContent = 'get a grip';
        firstNumber.length = 0;
        secondNumber.length = 0;
        chosenOperator.length = 0;
        result.length = 0;
    }
    else if (e.target.id == '=' && result.length != 0) { 
        operate(cleanArray(result), cleanArray(secondNumber), chosenOperator.join(''))
        displayContainer.textContent = '';
        getDisplayNum(result);
        chosenOperator.length = 0
        firstNumber.length = 0
        secondNumber.length = 0
    }else if (e.target.id == '=') { 
            operate(cleanArray(firstNumber), cleanArray(secondNumber), chosenOperator.join(''))
            displayContainer.textContent = '';
            getDisplayNum(result);
            chosenOperator.length = 0
            firstNumber.length = 0
            secondNumber.length = 0
        }else if (e.target.id == 'clear') {
            firstNumber.length = 0;
            secondNumber.length = 0;
            chosenOperator.length = 0;
            result.length = 0;
            numberPressed.length = 0;
            displayContainer.textContent = ''
        }})