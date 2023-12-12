const url = "https://striveschool-api.herokuapp.com/books";
// prendiamo l'url della pagina(fetch è una promise)
fetch(url)
  //convertiamo le "risposte" in json
  .then((response) =>
    response
      .json()
      //possiamo prendere i dati dopo che sono stati convertiti in json
      .then((data) => populateHomePage(data))
  );

//creaiamo la funzione er "popolare" la pagina
function populateHomePage(data) {
  //facciamo un ciclo nel quale passiamo i dati presi dall'url.
  //Per ogni libro, creami una card
  data.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";
    card.style.margin = "10px";
    card.style.padding = "0";
    card.style.display = "inline-block";
    // card.style.boxShadow = "0 0 5px 6px #ccc";

    //in ogni card ci andiamo a mettere quello che vogliamo
    //l'immagine di ogni copertina
    let img = document.createElement("img");
    img.src = book.img;
    img.classList.add("card-img-top");
    img.alt = "book_cover";
    img.style.height = "70%";

    //creiamo il div della cardBody nel quale mettere il titolo e il prezzo
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    //titolo
    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = book.title;
    cardTitle.style.fontSize = "1rem";
    cardTitle.style.fontWeight = "bold";
    //prezzo
    let cardPrice = document.createElement("div");
    cardPrice.classList.add("card-price");
    cardPrice.innerText = "prezzo: " + "€" + book.price;
    cardPrice.style.marginTop = "1rem";

    let cardLink = document.createElement("a");
    cardLink.classList.add("btn", "btn-primary", "me-2");
    cardLink.style.marginTop = "2rem";

    //creiamo un bottone per far "sparire" la card dalla pagina
    let cardRemove = document.createElement("a");
    cardRemove.classList.add("btn", "btn-danger", "me-2");
    cardRemove.style.marginTop = "2rem";

    cardLink.href = "#";
    cardLink.innerText = "Compra ora";

    cardRemove.href = "#";
    cardRemove.innerText = "Scarta";

    // cardRemove.addEventListener("click", function removeBook(){
    //     localStorage.removeItem("card");
    // });

    // let cardRemoveFromCart = document.createElement('a');
    // cardRemoveFromCart.classList.add('btn', 'btn-warning', 'me-2');
    // cardRemoveFromCart.style.marginTop = "2rem";

    // cardRemoveFromCart.href = '#';
    // cardRemoveFromCart.innerText = 'DEL';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardLink);
    cardBody.appendChild(cardRemove);
    // cardBody.appendChild(cardRemoveFromCart);
    card.appendChild(img);
    card.appendChild(cardBody);

    document.querySelector("#root").appendChild(card);
  });
}
