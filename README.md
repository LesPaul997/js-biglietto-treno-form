 Utilizzate Bootstrap come libreria UI.

Il programma dovrà mostrare una form da compilare usando i corretti campi HTML di input con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.


Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.


Il recap dei dati e l'output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo).

////////////////////////////////////////////////////////////////

btn.addEventListener('click', function(){
    console.log(ticketprice);
})


//RISULTATO
let result = document.getElementById('result');
let resultContainer = document.getElementById('result-container');


 if (userAge < 18) {
    ticketprice = ticketPrice - ((ticketPrice * percentageUnder) / 100)
} else if (userAge > 65) {
    ticketprice = ticketPrice - ((ticketPrice * percentageOver) / 100)
} 


formCalculator.addEventListener('submit', function (event) {
    event.preventDefault();


    result.innerText = ticketPrice;

    //visualizzo contenitore risultato
    resultContainer.classList.remove('d-none');
  });


//////////////////////////////////////////////////////////////
PARCHEGGIO QUI UN ATTIMO TUTTO IL CODICE JAVASCRIPT ALL'ULTIMA MODIFICA
/////////////////////////////////////

//ELEMENTI DELLA TRACCIA
const formCalculator = document.getElementById('calculator-form');
const ticketPriceForKm = 0.21;
const percentageUnder = 20;
const percentageOver = 40;
const btn = document.querySelector('.btn');

//ELEMENTI DATI DALL'UTENTE
const userKm = document.getElementById('user-km');
const userAge = document.getElementById('user-age'); 

//RISULTATO
const result = document.getElementById('result');
const resultContainer = document.getElementById('result-container');

//PREZZO DEL BIGLIETTO SENZA SCONTO
let ticketPrice = ticketPriceForKm * userKm;
ticketPrice = ticketPrice.toFixed(2);

document.getElementById('result-container').innerText = 'Il prezzo a te associato è : ' + ticketPrice + "€";

console.log(ticketPrice);

formCalculator.addEventListener('submit', function (event) {
    event.preventDefault();


    result.innerText = ticketPrice;

    //visualizzo contenitore risultato
    resultContainer.classList.remove('d-none');
  });

