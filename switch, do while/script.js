function getMonthName() {
    var monthInput = document.getElementById("month");
    var month = parseInt(monthInput.value);

    var monthName = "";
    switch (month) {
        case 1:
            monthName = "Leden";
            break;
        case 2:
            monthName = "Únor";
            break;
        case 3:
            monthName = "Březen";
            break;
        case 4:
            monthName = "Duben";
            break;
        case 5:
            monthName = "Květen";
            break;
        case 6:
            monthName = "Červen";
            break;
        case 7:
            monthName = "Červenec";
            break;
        case 8:
            monthName = "Srpen";
            break;
        case 9:
            monthName = "Září";
            break;
        case 10:
            monthName = "Říjen";
            break;
        case 11:
            monthName = "Listopad";
            break;
        case 12:
            monthName = "Prosinec";
            break;
        default:
            monthName = "Neplatné číslo měsíce";
            break;
    }

    var monthNameElement = document.getElementById("monthName");
    monthNameElement.innerHTML = monthName;
}

function printEvenNumbers() {
    var evenNumbers = "";
    var number = 2;
    while (number <= 20) {
        evenNumbers += number + " ";
        number += 2;
    }

    var evenNumbersElement = document.getElementById("evenNumbers");
    evenNumbersElement.innerHTML = evenNumbers;
}

function checkPassword() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;

    var correctPassword = "heslo123";
    var message = "";
    do {
        if (password === correctPassword) {
            message = "Správné heslo!";
            break;
        } else {
            password = prompt("Zadali jste nesprávné heslo. Zadejte heslo znovu:");
        }
    } while (password !== null);

    var passwordMessageElement = document.getElementById("passwordMessage");
    passwordMessageElement.innerHTML = message;
}

function getDayOfWeek() {
    var dayInput = document.getElementById("day");
    var day = parseInt(dayInput.value);

    var dayOfWeek = "";
    switch (day) {
        case 1:
            dayOfWeek = "Pondělí";
            break;
        case 2:
            dayOfWeek = "Úterý";
            break;
        case 3:
            dayOfWeek = "Středa";
            break;
        case 4:
            dayOfWeek = "Čtvrtek";
            break;
        case 5:
            dayOfWeek = "Pátek";
            break;
        case 6:
            dayOfWeek = "Sobota";
            break;
        case 7:
            dayOfWeek = "Neděle";
            break;
        default:
            dayOfWeek = "Neplatné číslo dne v týdnu";
            break;
    }

    var dayOfWeekElement = document.getElementById("dayOfWeek");
    dayOfWeekElement.innerHTML = dayOfWeek;
}

function calculateFibonacci() {
    var fibonacciSequence = "0 1 ";
    var a = 0;
    var b = 1;
    var count = 2;
    while (count <= 10) {
        var nextNumber = a + b;
        fibonacciSequence += nextNumber + " ";
        a = b;
        b = nextNumber;
        count++;
    }

    var fibonacciSequenceElement = document.getElementById("fibonacciSequence");
    fibonacciSequenceElement.innerHTML = fibonacciSequence;
}

function calculateSum() {
    var numberInput = document.getElementById("number");
    var number = parseInt(numberInput.value);

    var sum = 0;
    do {
        sum += number;
        number = parseInt(prompt("Zadejte další číslo (0 pro ukončení):"));
    } while (number !== 0);

    var sumElement = document.getElementById("sum");
    sumElement.innerHTML = sum;
}