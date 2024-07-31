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
    rewriteLogParagraph(algebraicExpression);
}

function writeExecutionResult(): void {
    rewriteResultParagraph(executionResult);
}

function getLastChar(str: string): string | null {
    const lastChar: RegExpExecArray | null = endsWithMathOperator.exec(str);

    if (lastChar) {
        return lastChar[0];
    } else {
        return null;
    }
}
