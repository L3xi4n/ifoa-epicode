// funzione autoeseguente
// (function uno(){
//   console.log('uno');
// })();

// function due(){
//   setTimeout(() => {

//   console.log('due');
// }, 2000)
// }

// function tre(){
//   console.log('tre');
// }

// uno()
// due()
// tre()

// esercizio fizzBuzz
// UNA CLASSE PRENDA COME PARAMETRO OPZIONALE UN ARRAY DI NUMERI
// DEVO CONTROLLARE CHE MI ARRIVI UN ARRAY O MENO
// SE MI ARRIVA VOGLIO CHE SUCCEDA QUESTO:
// SE UN NUMERO E DIVISIBILE PER 3 STAMPO PIPPO
// SE UN NUMERO E DIVISIBILE PER 5 STAMPO PLUTO
// SE UN NUMERO E DIVISIBILE SIA PER 3 CHE PER 5 STAMPO PAPERINO
// SE UN NUMERO NON E DIVISIBILE PER NESSUNO DEI DUE STAMPO IL NUMERO IN FORMATO STRINGA

// const arr = [1,2,3,4,5,6,7,8]
// console.log(arr);

// class Numbers {
//   constructor(arr = null) {
//     if (arr != null) {
//       this.numbers = arr;
//     }
//   }
//   confrontation() {
//     this.numbers.forEach((number) => {
//       if (number % 3 === 0 && number % 5 === 0) {
//         console.log("paperino");
//       } else if (number % 3 === 0) {
//         console.log("pippo");
//       } else if (number % 5 === 0) {
//         console.log("pluto");
//       } else {
//         console.log(number.toString() + " non è divisibile per 3 o 5");
//       }
//     });
//   }
// }

// const prova1 = new Numbers([1, 2, 3, 4, 5, 37, 20, 42, 29, 7, 8, 17]);

// if (prova1.hasOwnProperty("numbers")){
//   prova1.confrontation();
// }else{
//   console.log("non ho i numeri biatch");
// }



// document.getElementById("button").addEventListener('click', test());
// function test(){
//   return function(){
//  console.log("Hi people");
//   }
// }

const main = document.getElementById("main");
const uno = document.getElementById("uno");
const due = document.getElementById("due");
const tre = document.getElementById("tre");

main.addEventListener('click', function (e){
  e.target.style.backgroundColor = "rgb(0, 0, 101)";
    e.stopPropagation();
})
uno.addEventListener('click', function (e){
  e.target.style.backgroundColor = "rgb(176, 253, 181)";
  e.stopPropagation();
})
due.addEventListener('click', function (e){
  e.target.style.backgroundColor = "rgb(176, 225, 253)";
  e.stopPropagation();
})
tre.addEventListener('click', function (e){
  e.target.style.backgroundColor = "rgb(208, 176, 253)";
  e.stopPropagation();
})
