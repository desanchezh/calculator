const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const operators = ['+', '-', '/', '*'
]
let firstNumber = []
let secondNumber = []
let chosenOperator = []
chosenOperator.push(operators[3])
result = []

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function divideNumbers(a, b) {
    return a / b;
}

function multiplyNumbers(a, b) {
    return a * b
}

function operate(a, b, operator){
    result.length = 0
    switch(operator){
        case '+':
            result.push(addNumbers(a, b));
            break;
        case '-':
            result.push(subtractNumbers(a, b));
            break;
        case '/':
            result.push(divideNumbers(a, b));
            break;
        case '*':
            result.push(multiplyNumbers(a, b));
            break;
    }

}
