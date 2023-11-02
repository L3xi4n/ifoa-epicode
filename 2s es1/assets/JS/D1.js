/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* 

I datatype sono un valore o numero.

tipi primitivi:

La stringa è un insieme di parole.

I dati numerici sono numeri che possono essere semplici o decimali.

Il dato booelano viene rappresentato con true e false, per non farlo confondere con i numeri 0 e 1, letteralmente vuol dire vero o falso.

Null è un dato vuoto fatto apposta, ma non è zero.

Undefined è un dato che non ha un valore assegnato, o non è definito da un numero o una parola.

Data: in ogni suo formato

tipi complessi e derivati: elementi complessi che contengono vari tipi di dati

array:

oggetto:
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Liv";
console.log(myName);
document.getElementById("myName").innerHTML += myName;

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
//soluzione1
let numero1 = 12;
let numero2 = 20;

function somma() {
  return numero1 + numero2;
}

document.getElementById("somma").innerHTML += somma();

//soluzione 2
//console.log(12 + 20);

//soluzione 3
//let somma = 12 + 20;
//console.log(somma);

//soluzione 4
//let numero1 = 12;
//let numero2 = 20;
//console.log(numero1 + numero2);

//soluzione 5
//let nuovoNumero1 = 12;
//let nuovoNumero2 = 20;
//let nuovaSomma = nuovoNumero1 + nuovoNumero2;
//console.log(nuovaSomma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Nedelea";
console.log(myName);

const persona = myName;
//persona = Nedelea; questa istruzione genera un errore di riassegnazione di valore a una costante

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero = 4;
function somma2() {
  return numero - x;
}
document.getElementById("somma2").innerHTML += somma2();

//soluzione 2
//console.log(4 - x);

//soluzione 3
//let y = 4;
//console.log(y - x);

//soluzione 3
//let sottrazione = 4 - x;
//console.log(sottrazione);

//soluzione 4
//let nuovaSottrazione = y - x;
//console.log(nuovaSottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "jhon";
let name2 = "Jhon";

//soluzione 1
let verifica = name1 === name2;
console.log(verifica);
const scrivi = ('verfica')? 'sì' : 'no';
document.getElementById("verifica").innerHTML += scrivi;

//soluzione 2
//console.log('i due nomi sono uguali?' + (name1 === name2)); concatenazione
//console.log('i due nomi sono uguali?', name1 === name2); primitivo

//soluzione 3 risultato
//let verifica = name1 === name2;
//console.log('i due nomi sono uguali?' + verifica); concatenazione
//console.log('i due nomi sono uguali?', (verifica)); primitivo

//sbagliato
/*if(name1!=name2);
{
  alert('sono diversi');
}
*/

//EXTRA:
//soluzione 1
//let altraVerifica = name1.toLowerCase() === name2.toLowerCase();
//console.log('i due nomi sono uguali?', name1.toLowerCase() === name2.toLowerCase());

//soluzione 2
let altraVerifica = name1.toLowerCase() === name2.toLowerCase();
console.log('i due nomi sono uguali?', altraVerifica);