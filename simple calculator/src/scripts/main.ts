const userInput: HTMLInputElement = document.getElementById(
    "input-number",
) as HTMLInputElement;

/* calculator numbers button */
const numberButtons: HTMLCollectionOf<HTMLButtonElement> =
    document.getElementsByClassName(
        "number-button",
    ) as HTMLCollectionOf<HTMLButtonElement>;
const actionButtons: HTMLCollectionOf<HTMLButtonElement> =
    document.getElementsByClassName(
        "action-button",
    ) as HTMLCollectionOf<HTMLButtonElement>;
const logParagraph: HTMLParagraphElement = document.getElementById(
    "calculation-log",
) as HTMLParagraphElement;
const resultParagraph: HTMLParagraphElement = document.getElementById(
    "calculation-result",
) as HTMLParagraphElement;
const toggleButton: HTMLButtonElement = document.getElementById(
    "theme-toggle",
) as HTMLButtonElement;
const toggleIcon: HTMLElement = document.getElementById("toggle-icon") as HTMLElement;

const ALGEBRAIC_OPERATORS: {
    [key: string]: string;
} = {
    ADD: "+",
    SUBTRACT: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
    EXECUTE: "=",
};

let isNumberButtonClickAfterMathOperator: boolean = false;
let previousClickedButton: HTMLButtonElement | null = null;

handleUserInput();
handleNumberButtons();
handleActionButtons();

/*
  userInputHandler:
    - prevents typing not number char,
    - prevents adding 0 char if the first and only character entered is 0,
    - formats user input value if the first, only character is zero and the next typed number > 0(09 -> 9)
    - resets user input value after the algebraic operation was selected
 */

function handleUserInput(): void {
    userInput.addEventListener("keypress", (evt: KeyboardEvent): void => {
        const userInputValue: number = parseInt(userInput.value);
        const eventKet: number = parseInt(evt.key);

        /* prevents typing not number char */
        if (isNaN(eventKet)) {
            evt.preventDefault();
        }

        /* prevents adding 0 char if the first and only character entered is 0 */
        if (userInputValue === 0 && eventKet === 0) {
            evt.preventDefault();
        }

        /* resets user input value after the algebraic operation was selected */
        if (!isNumberButtonClickAfterMathOperator) {
            resetUserInputValue();
            isNumberButtonClickAfterMathOperator = true;
        }

        /* formats user input value if the first, only character is zero and the next typed number > 0(09 -> 9) */
        if (userInputValue === 0 && eventKet > 0 && eventKet <= 9) {
            resetUserInputValue();
        }
    });
}

function handleNumberButtons(): void {
    /* adding a listener to number buttons for writing a value into user input on the click */
    for (let i: number = 0; i < numberButtons.length; i++) {
        numberButtons[i]?.addEventListener("click", (evt: MouseEvent): void => {
            if (!isNumberButtonClickAfterMathOperator) resetUserInputValue();

            const buttonElement: HTMLButtonElement =
                evt.currentTarget as HTMLButtonElement;
            const buttonValue: string = buttonElement.value;
            const userInputValue: string = userInput.value;

            switch (buttonValue) {
                case 'negate':
                    userInput.value = `${-userInputValue}`;
                    break;
                case 'decimal':
                    addDecimalPart(userInputValue);
                    break;
                default:
                    setNumberIntoUserInput(userInputValue, buttonValue);
            }
        });
    }
}

function handleActionButtons(): void {
    for (let i: number = 0; i < actionButtons.length; i++) {
        actionButtons[i].addEventListener("click", (ev: MouseEvent): void => {
            const buttonElement: HTMLButtonElement =
                ev.currentTarget as HTMLButtonElement;
            const operatorValue: string = ALGEBRAIC_OPERATORS[buttonElement.value];
            const userInputValue: number = parseFloat(userInput.value);

            if (operatorValue && operatorValue !== ALGEBRAIC_OPERATORS.EXECUTE) {
                completeAlgebraicExpression(userInputValue, operatorValue);

                isNumberButtonClickAfterMathOperator = false;
            } else if (
                operatorValue &&
                operatorValue === ALGEBRAIC_OPERATORS.EXECUTE
            ) {
                completeAlgebraicExpression(userInputValue, null);
                executeAlgebraicExpression();

                isNumberButtonClickAfterMathOperator = true;
            }
        });
    }
}

function rewriteLogParagraph(log: string): void {
    logParagraph.innerText = log;
}

function rewriteResultParagraph(executionResult: number): void {
    resultParagraph.innerText = executionResult.toString();
    userInput.value = executionResult.toString();
}

function resetUserInputValue(): void {
    userInput.value = "";
}

function setNumberIntoUserInput(userInputValue: string, buttonValue: string): void {
    if (!parseFloat(userInputValue)) {
        userInput.value = `${buttonValue}`;
    } else {
        userInput.value = `${userInputValue}${buttonValue}`;
    }

    isNumberButtonClickAfterMathOperator = true;
}

function addDecimalPart(userInputValue: string): void {
    const isDecimalPartAdded: boolean = userInputValue.includes('.');

    if (isDecimalPartAdded) {
        return;
    }

    userInput.value = `${userInputValue}.`;
}

/* switch button styles on click */
function buttonClicked(button: HTMLButtonElement): void {
    const buttonType: string | null = button.getAttribute("class");
    const previousClickedButtonClassList = previousClickedButton?.classList;

    if (previousClickedButton?.isEqualNode(button)) {
        return;
    }

    previousClickedButtonClassList?.forEach((className: string) => {
        if (className === 'clicked-num-button') {
            previousClickedButton?.classList.remove("clicked-num-button");
        } else {
            previousClickedButton?.classList.remove("clicked-action-button");
        }
    })

    switch (buttonType) {
        case "number-button":
        case "decimal-button":
        case "negate-button":
            button.classList.add("clicked-num-button");
            break;
        default:
            button.classList.add("clicked-action-button");
    }

    previousClickedButton = button;
}

function toggleThemeButton(): void {
    const isLightTheme: string | null = document.documentElement.classList[0];

    if (isLightTheme) {
        toggleButton.classList.remove("action-button__active");
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
    } else {
        toggleButton.classList.add("action-button__active");
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
    }

    document.documentElement.classList.toggle("light-theme");
}
