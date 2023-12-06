
document.getElementById("save").addEventListener("click", function(){
  let person = document.getElementById("person").value;
  localStorage.setItem("user", person);
});

// const person = document.getElementById("person");
// localStorage.setItem("user", person);
// localStorage.setItem("user", JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem("user")));



// localStorage.removeItem("nome", nome);