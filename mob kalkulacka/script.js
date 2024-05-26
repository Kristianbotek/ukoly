let currentNumber = '';
let operator = '';
let result = 0;

function appendNumber(number) {
    currentNumber += number;
    document.getElementById('result').value = currentNumber;
}

function appendOperator(op) {
    operator = op;
    result = parseFloat(currentNumber);
    currentNumber = '';
}

function calculate() {
    const number = parseFloat(currentNumber);
    switch (operator) {
        case '+':
            result += number;
            break;
        case '-':
            result -= number;
            break;
        case '*':
            result *= number;
            break;
        case '/':
            result /= number;
            break;
    }
    document.getElementById('result').value = result;
    currentNumber = '';
}

function clearEntry() {
    currentNumber = '';
    document.getElementById('result').value = '';
}

function clearAll() {
    currentNumber = '';
    operator = '';
    result = 0;
    document.getElementById('result').value = '';
}
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const mockData = [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' }
    ];

    const user = mockData.find(data => data.username === username && data.password === password);

    if (user) {
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.calculator').style.display = 'block';
    } else {
        document.getElementById('error').textContent = 'Neplatné přihlašovací údaje';
    }
}