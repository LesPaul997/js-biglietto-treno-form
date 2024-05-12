'use strict';

function ticketPrice () {
    const userKm = parseFloat(document.getElementById('user-km').value);
    const userAge = parseInt(document.getElementById('user-age').value);
    const ticketPriceForKm = 0.21;
    let ticketPrice = ticketPriceForKm * userKm;

    if (userAge < 18) {
        ticketPrice *= 0.8; //QUI APPLICO IL 20%
    } else if (userAge > 65) {
        ticketPrice *= 0.6; //QUI APPLICO IL 40%
    }

    ticketPrice = ticketPrice.toFixed(2);

    document.getElementById('result-container').innerHTML = 'Avendo analizzato i tuoi dati il prezzo a te associato è : ' + ticketPrice + "€";
    document.getElementById('result').style.display = 'block';
}