function calculateBMI(weight, height) {
    if (weight <= 0 || height <= 0) {
        return null;
    }

    var bmi = weight / (height * height);
    return bmi;
}

function evaluateBMI(bmi) {
    if (bmi < 18.5) {
        return "Podváha";
    } else if (bmi < 25) {
        return "Normální váha";
    } else if (bmi < 30) {
        return "Nadváha";
    } else {
        return "Obezita";
    }
}

function processInput() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Zadejte prosím platné číselné hodnoty pro hmotnost a výšku.");
        return;
    }

    var bmi = calculateBMI(weight, height);

    if (bmi === null) {
        alert("Zadejte prosím kladné hodnoty pro hmotnost a výšku.");
        return;
    }

    var evaluation = evaluateBMI(bmi);

    var resultElement = document.getElementById("result");
    var evaluationElement = document.createElement("p");
    evaluationElement.textContent = "BMI: " + bmi.toFixed(2) + " - " + evaluation;
    resultElement.appendChild(evaluationElement);
}

function checkExitInput(input) {
    var exitKeywords = ["NE", "EXIT", "KONEC"];
    return exitKeywords.includes(input.toUpperCase());
}

function processInputWithExitCheck() {
    var input = document.getElementById("input").value;

    if (checkExitInput(input)) {
        alert("Program byl ukončen.");
        return;
    }

    processInput();
}
