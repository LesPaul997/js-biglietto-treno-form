'use strict';

//ELEMENTI DELLA TRACCIA
const formCalculator = document.getElementById('calculator-form');
const ticketPriceForKm = 0.21;
const percentageUnder = 20;
const percentageOver = 40;

//ELEMENTI DATI DALL'UTENTE
const userKm = document.getElementById('user-km');
const userAge = document.getElementById('user-age');



//PREZZO DEL BIGLIETTO SENZA SCONTO
let ticketprice = ticketPriceForKm * userAge;

//RISULTATO
const result = document.getElementById('result');
const resultContainer = document.getElementById('result-container');

 if (userAge < 18) {
    ticketprice = ticketprice - ((ticketprice * percentageUnder) / 100)
} else if (userAge > 65) {
    ticketprice = ticketprice - ((ticketprice * percentageOver) / 100)
} 


formCalculator.addEventListener('submit', function (event) {
    event.preventDefault();

  
    //inserisco risultato nel dom
    result.innerText = ticketprice;
    //visualizzo contenitore risultato
    resultContainer.classList.remove('d-none');
  });

