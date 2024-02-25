function convertCurrency() {
    const sourceCurrency = document.getElementById("sourceCurrency").value;
    const targetCurrency = document.getElementById("targetCurrency").value;
    const amount = document.getElementById("amount").value;
    const exchangeRates = {
        "CZK": {
            "USD": 0.045,
            "EUR": 0.039
        },
        "USD": {
            "CZK": 22.22,
            "EUR": 0.88
        },
        "EUR": {
            "CZK": 25.64,
            "USD": 1.14
        }
    };

    const convertedAmount = amount * exchangeRates[sourceCurrency][targetCurrency];

    document.getElementById("conversionResult").innerHTML = `Výsledek převodu: ${convertedAmount.toFixed(2)} ${targetCurrency}`;
}
function calculateFutureValue() {
    const initialAmount = document.getElementById("initialAmount").value;
    const monthlyDeposit = document.getElementById("monthlyDeposit").value;
    const interestRate = document.getElementById("interestRate").value;
    const investmentDuration = document.getElementById("investmentDuration").value;
    const monthlyInterestRate = interestRate / 100 / 12;
    const totalMonths = investmentDuration * 12;

    let futureValue = initialAmount;
    for (let i = 0; i < totalMonths; i++) {
        futureValue = (futureValue + monthlyDeposit) * (1 + monthlyInterestRate);
    }

    document.getElementById("futureValueResult").innerHTML = `Odhadovaná budoucí hodnota: ${futureValue.toFixed(2)}`;
}

function calculateVat() {
    const vatAmount = document.getElementById("vatAmount").value;
    const vatRate = 0.21;
    const netAmount = vatAmount / (1 + vatRate);
    const grossAmount = vatAmount * (1 + vatRate);

    document.getElementById("vatResult").innerHTML = `Částka bez DPH: ${netAmount.toFixed(2)}<br>Částka s DPH: ${grossAmount.toFixed(2)}`;
}