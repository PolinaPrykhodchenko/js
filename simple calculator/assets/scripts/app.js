let resultOfCalculation = 0;
let logEntries = [];

function getUserInput() {
    return  parseInt(userInput.value);
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

function add() {
    const userInput = getUserInput();
    const resultBeforeCalculation = resultOfCalculation;

    resultOfCalculation += userInput;

    createAndWriteOutput('+', resultBeforeCalculation, userInput);
    writeToLog('ADD', resultBeforeCalculation, userInput, resultOfCalculation);
}

function subtract() {
    const userInput = getUserInput();
    const resultBeforeCalculation = resultOfCalculation;

    resultOfCalculation -= userInput;

    createAndWriteOutput('-', resultBeforeCalculation, userInput);
    writeToLog('SUBTRACT', resultBeforeCalculation, userInput, resultOfCalculation);
}

function multiply() {
    const userInput = getUserInput();
    const resultBeforeCalculation = resultOfCalculation;

    resultOfCalculation *= userInput;

    createAndWriteOutput('*', resultBeforeCalculation, userInput);
    writeToLog('MULTIPLY', resultBeforeCalculation, userInput, resultOfCalculation);
}

function divide() {
    const userInput = getUserInput();
    const resultBeforeCalculation = resultOfCalculation;

    resultOfCalculation /= userInput;

    createAndWriteOutput('/', resultBeforeCalculation, userInput);
    writeToLog('DIVIDE', resultBeforeCalculation, userInput, resultOfCalculation);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);