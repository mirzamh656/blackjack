let prvaKarta = 10;
let drugaKarta = 7;
const karte = [prvaKarta, drugaKarta];
let imaBlackjack = false;
let uIgri = true;
let poruka = "";
let prvaPoruka = document.getElementById("p1");
let zbirElement = document.getElementById("zbir");
let karteElement = document.getElementById("karte");
let zbirKarti = prvaKarta + drugaKarta;

function pocniIgru() {
    igraj();
}

function igraj () {
    if (zbirKarti <= 20) {
        poruka = "Želite li povući još jednu kartu?";
    } else if (zbirKarti === 21) {
        poruka = "Čestitamo, pobijedili ste !!!";
        imaBlackjack = true;
    } else {
        poruka = "Ispadate iz igre !!!";
        uIgri = false;
    }
    prvaPoruka.textContent = poruka;
    zbirElement.textContent = "Zbir karti: " + zbirKarti;
    karteElement.textContent = "Karte: ";
    for (i = 0; i < karte.length; i++) {
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
}

function novaKarta () {
    let karta = 4;
    zbirKarti += karta;
    karte.push(karta);
    igraj();
}

