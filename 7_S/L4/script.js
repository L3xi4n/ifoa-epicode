let primaryImages = async query => {
  const resp = await fetch("https://api.pexels.com/v1/search?query=kitties", {
    method: "GET",
    headers: {
      Authorization: "2E6coOK14WWUwjCRDmsMGw8Kgt8Q3807W3Is7Zn3vUsB49lYBTuDpzS2"
    }
  })
  const body = await resp.json()
  body.photos.forEach(photo => {
    createCard(photo);
  });
}

primaryImages();

function createCard(image) {
  // console.log(image);
  let main = document.getElementById("container-card")

  let card = `<div class="col mb-4">
  <div class="card mb-4 shadow-sm h-100">
  <img src=${image.src.large} class="card-img-top" alt=${image.alt} style="height: 200px; object-fit: cover; cursor: pointer" onclick="goToDetails(${image.id})">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title" onclick="goToDetails(${image.id})" style="cursor: pointer">${image.alt}</h5>
        <p class="card-text mt-auto">
          <a href=${image.photographer_url} target="_blank">
              ${image.photographer}
          </a>
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              onclick="modalLogic(event)"
            >
              View
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
                onclick="hideMe(event)">
              Hide
            </button>
          </div>
          <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</div>`
main.innerHTML += card;
}