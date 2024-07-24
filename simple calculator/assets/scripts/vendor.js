const userInput = document.getElementById('input-number');

/* calculation operation buttons*/
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const executeBtn = document.getElementById('btn-execute');

/* calculator numbers button */
const numBtns = document.getElementsByClassName('number-button');
const decimalBtn = document.getElementById('btn-decimal');
const negateBtn = document.getElementById('btn-negate');


const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}


userInput.addEventListener("keypress", function (evt) {
  if (evt.which < 48 || evt.which > 57)
  {
    evt.preventDefault();
  }
});

for(let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", function(evt) {
    const btnValue = parseInt(evt.target.value);
    const userInputValue = parseInt(userInput.value);

    if (userInputValue === 0 && btnValue === 0) {
      return;
    } else if (userInputValue === 0 && (btnValue > 0 || btnValue < 0)) {
      userInput.value = btnValue;
    } else {
      userInput.value = `${userInput.value}${btnValue}`;
    }
  })
}