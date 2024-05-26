let favoriteColors = JSON.parse(localStorage.getItem('favoriteColors')) || [];

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
function displayColor(color) {
    const colorDisplay = document.getElementById('color-display');
    const colorCode = document.getElementById('color-code');
    colorDisplay.style.backgroundColor = color;
    colorCode.value = color;
}

function saveColor() {
    const colorCode = document.getElementById('color-code').value;
    if (favoriteColors.includes(colorCode)) {
        alert('Tato barva je již uložena.');
        return;
    }
    if (favoriteColors.length >= 10) {
        alert('Dosáhli jste maximálního počtu oblíbených barev.');
        return;
    }
    favoriteColors.push(colorCode);
    localStorage.setItem('favoriteColors', JSON.stringify(favoriteColors));
    displayFavoriteColors();
}

function displayFavoriteColors() {
    const favoriteColorsList = document.getElementById('favorite-colors');
    favoriteColorsList.innerHTML = '';
    favoriteColors.forEach((color, index) => {
        const li = document.createElement('li');
        li.textContent = color;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Odstranit';
        removeButton.addEventListener('click', function () {
            removeColor(index);
        });
        li.appendChild(removeButton);
        favoriteColorsList.appendChild(li);
    });
}

function removeColor(index) {
    favoriteColors.splice(index, 1);
    localStorage.setItem('favoriteColors', JSON.stringify(favoriteColors));
    displayFavoriteColors();
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('color-container').style.display = 'block';
        displayFavoriteColors();
    } else {
        alert('Neplatné přihlašovací údaje.');
    }
}

document.getElementById('generate-button').addEventListener('click', function () {
    const randomColor = generateRandomColor();
    displayColor(randomColor);
});

document.getElementById('save-button').addEventListener('click', saveColor);

document.getElementById('login-form').addEventListener('submit', login);