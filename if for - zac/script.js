const output = document.getElementById('output');
const input = document.getElementById('input');

// Úkol 1 
for (let i = 25; i <= 250; i++) {
    console.log(i);
}

// Úkol 2 
for (let i = 15; i <= 150; i++) {
    output.innerHTML += i + '<br>';
}

// Úkol 3
for (let i = 2; i <= 100; i += 2) {
    output.innerHTML += i + '<br>';
}

// Úkol 4
const number = parseInt(input.value);
for (let i = 1; i <= number; i++) {
    output.innerHTML += i + '<br>';
}

// Úkol 5
if (number % 2 === 0) {
    for (let i = 2; i <= number; i += 2) {
        output.innerHTML += i + '<br>';
    }
} else {
    for (let i = 3; i <= number; i += 3) {
        output.innerHTML += i + '<br>';
    }
}