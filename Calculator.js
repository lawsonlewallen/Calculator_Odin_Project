/*TO DO:
-JS CHALLENGE : add keyboard support (new branch)
*/

//global variables for use in function and display
let firstNumber;
let operator;
let secondNumber;
let newDigit;
let displayArray = [];


//calculation functions
const add = function(a, b) {
  return a + b;
}
const subtract = function(a, b) {
  return a - b;
}
const multiply = function(a, b) {
  return a * b;
}
const divide = function(a, b) {
  return a / b;
}

//DOM manipulation variables
let buttonParent = document.querySelector('#buttonsparent');
let button = document.querySelector('button');
let display = document.querySelector('#display'); 
display.textContent = `CALCULATOR APP`;
let oneButton = document.getElementById('1');
let twoButton = document.getElementById('2');
let threeButton = document.getElementById('3');
let fourButton = document.getElementById('4');
let fiveButton = document.getElementById('5');
let sixButton = document.getElementById('6');
let sevenButton = document.getElementById('7');
let eightButton = document.getElementById('8');
let nineButton = document.getElementById('9');
let zeroButton = document.getElementById('0');
let decimalButton = document.getElementById('decimal');
let addButton = document.getElementById('add');
let equalButton = document.getElementById('equals');
let subtractButton = document.getElementById('subtract');
let divideButton = document.getElementById('divide');
let multiplyButton = document.getElementById('multiply');
let cButton = document.getElementById('C');
let ceButton = document.getElementById('CE');


//display text functions
const checkDecimalPlaces = function(string) {
    let stringArray = string.split('.');
    if (stringArray.length > 1) {
        if (stringArray[1].length > 3) {
            string = (+string).toFixed(3);
        }
    }
    return string;
}

const checkForOperators = function(arr) {
    const operatorOptions = ['+', '-', 'x', '÷'];
    if( arr.find(item => operatorOptions.includes(item))) {
        operate();
      };
}

const filterSpaces = function(arr) {
    return arr.filter(item => item !== '')
}

const decimalCheck = function(arr) {
    let everyCharacter = arr[arr.length-1].split('');
    if (everyCharacter.includes('.')) {
        return true;
    } else {
        return false;
    }
}

const operatorCheck = function(arr) {
    const operatorOptions = ['+', '-', 'x', '÷', 'ERR'];
    return operatorOptions.includes(arr[arr.length-1]);
}

const editDisplayText = function() {
    display.classList.replace('pressbuttonbelow', 'displaynumbers');
    let currentText = display.textContent;
    if (display.textContent.length == 10){
        //don't edit display (too long);
    } else {
        if (currentText === 'CALCULATOR APP'){
            currentText = '';
        }
        display.textContent = `${currentText}${newDigit}`;
    }
}

//Operate function, takes display text and runs the user requested operation
//includes checks for NaN answers and dividing by 0, in this case displays 'ERR'
const operate = function(firstNumber, secondNumber, operator){
    let answer;
    operator = displayArray[1];
    if (displayArray[0] == '.' || displayArray[2] == '.'){
        answer = 'ERR'
    } else {
        firstNumber = +displayArray[0];
        secondNumber = +displayArray[2];
        if(operator == '÷' && secondNumber == 0) {
            answer = 'ERR';
        } else {
            switch(operator) {
            case '+':
            answer = add(firstNumber, secondNumber);
            break;
            case '-':
            answer = subtract(firstNumber, secondNumber);
            break;
            case 'x':
            answer = multiply(firstNumber, secondNumber);
            break;
            case '÷':
            answer = divide(firstNumber, secondNumber);
            break;}
        }
    }
    answer = checkDecimalPlaces(`${answer}`);
    display.textContent = answer;
    if (display.textContent == 'NaN'){
        display.textContent = 'ERR';
    }
}

//Event Listener for calculator buttons
buttonParent.addEventListener("click", (event) => {
    displayArray = filterSpaces(display.textContent.split(" "));
    switch(event.target){
        case oneButton:
          newDigit = '1';
          editDisplayText();
          break;
        case twoButton:
          newDigit = '2';
          editDisplayText();
          break;
        case threeButton:
          newDigit = '3';
          editDisplayText();
          break;
        case fourButton:
          newDigit = '4';
          editDisplayText();
        break;
        case fiveButton:
          newDigit = '5';
          editDisplayText();
          break;
        case sixButton:
          newDigit = '6';
          editDisplayText();
          break;
        case sevenButton:
          newDigit = '7';
          editDisplayText();
          break;
        case eightButton:
          newDigit = '8';
          editDisplayText();
        break;
        case nineButton:
          newDigit = '9';
          editDisplayText();
          break;
        case zeroButton:
          newDigit = '0';
          editDisplayText();
          break;
        case decimalButton:
          if(!decimalCheck(displayArray)) {
          newDigit = '.';
          editDisplayText();};
          break;
        case addButton:
          if(!operatorCheck(displayArray)) {
          newDigit = ` + `;
          checkForOperators(displayArray);
          editDisplayText();};
          break;
        case subtractButton:
          if(!operatorCheck(displayArray)) {
          newDigit = ` - `;
          checkForOperators(displayArray);
          editDisplayText();};
          break;
        case multiplyButton:
          if(!operatorCheck(displayArray)) {
          newDigit = ` x `;
          checkForOperators(displayArray);
          editDisplayText();};
          break;
        case divideButton:
          if(!operatorCheck(displayArray)) {
          newDigit = ` ÷ `;
          checkForOperators(displayArray);
          editDisplayText();};
          break;
        case equalButton:
          operate();
          break;
        case cButton:
          display.textContent = '';
          break;
        case ceButton:
          displayArray.pop();
          display.textContent = `${displayArray.join(' ')} `;
          break;
        default:
          break;
      }}
);



