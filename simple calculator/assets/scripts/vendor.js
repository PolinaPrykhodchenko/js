const userInput = document.getElementById('input-number');

/* calculation operation buttons*/
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const executeBtn = document.getElementById('btn-execute');

/* calculator numbers button */
const numBtn = document.getElementsByClassName('number-button');
const decimalBtn = document.getElementById('btn-decimal');
const negateBtn = document.getElementById('btn-negate');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

userInput.addEventListener("keypress", function (evt) {
  if (isNaN(parseInt(evt.key))) {
    evt.preventDefault();
  }

  if (parseInt(userInput.value) === 0 && parseInt(evt.key) === 0) {
    evt.preventDefault();
  }

  if (parseInt(userInput.value) === 0 && parseInt(evt.key) > 0 && parseInt(evt.key) <= 9) {
    userInput.value = '';
  }
});

for(let i = 0; i < numBtn.length; i++) {
  numBtn[i].addEventListener("click", function(evt) {
    const btnValue = parseInt(evt.target.value);
    const userInputValue = parseInt(userInput.value);

    if (userInputValue > 0 || userInputValue < 0) {
      userInput.value = `${userInput.value}${btnValue}`;
    } else if ((!userInputValue || userInputValue === 0) && (btnValue > 0 || btnValue < 0)) {
      userInput.value = btnValue;
    } else if (!userInputValue && btnValue === 0) {
      userInput.value = btnValue;
    }
  })
}


function buttonClicked(button) {
  // Remove 'clicked' class from all buttons
  document.querySelectorAll('button').forEach(btn => {
    const buttonClassList = Array.from(btn.classList);

    if (buttonClassList.includes('clicked-num-button')) {
      btn.classList.remove('clicked-num-button');
    } else {
      btn.classList.remove('clicked-action-button');
    }
  });


  const buttonType = button.getAttribute('class');
console.log(buttonType)
  switch (buttonType) {
    case 'number-button':
    case 'decimal-button':
    case 'negate-button':
      button.classList.add('clicked-num-button');
      break;
    default:
      button.classList.add('clicked-action-button');
  }

  // Add 'clicked' class to the clicked button


}