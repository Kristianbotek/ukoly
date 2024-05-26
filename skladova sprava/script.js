const produkty = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];

const produktyTable = document.getElementById("produktyTable");
produkty.forEach(produkt => {
    const row = produktyTable.insertRow();
    row.insertCell().textContent = produkt.nazev;
    row.insertCell().textContent = produkt.cenaZaKus;
    row.insertCell().textContent = produkt.pocetNaSklade;
});

const nejdrazsiProdukt = document.getElementById("nejdrazsiProdukt");
const nejdrazsi = produkty.reduce((prev, current) => (prev.cenaZaKus > current.cenaZaKus) ? prev : current);
nejdrazsiProdukt.textContent = `Nejdražší produkt: ${nejdrazsi.nazev} (${nejdrazsi.cenaZaKus} Kč)`;

function filtrujProdukty() {
    const mnozstvi = parseInt(document.getElementById("mnozstvi").value);
    const filtrovaneProduktyTable = document.getElementById("filtrovaneProduktyTable");
    filtrovaneProduktyTable.innerHTML = "<tr><th>Název</th><th>Cena za kus</th><th>Počet kusů na skladě</th></tr>";
    const filtrovaneProdukty = produkty.filter(produkt => produkt.pocetNaSklade < mnozstvi);
    filtrovaneProdukty.forEach(produkt => {
        const row = filtrovaneProduktyTable.insertRow();
        row.insertCell().textContent = produkt.nazev;
        row.insertCell().textContent = produkt.cenaZaKus;
        row.insertCell().textContent = produkt.pocetNaSklade;
    });
}

const celkovaHodnota = document.getElementById("celkovaHodnota");
const hodnotaZasob = produkty.reduce((prev, current) => prev + (current.cenaZaKus * current.pocetNaSklade), 0);
celkovaHodnota.textContent = `Celková hodnota zásob: ${hodnotaZasob} Kč`;

function aktualizujPocet() {
    const nazevProduktu = document.getElementById("nazevProduktu").value;
    const novyPocet = parseInt(document.getElementById("novyPocet").value);
    const produkt = produkty.find(produkt => produkt.nazev === nazevProduktu);
    if (produkt) {
        produkt.pocetNaSklade = novyPocet;
        const pocetNaSkladeCell = produktyTable.rows[produkt.index + 1].cells[2];
        pocetNaSkladeCell.textContent = novyPocet;
        celkovaHodnota.textContent = `Celková hodnota zásob: ${hodnotaZasob} Kč`;
    }
}