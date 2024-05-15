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

//ELEMENTI DELLA PAGINA
const formCalculator = document.getElementById('calculator-form'); 
const resultElement = document.getElementById('result');
const kmField = document.getElementById('user-km');
const ageField = document.getElementById('user-age');



//ELEMENTI DELLA TRACCIA
const ticketPriceForKm = 0.21;
const percentageUnder = 20;
const percentageOver = 40;




// COSE DA FARE ALL'INVIO DEL FORM
formCalculator.addEventListener('submit', function (event) {
    // Impedisco il  ricaricamento della pagina
    event.preventDefault();
    
// Raccolgo i dati nel form
const kms = parseInt(kmField.value);
const age = parseInt(ageField.value);  

    //VALIDATION 💥
    // Se qualcosa non va, non proseguo
    if (isNaN(kms) || isNaN(age) || kms <= 0 || age <= 0) {
            resultElement.innerText = 'sono stati inseriti dati non validi';
            resultElement.classList.add('text-danger');
            return;
    }
        // Calcolo il prezzo base
        let ticketPrice = ticketPriceForKm * kms;
        
        
        if (age < 18) {
            ticketPrice = ticketPrice * 0.8; //QUI APPLICO IL 20%
        } else if (age > 65) {
            ticketPrice = ticketPrice * 0.6; //QUI APPLICO IL 40%
        } 
        
        resultElement.classList.remove('text-danger');
        resultElement.innerText = `Il prezzo del tuo biglietto è: €${ticketPrice.toFixed(2)}`; 
        console.log(resultElement, resultElement.innerText);
        
});
