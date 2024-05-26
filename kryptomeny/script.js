const cryptocurrencies = [
    { name: 'Bitcoin', price: 50000, marketCap: 1000000000, volume: 500000 },
    { name: 'Ethereum', price: 2000, marketCap: 500000000, volume: 200000 },
    { name: 'Ripple', price: 0.5, marketCap: 100000000, volume: 10000 },
];

function displayCryptocurrencies() {
    const cryptoList = document.getElementById('cryptoList');
    cryptoList.innerHTML = '';

    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredCryptocurrencies = cryptocurrencies.filter(crypto => {
        return crypto.name.toLowerCase().includes(searchTerm);
    });

    filteredCryptocurrencies.forEach(crypto => {
        const cryptoItem = document.createElement('div');
        cryptoItem.classList.add('cryptoItem');

        const nameElement = document.createElement('h2');
        nameElement.textContent = crypto.name;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Cena: $${crypto.price}`;

        const marketCapElement = document.createElement('p');
        marketCapElement.textContent = `Tržní kapitalizace: $${crypto.marketCap}`;

        const volumeElement = document.createElement('p');
        volumeElement.textContent = `Objem obchodů: $${crypto.volume}`;

        cryptoItem.appendChild(nameElement);
        cryptoItem.appendChild(priceElement);
        cryptoItem.appendChild(marketCapElement);
        cryptoItem.appendChild(volumeElement);

        cryptoList.appendChild(cryptoItem);
    });
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', displayCryptocurrencies);

displayCryptocurrencies();