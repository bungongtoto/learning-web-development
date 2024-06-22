function add() {
    performOperation('add');
}

function subtract() {
    performOperation('subtract');
}

function multiply() {
    performOperation('multiply');
}

function divide() {
    performOperation('divide');
}

function Delete() {
    // Clear input fields
    document.getElementById('first_number').value = '';
    document.getElementById('second_number').value = '';

    // clear results
    document.getElementById('results').innerText = 'Results:';
}

function performOperation(operation) {
    const firstNumber = parseFloat(document.getElementById('first_number').value);
    const secondNumber = parseFloat(document.getElementById('second_number').value);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById('results').innerText = 'Results: Please enter valid numbers';
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = firstNumber + secondNumber;
            break;
        case 'subtract':
            result = firstNumber - secondNumber;
            break;
        case 'multiply':
            result = firstNumber * secondNumber;
            break;
        case 'divide':
            if (secondNumber !== 0) {
                result = (firstNumber / secondNumber).toFixed(2);
            } else {
                document.getElementById('results').innerText = 'Results: Cannot divide by zero';
                return;
            }
            break;
        default:
            break;
    }

    document.getElementById('results').innerText = `Results: ${result}`;
}
