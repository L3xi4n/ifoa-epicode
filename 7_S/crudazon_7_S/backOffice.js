const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmY2NGMwNTgzNTAwMTg1MjJlNmMiLCJpYXQiOjE3MDIzNzUyNjksImV4cCI6MTcwMzU4NDg2OX0.aRp0wsah056_CQuoojXHeZJj_ldmi_fIpd5kOaTs_vc";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

let products=[];


async function postData () {
  const infos = {
    "name": document.getElementById("nameProduct").value,
    "description": document.getElementById("descriptionProduct").value,
    "price": document.getElementById("priceProduct").value,
    "imageUrl": document.getElementById("imageUrlProduct").value,
    "category": document.getElementById("categoryProduct").value,
    "brand": document.getElementById("brandProduct").value
  }


let response = await fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(infos)
})
 response = await response.json();
}
postData();