//improvement ideas... change operator buttons so they remain visually pressed until = is pressed, delete button, keyboard input

let firstNumber = [];
let secondNumber = [];
let chosenOperator = [];
let result = [];
let numberPressed = []
let displayContainer = document.querySelector('#displayContainer');
let currentOperatorGlobal = ''; //this used to store the previous operator to clear out tranform (holding down button effect)

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
        case '÷'://bad idea using text value as case...this looks like a plus
            result.push(divideNumbers(a, b));
            return result;
        case 'x':
            result.push(multiplyNumbers(a, b));
            return result;
    }
}

function cleanArray(numberArr) {
    let clean = Number(numberArr.join(''));
    return clean;
}

function removeOperatorTransform() {
  if (!currentOperatorGlobal == '') {
    currentOperatorGlobal.style.transform = '';
    currentOperatorGlobal.style.background = '';
  }
}

//shows array as string in calculator display
function getDisplayNum(arr) {
    let displayNum = document.createElement('span');
    if (!isNaN(cleanArray(arr))) { 
      //^to prevent NaN from printing becuase #buttonContainer is clickable
      displayContainer.appendChild(displayNum);
      displayNum.style.background = ''
      displayNum.style.color = 'white'
      displayNum.textContent = +cleanArray(arr).toFixed(2); // + here means decimals are used if needed
    }
    
  }


let btnNum = document.querySelector('#numberContainer');
btnNum.addEventListener('click',function (e) {
    if (e.target.id == 'clear') {
        firstNumber.length = 0;
        secondNumber.length = 0;
        chosenOperator.length = 0;
        result.length = 0;
        numberPressed.length = 0;
        displayContainer.textContent = ''
        document.querySelector('button').style.transform = null
        removeOperatorTransform();

    }else if (chosenOperator.length == 0) {//checks if operator is already selected
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
  removeOperatorTransform();
  console.log(currentOperatorGlobal)
    if (result.length == 0){ //operator not  selected yet
        chosenOperator.length = 0;
        selection = e.target.textContent
        chosenOperator.push(selection)
    }else if (result.length != 0) {
        chosenOperator.length = 0;
        chosenOperator.push(selection)
    }
  let currentOperator = document.querySelector(`#${e.target.id}`);
  currentOperator.style.transform = "translateY(-2px)";
  currentOperator.style.background = "#B0002C"
  currentOperatorGlobal = currentOperator;
  
})


let btnSpecial = document.querySelector('#specialContainer');
btnSpecial.addEventListener('click',function (e) {
    //don't try to divide by zero
    removeOperatorTransform();
    if (e.target.id == '=' && cleanArray(secondNumber) == 0 && chosenOperator.join('') == '÷') {
        displayContainer.textContent = ">:(____";
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
        removeOperatorTransform();
    }else if (e.target.id == '=') { 
            operate(cleanArray(firstNumber), cleanArray(secondNumber), chosenOperator.join(''))//standard calculation
            displayContainer.textContent = ''
            getDisplayNum(result);
            chosenOperator.length = 0
            firstNumber.length = 0
            secondNumber.length = 0
    }})