//improvement ideas...STOP SCROLL, change operator buttons so they remain visually pressed until = is pressed, delete button, keyboard input

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

//decide which function to use and  push result to array
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

//format array for calc
function cleanArray(numberArr) {
    let clean = Number(numberArr.join(''));
    return clean;
}

//shows array as string in calculator display
function getDisplayNum(arr) {
    let displayNum = document.createElement('span');
    displayContainer.appendChild(displayNum);
    displayNum.textContent = +cleanArray(arr).toFixed(2);
    displayNum.style.color = "white"
}

let btnNum = document.querySelector('#numberContainer');
btnNum.addEventListener('click',function (e) {
    if (e.target.id == 'clear') {//checks for clear
        firstNumber.length = 0;
        secondNumber.length = 0;
        chosenOperator.length = 0;
        result.length = 0;
        numberPressed.length = 0;
        displayContainer.textContent = ''
    }else if (chosenOperator.length == 0) {//checks if operator is already selected
        result.length = 0
        numberPressed.length = 0;
        numberPressed.push(e.target.id);
        firstNumber.push(cleanArray(numberPressed));
        displayContainer.textContent = ''
        getDisplayNum(firstNumber);
    }
    else if (chosenOperator.Length != 0){ //operator not selected yet
        numberPressed.length = 0;
        numberPressed.push(e.target.id);
        secondNumber.push(cleanArray(numberPressed));
        displayContainer.textContent = ''
        getDisplayNum(secondNumber);
    }
})



let btnOperator = document.querySelector('#operatorContainer');
btnOperator.addEventListener('click', function (e) {
    if (result.length == 0){ //operator not  selected yet
        displayContainer.textContent = ''
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
    //don't try to divide by zero
    if (e.target.id == '=' && cleanArray(secondNumber) == 0 && chosenOperator.join('') == '/') {
        displayContainer.textContent = 'get a grip';
        displayContainer.style.color = 'white';
        firstNumber.length = 0;
        secondNumber.length = 0;
        chosenOperator.length = 0;
        result.length = 0;

    }
    else if (e.target.id == '=' && result.length != 0) { //check if result is stored  and sets as first num if so
        operate(cleanArray(result), cleanArray(secondNumber), chosenOperator.join(''))
        displayContainer.textContent = '';
        getDisplayNum(result);
        chosenOperator.length = 0
        firstNumber.length = 0
        secondNumber.length = 0
    }else if (e.target.id == '=') { 
            operate(cleanArray(firstNumber), cleanArray(secondNumber), chosenOperator.join(''))//standard calculation
            displayContainer.textContent = ''
            getDisplayNum(result);
            chosenOperator.length = 0
            firstNumber.length = 0
            secondNumber.length = 0
    }})