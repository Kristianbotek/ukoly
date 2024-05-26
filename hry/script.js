function openGame(game) {
    if (game === 'pexeso') {
        window.open('pexeso.html', '_blank');
    } else if (game === 'piskvorky') {
        window.open('piskvorky.html', '_blank');
    }
}

const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick() {
    if (this.textContent !== '') {
        return;
    }

    this.textContent = currentPlayer;
    this.classList.add(currentPlayer);

    if (checkWin()) {
        alert(`Hráč ${currentPlayer} vyhrál!`);
        resetGame();
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentPlayer);
        });
    });
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });

    currentPlayer = 'X';
}
let flippedCards = [];

function flipCard(card) {
    card.classList.add('card-flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    if (flippedCards[0].querySelector('.card-front').src === flippedCards[1].querySelector('.card-front').src) {
        flippedCards[0].classList.remove('card-flipped');
        flippedCards[1].classList.remove('card-flipped');
    } else {
        flippedCards[0].classList.remove('card-flipped');
        flippedCards[1].classList.remove('card-flipped');
    }

    flippedCards = [];
}