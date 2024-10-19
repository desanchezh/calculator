const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
const operators = ['+', '-', '/', '*']
let firstNumber = []
let secondNumber = []
let chosenOperator = []
chosenOperator.push(operators[2])
firstNumber.push(numbers[1],[0],[0])
secondNumber.push(numbers[6])
let result = []

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

console.log(operate(Number(firstNumber.join('')),
                    Number(secondNumber.join('')), 
                    chosenOperator.join('')))
