//Esercizio 1: condizioni con ausilio di operatori logici
// Scrivi un programma che dati quattro numeri, restituisca in output il maggiore e il minore. 

let a = 3;
let b = -1;
let c = 4;
let d = -2;


// soluzione con utilizzo delle condizioni
console.log("_soluzione 1_");

if( a >= b && a >= c && a >= d){
  console.log("maggiore " + a);
}else{
  console.log("minore " + a);
}

if( b >= a && b >= c && b >= d){
  console.log("maggiore " + b);
}else{
  console.log("minore " + b);
}

if( c >= b && c >= a && c >= d){
  console.log("maggiore " + c);
}else{
  console.log("minore " + c);
}

if( d >= b && d >= c && d >= a){
  console.log("maggiore " + d);
}else{
  console.log("minore " + d);
}

// soluzione con array e metodi
console.log("_soluzione 2_");

let numbers = [3, -1, 4, -2];

console.log("maggiore = " + Math.max(3, -1, 4, -2));
console.log("minore = " + Math.min(3, -1, 4, -2));


// Esercizio 2: stringhe e numeri
// Scrivi un programma che dato l’anno corrente e un anno di nascita determini l’età della persona e quanti anni sono necessari per raggiungere i 100
console.log("_soluzione 3_");

const annoCorrente = new Date();
const annoNascita = 0o4/12/2002;

aaaa = annoCorrente.getFullYear();

console.log("anno corrente: " + annoCorrente);



let anni = annoCorrente - annoNascita;
console.log("anni: " + anni);






