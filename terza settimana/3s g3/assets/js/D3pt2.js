let addToDoBtn = document.getElementById('addNewTask');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('newTask');

addToDoBtn.addEventListener('click', function(){
  const newTask1 = document.getElementById('p')
  newTask1.innerText = inputField.value;
  toDoContainer.appendChild(newTask1);
})