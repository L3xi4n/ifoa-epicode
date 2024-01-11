//mostra la data con il giorno scritto interamente
function one() {
  const longDate = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  let text = longDate.toLocaleString("it-IT", options);
  document.getElementById("nameDay").innerHTML = text;
}
one();

//mostra l'orario in formato h24 e h12
function two() {
  const justNum = new Date();

  const options = {
    hourCycle: "h12",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const options2 = {
    hourCycle: "h24",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  let text = justNum.toLocaleString("it-IT", options);
  let text2 = justNum.toLocaleString("it-IT", options2);
  document.getElementById("allNum").innerHTML = text;
  document.getElementById("allNum2").innerHTML = text2;
}
two();

function three() {
  const shortDate = new Date();

  const options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  let text = shortDate.toLocaleString("it-IT", options);
  document.getElementById("shortDay").innerHTML = text;
}
three();

// potevi fare un array solo u stupid, e prendere l'indice.
