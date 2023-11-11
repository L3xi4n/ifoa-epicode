/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 23;
let numero2 = 65;

if(numero1 > numero2) {
  document.getElementById('maggiore').innerHTML = 'il numero più grande è' + numero1;
} 

/*else if(numero2 > numero1)
{
  document.getElementById('maggiore').innerHTML = 'il numero più grande è' + numero2;
}
else{
  document.getElementById('uguale').innerHTML = 'i numeri sono uguali';
}*/


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numeroEqual = 5;

if(numeroEqual !== 5) {
  console.log('notEqual')
  document.getElementById('il numero è diverso da 5');
}
else {
  document.getElementById('notEqual').innerHTML = 'il numero è uguale a 5';
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let diviso5 = 15;

if(diviso5 % 5 === 0) {
  console.log('divisibile per 5')
  document.getElementById('diviso5').innerHTML = 'il numero è divisibile per 5';
}






//var risultato = (number2 % number3);
//document.write('Risultato: ' + risultato);
//console.log(risultato);


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


let verifica1 = 10;
let verifica2 = 2;

if(verifica1 === 8 || verifica2 === 8 || verifica1 + verifica2 === 8 || verifica1 - verifica2 === 8 || verifica2 - verifica1 === 8) {
  document.getElementById('verifica8').innerHTML = 'verificato';
} else {
  document.getElementById('verifica8').innerHTML = 'non verificato';
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 90;
let spedizione = 10;
let totale = totalShoppingCart;

  if(totalShoppingCart < 50){
  totale += spedizione;
  }


document.getElementById('totale').innerHTML = 'costo totale: euro' + totale;


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x1 = 6;
let x2 = 14;
let x3 = 10;

if( x1 > x2){
  if(x3 >= x1){
  document.getElementById('primo').innerHTML = x3;
  document.getElementById('secondo').innerHTML = x1;
  document.getElementById('terzo').innerHTML = x2;
  console.log(x3, x1, x2);
} else{
  if(x3 >= x2) {
    document.getElementById('primo').innerHTML = x1;
    document.getElementById('secondo').innerHTML = x3;
    document.getElementById('terzo').innerHTML = x2;
    console.log(x1, x3, x2);
  } else{
    
      document.getElementById('primo').innerHTML = x1;
      document.getElementById('secondo').innerHTML = x2;
      document.getElementById('terzo').innerHTML = x3;
      console.log(x1, x2, x3);
}
}
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof number1);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let pari = 31;

if (pari%2 == 0) {
	
  document.getElementById('pari').innerHTML = pari + " è pari";
} else {
  document.getElementById('pari').innerHTML = pari + " è dispari";
}
console.log('pari');

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

