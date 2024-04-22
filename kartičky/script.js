document.addEventListener('DOMContentLoaded', function () {
    const cardContainer = document.getElementById('card-container');
    const addCardForm = document.getElementById('add-card-form');

    loadCards();

    addCardForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const englishInput = document.getElementById('english-input');
        const czechInput = document.getElementById('czech-input');
        const explanationInput = document.getElementById('explanation-input');

        const card = {
            english: englishInput.value,
            czech: czechInput.value,
            explanation: explanationInput.value
        };

        saveCard(card);
        addCardToDOM(card);

        englishInput.value = '';
        czechInput.value = '';
        explanationInput.value = '';
    });

    function saveCard(card) {
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.push(card);
        localStorage.setItem('cards', JSON.stringify(cards));
    }

    function loadCards() {
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards.forEach(function (card) {
            addCardToDOM(card);
        });
    }

    function addCardToDOM(card) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const frontElement = document.createElement('div');
        frontElement.classList.add('front');
        frontElement.textContent = card.english;

        const backElement = document.createElement('div');
        backElement.classList.add('back');
        backElement.innerHTML = `
      <p>${card.czech}</p>
      <p>${card.explanation}</p>
      <button class="delete-button">Smazat</button>
    `;

        cardElement.appendChild(frontElement);
        cardElement.appendChild(backElement);
        cardContainer.appendChild(cardElement);

        cardElement.addEventListener('click', function () {
            backElement.classList.toggle('show');
        });

        const deleteButton = backElement.querySelector('.delete-button');
        deleteButton.addEventListener('click', function (event) {
            event.stopPropagation();
            deleteCard(cardElement, card);
        });
    }

    function deleteCard(cardElement, card) {
        cardContainer.removeChild(cardElement);
        let cards = JSON.parse(localStorage.getItem('cards')) || [];
        cards = cards.filter(function (c) {
            return c.english !== card.english;
        });
        localStorage.setItem('cards', JSON.stringify(cards));
    }
});