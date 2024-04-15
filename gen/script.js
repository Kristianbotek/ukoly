function generatePassword(length, includeNumbers, includeSpecialChars, includeUppercase) {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';

    if (includeNumbers) {
        charset += '0123456789';
    }

    if (includeSpecialChars) {
        charset += '!@#$%^&*';
    }

    if (includeUppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}

function savePassword(password) {
    let passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    passwords.push(password);
    localStorage.setItem('passwords', JSON.stringify(passwords));
}

function loadPasswords() {
    let passwords = JSON.parse(localStorage.getItem('passwords')) || [];
    let output = document.getElementById('output');
    output.innerHTML = '';

    passwords.forEach(function (password) {
        let passwordItem = document.createElement('div');
        passwordItem.classList.add('password-item');
        passwordItem.innerHTML = password;

        let detailsButton = document.createElement('button');
        detailsButton.innerText = 'Detaily';
        detailsButton.addEventListener('click', function () {
            alert('Detaily hesla: ' + password);
        });

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Smazat';
        deleteButton.addEventListener('click', function () {
            let index = passwords.indexOf(password);
            passwords.splice(index, 1);
            localStorage.setItem('passwords', JSON.stringify(passwords));
            loadPasswords();
        });

        passwordItem.appendChild(detailsButton);
        passwordItem.appendChild(deleteButton);
        output.appendChild(passwordItem);
    });
}

function generatePasswordOnClick() {
    let length = parseInt(document.getElementById('delka').value);
    let includeNumbers = document.getElementById('cisla').checked;
    let includeSpecialChars = document.getElementById('znaky').checked;
    let includeUppercase = document.getElementById('velky').checked;

    let password = generatePassword(length, includeNumbers, includeSpecialChars, includeUppercase);
    savePassword(password);
    loadPasswords();
}

window.addEventListener('load', function () {
    loadPasswords();
});