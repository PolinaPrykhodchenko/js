let resultOfCalculation = 0;

function getUserInput() {
    return  parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalculation, userInput) {
    const calcDescription = `${resultBeforeCalculation} ${operator} ${userInput}`;

    outputResult(resultOfCalculation, calcDescription);
}

function add() {
    const userInput = getUserInput();
    const resultBeforeCalculation = resultOfCalculation;

    resultOfCalculation = resultOfCalculation + userInput;

    createAndWriteOutput('+', resultBeforeCalculation, userInput);
}

function subtract() {
    const userInput = getUserInput();
    const resultBeforeCalculation = resultOfCalculation;

    resultOfCalculation = resultOfCalculation - userInput;

    createAndWriteOutput('-', resultBeforeCalculation, userInput);
}

function multiply() {
    const userInput = getUserInput();
    const resultBeforeCalculation = resultOfCalculation;

    resultOfCalculation = resultOfCalculation * userInput;

    createAndWriteOutput('*', resultBeforeCalculation, userInput);
}

function divide() {
    const userInput = getUserInput();
    const resultBeforeCalculation = resultOfCalculation;

    resultOfCalculation = resultOfCalculation / userInput;

    createAndWriteOutput('/', resultBeforeCalculation, userInput);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);