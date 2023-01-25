let index = 0;
let btn_esquerdo = document.getElementById("esquerda");
let btn_direito = document.getElementById("direita");

function esquerda() {
  if(index === 0) {
    return index = 3;
  }
  return index -= 1;
}

function direita() {
  if(index === 3) {
    return index = 0;
  }
  return index +=1;
}

function trocarImagem(index) {
  let img = document.getElementById("img");

  if(index === 0) {
    img.src = './assets/img01.png';
    img.alt = 'Imagem de uma cabana pixelada ao lado de um rio';
  } else if (index === 1) {
    img.src = './assets/img02.png';
    img.alt = 'Imagem de um horizonte pixelado';
  } else if (index === 2) {
    img.src = './assets/img03.png';
    img.alt = 'Imagem de um horizonte pixelado';
  } else if (index === 3) {
    img.src = './assets/img04.png';
    img.alt = 'Imagem de uma cabana pixelada de frente para um açude';
  }
}

btn_esquerdo.addEventListener("click", function() {
  esquerda();
  trocarImagem(index);
});

btn_direito.addEventListener("click", function() {
  direita();
  trocarImagem(index);
});
