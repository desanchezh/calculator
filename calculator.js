const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
const operators = ['+', '-', '/', '*']
let firstNumber = []
let secondNumber = []
let chosenOperator = []
let result = []
let numberPressed = []
let displayContainer = document.querySelector('#displayContainer');

//replace the below with some  statement linked to buttons


function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function divideNumbers(a, b) {
    if (b == 0) {return "get a grip."}
    else{return a / b}
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

getDisplayNum(numbers);

let btnNum = document.querySelector('#numberContainer');
btnNum.addEventListener('click',function (e) {
    if (chosenOperator.length == 0) {
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
        console.log('second ' + secondNumber) 
    }
})

let btnOperator = document.querySelector('#operatorContainer');
btnOperator.addEventListener('click', function (e) {
    displayContainer.textContent = '';
    chosenOperator.length = 0;
    chosenOperator.push(e.target.id)
    console.log(chosenOperator.join(''))
    //add some effect here to show current selection (pressed down in css?)
})

let btnSpecial = document.querySelector('#specialContainer');
btnSpecial.addEventListener('click',function (e) {
    if (e.target.id == '=') { 
        operate(cleanArray(firstNumber), cleanArray(secondNumber), chosenOperator.join(''))
        displayContainer.textContent = '';
        getDisplayNum(result);
        return console.log(result)}

    else if (e.target.id == 'clear'){
        firstNumber.length = 0;
        secondNumber.length = 0;
        chosenOperator.length = 0;
        result.length = 0;
        numberPressed.length = 0;
        displayContainer.textContent = ''
    }})
