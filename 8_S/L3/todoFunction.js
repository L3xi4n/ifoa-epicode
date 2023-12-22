import {todoList} from './list.js';

function showTodo(){
  const list = document.getElementById('list')
  ;isFinite.innerHTML = ''
  todoList.forEach((el) => {
    const newLi = document.createElement('')
    newLi.innerHTML = Object.keys(el) + '-' + Object.values(el)
    list.innerHTML += newLi
  });
}

function addNewTodo(){
  const newTodo = document.getElementById('newTodoInput').value
  const newTodoTime = document.getElementById('todoTime').value
  if(newTodo == ''){
    alert('devi inserire del testo')
  }else{
    
  }
}




export {showTodo}