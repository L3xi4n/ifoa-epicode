//callbacks:

//passi alla funzione asy un parametro che è una funzione
function asy(paperino, milliseconds) {
  //ha del codice che esegue subito
  console.log("inizio operazione async");
  //poi definisci un setTimeout (lo stiamo facendo per simulare un delay)
  setTimeout(() => {
    //quando entri qua, aspetta il tot di secondi dati, e poi esegue quello che ha dentro
    console.log("fine operazione async dopo 5 secondi");
    paperino();
  }, milliseconds);
}

function paperino() {
  console.log("sono paperino");
}

asy(paperino, 5000);
// setTimeout(paperino, 2000);
//qui esce solo "sono paperino"

// div.addEventListener("click", () => {
//   setTimeout(() => {
//     console.log("operazione async completata dopo 5 secondi");
//   }, 5000);
// });



// 