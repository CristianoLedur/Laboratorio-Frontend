let list = [0,1,2,3,4,5,6];
let index = 0;
let btn_esquerdo = document.getElementById("esquerda");
let btn_direito = document.getElementById("direita");
let imgs = document.getElementsByClassName('imgs');
let titlesH3 = document.getElementsByClassName('title');
let paragraph = document.getElementsByClassName('paragraph');


function esquerda() {
  if(index === 0) {
    return index = 6;
  }
  return index -= 1;
}

function direita() {
  if(index === 6) {
    return index = 0;
  }
  return index +=1;
}

window.onload = function() {
  fetch('./dados.json')
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < 3; i++) {
      imgs[i].src = data[i].img;
      titlesH3[i].innerHTML = data[i].title;
      paragraph[i].innerHTML = data[i].text;
    }
  });
}

function trocarConteudo(index) {
  fetch('./dados.json')
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < 3; i++) {
      index = (index) % (list.length);
      imgs[i].src = data[index].img;
      titlesH3[i].innerHTML = data[index].title;
      paragraph[i].innerHTML = data[index].text;
      index++;
    }
  })
}

btn_esquerdo.addEventListener("click", function() {
  esquerda();
  trocarConteudo(index);
});

btn_direito.addEventListener("click", function() {
  direita();
  trocarConteudo(index);
});
