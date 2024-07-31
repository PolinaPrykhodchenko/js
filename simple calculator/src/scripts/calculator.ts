const endsWithMathOperator: RegExp = /[+\-*/]$/;

let algebraicExpression: string = "";
let executionResult: number = 0;


function completeAlgebraicExpression(
    algebraicValue: number | null,
    algebraicOperator: string | null,
): void {
    if (!isNumberButtonClickAfterMathOperator && algebraicOperator) {
        algebraicExpression = algebraicExpression.replace(
            endsWithMathOperator,
            algebraicOperator,
        );
    } else if (isNumberButtonClickAfterMathOperator && algebraicOperator) {
        algebraicExpression += ` ${algebraicValue} ${algebraicOperator}`;
    } else if (!algebraicOperator) {
        algebraicExpression += ` ${algebraicValue}`;
    }

    writeToLog();
}

function calculatePercentage(algebraicValue: number | null): number | null {
    return algebraicValue ? algebraicValue / 100 : null;
}

function negateNumber(algebraicValue: number): number {
    return -algebraicValue;
}

function executeAlgebraicExpression(): void {
    const isAlgebraicExpressionNotCompleted: string | null =
        getLastChar(algebraicExpression);

    if (isAlgebraicExpressionNotCompleted) {
        algebraicExpression.replace(endsWithMathOperator, "");
    }

    executionResult = eval(algebraicExpression);
    algebraicExpression = "";
    writeExecutionResult();
}

function writeToLog(): void {
    rewriteLogParagraph(algebraicExpression || 'No log info');
}

function writeExecutionResult(): void {
    rewriteResultParagraph(executionResult || 'No results');
}

function getLastChar(str: string): string | null {
    const lastChar: RegExpExecArray | null = endsWithMathOperator.exec(str);

    if (lastChar) {
        return lastChar[0];
    } else {
        return null;
    }
}

function resetCalculationHistory(): void {
    executionResult = 0;
    algebraicExpression = '';

    writeToLog();
    writeExecutionResult();
}

