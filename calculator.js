const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
const operators = ['+', '-', '/', '*']
let firstNumber = []
let secondNumber = []
let chosenOperator = []
let result = []
let displayValue = []
//replace the below with some  statement linked to buttons
chosenOperator.push(operators[2])
firstNumber.push(numbers[1],[0],[0])
secondNumber.push(numbers[6])


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
console.log(operate(cleanArray(firstNumber),cleanArray(secondNumber),chosenOperator.join('')));

function getDisplayNum(arr) {
    let displayContainer = document.querySelector("#displayContainer");
    let displayNum = document.createElement("span");
    displayContainer.appendChild(displayNum);
    displayNum.textContent = cleanArray(arr);
}

getDisplayNum(firstNumber);



