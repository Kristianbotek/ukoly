var users = [];

function register() {
    var username = document.getElementById('reg-username').value;
    var password = document.getElementById('reg-password').value;

    var userExists = users.some(function (user) {
        return user.username === username;
    });

    if (userExists) {
        alert('Uživatel již existuje');
    } else {
        users.push({ username: username, password: password });
        alert('Registrace úspěšná');
    }
}

function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    var user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        alert('Přihlášení úspěšné');
    } else {
        alert('Neplatné uživatelské jméno nebo heslo');
    }
}