var knihy = [];

function pridat() {
    var kniha = {
        nazev: "",
        autor: "",
        year: 0,
        genre: ""
    };

    kniha.nazev = document.getElementById("nazev").value;
    kniha.autor = document.getElementById("autor").value;
    kniha.rok = document.getElementById("rok").value;
    kniha.zanr = document.getElementById("zanr").value;

    boks.push(kniha);
    console.log(knihy);

}

function smazat() {
    var smazani = window.prompt("");

    knihy.splice(smazani, 1);
    console.log(knihy);
}

function hledat() {
    document.getElementById("vysledek").innerHTML = ""
    let whaSer = document.getElementById("searchBy").value

    if (document.getElementById("najitNazev").checked) {
        for (let i = 1; i < boks.length; i++) {
            if (whaSer == boks[i].title) {
                document.getElementById("searchResult").innerHTML += (boks[i].title + " " + boks[i].author + " " + boks[i].year + " " + boks[i].genre);
            }
        }
    } else if (document.getElementById("najitAutora").checked) {
        for (let i = 1; i < boks.length; i++) {
            if (whaSer == boks[i].author) {
                document.getElementById("searchResult").innerHTML += (boks[i].title + " " + boks[i].author + " " + boks[i].year + " " + boks[i].genre);
            }
        }
    } else if (document.getElementById("najitRok").checked) {
        for (let i = 1; i < boks.length; i++) {
            if (whaSer == boks[i].genre) {
                document.getElementById("searchResult").innerHTML += (boks[i].title + " " + boks[i].author + " " + boks[i].year + " " + boks[i].genre);
            }
        }
    } else if (document.getElementById("najitZanr").checked) {
        for (let i = 1; i < boks.length; i++) {
            if (whaSer == boks[i].year) {
                document.getElementById("searchResult").innerHTML += (boks[i].title + " " + boks[i].author + " " + boks[i].year + " " + boks[i].genre);
            }
        }
    }
}