var listPlayer1 = [];
var listPlayer2 = [];
var players = [];
let currentPlayer = 1;
let resultados = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];
let condicao = false;
let winner = "";
let jogadas = 0;

var parent = document.querySelector("#box");
parent.addEventListener("click", (event) => {
  if(event.target.matches(".box__table")) {
    var i = event.target.getAttribute("data-index");
    jogadas++;
    if((currentPlayer === 1) && (listPlayer1.indexOf(i) === -1)) {
      listPlayer1.push(i);
      var img = document.createElement('img');
      img.setAttribute("class", "imgChild");
      img.src = "assets/circulo.png";
      img.style.width = "50%";
      event.target.appendChild(img);
      validaLista(listPlayer1);
      currentPlayer = 2;
    } else if ((currentPlayer === 2) && (listPlayer1.indexOf(i) === -1)) {
      listPlayer2.push(i);
      var img = document.createElement('img');
      img.setAttribute("class", "imgChild");
      img.src = "assets/x.png";
      img.style.width = "50%";
      event.target.appendChild(img);
      validaLista(listPlayer2);
      currentPlayer = 1;
    }
  }
});

function start() {
  var player1 = document.getElementById("player1").value;
  var player2 = document.getElementById("player2").value;
  document.getElementById("info__players").style.display = "none";
  document.getElementById("table").style.display = "flex";
  players.push(player2);
  players.push(player1);
}

function validaLista(list) {
  resultados.forEach(sequence => {
    let temp = [...sequence];
    list.forEach(item => {
      let index = temp.indexOf(item);
      if (index !== -1) {
        temp.splice(index, 1);
      }
    });
    if (temp.length === 0 ) {
      condicao = true;
      if (currentPlayer === 2 ) {
        winner = players[0];
      } else {
        winner = players[1];
      }
    } 
  });
  if(condicao) {
    document.getElementById("result").style.display = "flex";
    document.getElementById("result__text").style.display = "block";
    document.getElementById("winner").textContent = winner;
  } else if(!condicao && jogadas === 9) {
    document.getElementById("result").style.display = "flex";
    document.getElementById("tie").style.display = "block";
  }
}

function reload() {
  window.location.reload(false);
}