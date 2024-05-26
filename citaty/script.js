var quotes = [
    "Představte si to ticho, kdyby lidé říkali jen to, co vědí.",
    "Čtenář prožije tisíc životů, než zemře. Člověk, jenž nikdy nečte, prožije jen jeden.",
    "Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít.",
    "Žít, to je nejvzácnější věc na světě, neboť většina lidí jenom existuje.",
    "Svět patří těm, co se neposerou.",
    "Mnozí z těch, co žijí, by zasluhovali smrt. A mnozí z těch, co zemřeli, by si zasloužili žít.",
    "Na světě nejsou nejkrásnější věci, ale okamžiky.",
    "Ne všichni, kdo bloudí, jsou ztraceni.",
    "Člověk je sám i mezi lidmi.",
    "Nikdy neodkládám na zítřek, co lze udělat pozítří."
];

var lastQuote = "";

function showRandomQuote() {
    var quoteContainer = document.getElementById("quoteContainer");

    var randomIndex = Math.floor(Math.random() * quotes.length);

    if (quotes[randomIndex] === lastQuote) {
        randomIndex = Math.floor(Math.random() * quotes.length);
    }

    lastQuote = quotes[randomIndex];

    quoteContainer.innerHTML = quotes[randomIndex];
}
function showAllQuotes() {
    var quoteList = document.getElementById("quoteList");

    quoteList.innerHTML = "";
    for (var i = 0; i < quotes.length; i++) {
        var listItem = document.createElement("li");
        listItem.innerHTML = quotes[i];
        quoteList.appendChild(listItem);
    }
}