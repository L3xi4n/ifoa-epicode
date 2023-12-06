const datiPet = []; 

// stampino degli animali
class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
// funzione per determinare se un animale ha lo stesso padrone
  sameOwner(animale){
    if(this.ownerName == animale.ownerName){
console.log(true);
    }else{
      console.log(false);
    }
  }
}

// animali creati con lo stampino
const gatto1 = new Pet("Link", "Liv", "gatto", "europeo");
const gatto2 = new Pet("Maggie", "Liv", "gatto", "europeo");
const cane1 = new Pet("Puffle", "Aron", "cane", "sconosciuta");

// confronto
gatto1.sameOwner(gatto2);
gatto1.sameOwner(cane1);

// funzione per aggiungere gli animali a un array
function add_pet(){
const nomePet = document.getElementById("petName").value;
const nomeOwner = document.getElementById("ownerName").value;
const specie = document.getElementById("species").value;
const razza = document.getElementById("breed").value;
const pet = new Pet(nomePet, nomeOwner, specie, razza);
// classe + attributo(metodo)
datiPet.push(pet);
console.log(datiPet);
console.log(pet);
}

// funzione per aggiungere gli animali dell'array in una lista




// appunti per aiuto visivo e mentale
// function numeriss(n1, n2){
//   if(n1 > n2){
//     wawalog
//   }
// }
// let pippo = 45; 
// let paperino = 745;

// numeriss(pippo, paperino);