let resultOfCalculation = 0;
let logEntries = [];

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalculation, userInput) {
    const calcDescription = `${resultBeforeCalculation} ${operator} ${userInput}`;

    outputResult(resultOfCalculation, calcDescription);
}

function writeToLog(
    operationIdentifier,
    prevResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operationIdentifier,
        prevResult,
        operationNumber,
        newResult
    };

    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType){
    const userInput = getUserInput();

    if (!userInput)  {
        return;
    }

    const resultBeforeCalculation = resultOfCalculation;
    let mathOperator;

    if (calculationType === 'ADD') {
        calculationType = '+';
        resultOfCalculation += userInput;
    } else if (calculationType === 'SUBTRACT') {
        calculationType = '-';
        resultOfCalculation -= userInput;
    } else if (calculationType === 'MULTIPLY') {
        calculationType = '*';
        resultOfCalculation *= userInput;
    } else if (calculationType === 'DIVIDE') {
        calculationType = '/';
        resultOfCalculation /= userInput;
    } else {
        return;
    }

    if (!mathOperator) {
        return;
    }

    createAndWriteOutput(mathOperator , resultBeforeCalculation, userInput);
    writeToLog(calculationType, resultBeforeCalculation, userInput, resultOfCalculation);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);