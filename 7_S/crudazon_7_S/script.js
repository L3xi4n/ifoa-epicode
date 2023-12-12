const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmY2NGMwNTgzNTAwMTg1MjJlNmMiLCJpYXQiOjE3MDIzNzUyNjksImV4cCI6MTcwMzU4NDg2OX0.aRp0wsah056_CQuoojXHeZJj_ldmi_fIpd5kOaTs_vc";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

let products=[];


function infos(products){
  products.forEach(el => {
    document.getElementsByClassName("products").innerHTML;
}
  )}


















// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MmY2NGMwNTgzNTAwMTg1MjJlNmMiLCJpYXQiOjE3MDIzNzUyNjksImV4cCI6MTcwMzU4NDg2OX0.aRp0wsah056_CQuoojXHeZJj_ldmi_fIpd5kOaTs_vc"
// }
// })

// const drawCard = image => `<div class="col">
//                           <div class="card">
//                           <img src="${product.imageUrl}" class="card-img-top" alt="${image.alt}">
//                             <div class="card-body d-flex flex-column">
//                               <h5 class="card-title">"${product.name}"</h5>
//                                 <p class="card-text mt-auto">
//                                   "${product.decription}"
//                                 </p>
//                                 <div
//                                   class="d-flex justify-content-between align-items-center"
//                                 >
//                                   <div class="btn-group">
//                                     <a class="btn" href="back.html?id=${product._id}">Modifica</a>
//                                     <a class="btn" href="back.html?id=${product._id}">Scopri di più</a>
//                                   </div>
//                               </div>
//                         </div>`;

                  
                      