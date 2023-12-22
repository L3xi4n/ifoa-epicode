import {todoList} from './list.js';

function showTodo(){
  const list = document.getElementById('list')
  ;isFinite.innerHTML = ''
  todoList.forEach(el => {
    const newLi = document.createElement('')
    list.innerHTML = el
  });
}
export {showTodo}