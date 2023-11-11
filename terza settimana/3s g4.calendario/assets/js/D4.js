// 1. capire in che mese siamo, per scriverlo nell'h1, e quanti giorni ha il mese, per generare il giusto numero id celle.

const now = new Date();

// per salvare gli appuntamenti abbiamo bisogno di un'array, perché ogni appuntamento è una stringa, ogni giorno può contenere infiniti apuntamenti e ogni mese ha un numero di giorni variabile
// creeremo un array di array, dove l'array padre è il mese e gli array figli rappresentano i giorni

/* es. oggi è il 10 novembre: l'array padre rappresenta novembre, gli array figli rappresentano i trenta giorni
 [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  ['9:00 - live voding calendario', '14:00 esercizio quotidiano: tombola', '18:00 aperitivo],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  ...
]

non sapendo quanti giorni ci sono nel mese in corso, si crea il "guscio" del mese
*/

const appointments = [];
//lo facciamo per far stampare tutto il nome del mese
const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Marzo",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const scriviMese = function () {
  const title = document.querySelector("h1");
  const indiceMese = now.getMonth(); //10 perche' siamo a novembre, dato che restituisce numeri, il nome del mese lo salva nell'indice, e dal numero a cui corrisponde prende il nome
  const nomeMese = monthNames[indiceMese]; //novembre, lo prende dall'indice
  title.innerText = nomeMese; //title lo prende dal selector di h1, per stampare il nome del mese
};

scriviMese();

//sappiamo in che mese siamo, ma quanti giorni ha queso mese, er poi riempire le celle?
//mannaggia a febbraio che ha 29 giorni negli anni bisestili, mi serve sapere pure l'anno

const giorniTotali = function () {
  //numeroGiorni l'abbiamo creato per prendere il numero dei giorni del mese
  const anno = now.getFullYear(); //adesso è 2023, perche' mo è il 2023
  const mese = now.getMonth(); //10, perche' siamo a novembre

  //dal momento che nell'oggetto il numero dei giorni del mese parte da 1, mi basta sapere qual e' l'ultimo giorno del mese in corso per avere il suo numero di giorni
  //per sapere l'ultimo giorno del mese in corso, creo la data del primo giorno del mese successivo al mese in corso, e faccio  -1

  let ultimoGiorno = new Date(anno, mese + 1, 0); //anno, mese + 1, giorno = 0 dicembre 2023, che non esiste, ovvero 30 novembre. novembre ha 30 giorni.
  const numeroGiorni = ultimoGiorno.getDate(); //(30)tira fuori i giorni del mese
  return numeroGiorni; //numeroGiorni è il numero di volte per cui dovro' ripetere la creazione dei div corrispondenti ai singoli giorni
};

//quando carico un mese, eventuali calssi selected precedenti devono essere rimosse, altrimenti mi trovo selezionati i giorni del mese precedente che avevano degli appuntamenti

//selezioni TUTTI gli elementi con classe selected e rimuovo la classe

const deselezionaCelle = function () {
  const celle = document.querySelectorAll(".day");
  celle.forEach((element) => {
    element.classList.remove("selected");
  });
};

//qunado faccio click su un giorno, nel div id="newMeetingDay", dovro' leggere la data selezionata

const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById("newMeetingDay");
  giorno.classList.add("hasDay");
  giorno.innerText = indiceGiorno + 1;
};

//a questo punto va creata la "griglia" dei div contenenti i giorni del mese in corso; questa griglia userà il numero giorni per gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function (numeroGiorni) {
  //numero giorni è il numero di giorni del mese corrente
  const calendarDiv = document.getElementById("calendar");

  for (let i = 0; i < numeroGiorni; i++) {
   
    const cellaGiorno = document.createElement("div"); //ad ogni giorno associo un div
    cellaGiorno.classList.add("day"); //stilizzo il div come definito in css

    cellaGiorno.addEventListener("click", function (e) {
      //rendo cliccabili i div dei giorni
      deselezionaCelle(); //deseleziono l'eventuale altra cella selezionata
      cellaGiorno.classList.add("selected"); //aggiungo la classe css per mostrare la selezione del giorno cliccato
      giornoAppuntamento(i); //scrivo il giorno cliccato nella sezione giorno
      //se ci sono già eventi nella giornata, devo far comparire la lista
      if (appointments[i].length > 0) {
        mostraAppuntamenti(i);
      } else {
        const divAppuntamenti = document.getElementById("appointments");
        divAppuntamenti.style.display = "none";
      }
    });
    //devo scrivere il numero del giorno nei div
    const valoreCella = document.createElement("h3");
    valoreCella.innerText = i + 1;
    //"appendo" gli elementi creati
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);

    //creato il calendario, inserisco nell'array appointments l'array dei giorni del mese
    appointments.push([]); //array vuoto nel quale verranno inseriti 30 array vuoti
    //console.log(appointments);
  }
};

creaGriglia(giorniTotali());

const mostraAppuntamenti = function (indiceGiorno) {
  //con questa funizone si popola la lista degli appuntamenti del giorno
  //prendere gli appuntamenti giusti
  const appuntamentiGiorno = appointments[indiceGiorno];
  //selezionare la lista contenitore
  const lista = document.querySelector("#appointments ul");
  //svuota lista
  lista.innerHTML = "";
  //ciclare gli appuntamenti del giorno e creare un li per ciascuno di essi
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerText = element;
    lista.appendChild(newLi);
  });
  //la lista è piena ma ancora nascosta
  const divAppuntamenti = document.getElementById("appointments");
  divAppuntamenti.style.display = "block";
};

const meetingForm = document.querySelector("form");
meetingForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // 1- giorno dell'appuntamento
  const selectedDay = document.getElementById("newMeetingDay").innerText;
  // 2- ora dell'evento selezionato
  const meetingTime = document.getElementById("newMeetingTime").value;
  // 3- nome dell'appuntamento
  const meetingName = document.getElementById("newMeetingName").value;
  // 4- creo stringa dell'appuntamento
  const stringaAppuntamento = `${meetingTime} - ${meetingName}`;
  //scrivo l'appuntamento nell'array
  const indiceArray = parseInt(selectedDay) - 1;
  //console.log('array prima del salvataggio');
  appointments[indiceArray].push(stringaAppuntamento);
  //console.log('array dopo del salvataggio');

  const pallino = document.createElement("div");
  pallino.classList.add("pallino");

  const divSelezionato = document.querySelector(".selected");
  if (!divSelezionato.querySelector(".pallino")) {
    divSelezionato.appendChild(pallino);
  }
  mostraAppuntamenti(indiceArray);
});
