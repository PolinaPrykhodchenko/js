const task3Element = document.getElementById('task-3');

function callAlertWithMessage(message) {
    alert(message);
}

function callAlertWithMockedMessage() {
    alert('hello world!');
}
callAlertWithMessage('hello world! hello world!');
callAlertWithMockedMessage();

task3Element.addEventListener('click', callAlertWithMockedMessage);

function combineStrings(str1, str2, str3) {
    return `${str1} ${str2} ${str3}`;
}

alert(combineStrings('my name', 'is', 'Polina'));