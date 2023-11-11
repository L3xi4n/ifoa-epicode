//se la somma di due numeri è uguale a 5, scrivi vero, sennò scrivi falso

let num1 = 6;
let num2 = 6;

let risultato;
if (num1 + num2 == 5){
  risultato = "vero";
} else{
  risultato = "falso";
}
document.getElementById('wawa').innerHTML += " " + risultato;
console.log(risultato);

//se la somma di due numeri è divisibile per due scrivi il numero, altrimenti scrivi falso. Alla fine scrivi il tipo della variabile risultato.

if ((num1 + num2) / 2 == 6){
  risultato2 = (num1 + num2);
} else{
  risultato2 = (num1 + num2 / 2);
}
document.getElementById('wawa2').innerHTML += " " + risultato2;
console.log(risultato2);
console.log(typeof(risultato2));

//stampa 5 volte ciao

for (let i = 0; i < 5; i++){
  console.log("ciao");
}

//'tanto è una cazzata while'
//fai un ciclo che si ferma quando la variabile numero è uguale a 10

let numero = 10;

//while (numero < 10)
//{
  //console.log("ciao");
  //numero++;
//}

//pkke amio pkke do while (anche se falso, almeno una volta lo fa voce del verbo fare nella parte del do)'no amio una cazzata pt2'

do{
console.log("affammocc");
numero++;
}
while (numero < 10)