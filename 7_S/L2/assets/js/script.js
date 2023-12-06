let sound = new Audio("boom.wav");
let play = 1;
let points = 0;
let level = "easy";
let levels = {
  "easy": 20,
  "medium": 40,
  "hard": 60
}


const levelSelector = document.getElementById("level");
levelSelector.onchange = () => {
  level = levelSelector.value;
  clearGrid();
  createBombs();
}

function createGrid() {
  const box = document.getElementById("mainDiv");
  for (i = 0; i < 100; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("onclick", "step(this)");
    box.appendChild(square);
  }
  //quando arriva a 100, quindi la griglia esiste, ci mette le bombe
  createBombs();
}

function createBombs() {
  let squares = document.querySelectorAll(".square"); //ti ritorna una node list
  squares.forEach(element => {
    element.classList.remove("bomb");
  });
  for (i = 0; i <= levels[level]; i++) {
    let casual = Math.floor(Math.random() * 100);
    //fai un array e aggiungici la classe bomb
    squares[casual].classList.add("bomb");
  }
}

function step(e){
  if (!e.classList.contains("bomb") && play == 1) {
    //se sei un quadratino che non contiene la bomba
    e.classList.add("good");
    points ++
    document.getElementById("points").innerText = points;
  }else if (e.classList.contains("bomb") && play == 1){
    //se sei un quadratino che contiene la bomba
    e.classList.add("exploded");
    sound.play();
    play = 0;
    document.getElementById("gameover").style.opacity = "1";
  }
}


function clearGrid() {
const box = document.getElementById("mainDiv").innerHTML = '';
play = 1;
points = 0;
document.getElementById("points").innerText = "points";
document.getElementById("gameover").style.opacity = "0";
createGrid();
}


createGrid()
