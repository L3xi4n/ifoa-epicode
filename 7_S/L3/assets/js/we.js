fetch("https://striveschool-api.herokuapp.com/books", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  console.log(response.json());
})