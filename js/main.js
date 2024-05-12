'use strict';

/* function ticketPrice () { 
    const userKm = parseInt(document.getElementById('user-km')).value;
    const userAge = document.getElementById('user-age').value;
    const ticketPriceForKm = 0.21;
    let ticketPrice = ticketPriceForKm * userKm;



    if (userAge < 18) {
        ticketPrice *= 0.8; //QUI APPLICO IL 20%
    } else if (userAge > 65) {
        ticketPrice *= 0.6; //QUI APPLICO IL 40%
    }

    ticketPrice = ticketPrice.toFixed(2);

    document.getElementById('result').innerHTML = `Avendo analizzato i tuoi dati il prezzo a te associato è : ${ticketPrice.toFixed(2)}€`;
    document.getElementById('result').style.display = 'block'; 
}  */


//////////////////////////////////////////////////////

//ELEMENTI DELLA TRACCIA
const formCalculator = document.getElementById('calculator-form'); 
const ticketPriceForKm = 0.21;
const percentageUnder = 20;
const percentageOver = 40;
const result = document.getElementById('result');
const userKm = document.getElementById('user-km').value;
const userAge = document.getElementById('user-age').value;
//ELEMENTI DATI DALL'UTENTE
/* const userKm = parseInt(document.getElementById('user-km')).value;
const userAge = parseFloat(document.getElementById('user-age')).value;  */

//INIZIO DEL FORM
formCalculator.addEventListener('submit', function (event) {
    event.preventDefault();

    let ticketPrice = ticketPriceForKm * userKm;

//PREZZO DEL BIGLIETTO SCONTO
/* if (!isNaN(userKm) && !isNaN(userAge)) {
    let ticketPrice = ticketPriceForKm * userKm; */

if (userAge < 18) {
    ticketPrice * 0.8; //QUI APPLICO IL 20%
} else if (userAge > 65) {
    ticketPrice * 0.6; //QUI APPLICO IL 40%
} else {
    ticketPrice;
}

document.getElementById('result').innerContent = `Il prezzo del tuo biglietto è: €${ticketPrice.toFixed(2)}`; 

});
