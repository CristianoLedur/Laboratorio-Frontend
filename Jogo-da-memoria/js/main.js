let listImgs = ["./assets/0.png","./assets/1.png","./assets/2.png","./assets/3.png","./assets/4.png","./assets/5.png","./assets/6.png","./assets/7.png","./assets/8.png","./assets/9.png","./assets/10.png","./assets/11.png"];
let parent = document.getElementsByClassName("grid")[0];
let moveCard = document.querySelectorAll("front-card");
var contagem = 0;
var ultimoElemento;
var imgUltimoElemento;
var isRunning = false;

window.onload = function() {
  let listImgs1 = [...listImgs];
  let listImgs2 = [...listImgs];
  let listGeral = listImgs1.concat(listImgs2);
  listGridBox = document.querySelectorAll(".grid-box");
  listGridBox.forEach(element => {
    let randomIndex = Math.floor(Math.random() * listGeral.length);
    let i = listGeral[randomIndex];
    element.getElementsByClassName("back-card")[0].getElementsByClassName("imgs")[0].src = i;
    listGeral.splice(randomIndex, 1);
  });
}

parent.addEventListener("click", (event) => {
  if(isRunning) {
    // com return da erro
  } else {
    if (event.target.matches(".front-card")) {     
      contagem++;
      isRunning = true;
      let ultimoElementoCapturado = ultimoElemento;
      let imgUltimoElementoCapturado = imgUltimoElemento;
      let elemento = event.target;
      let imgElemento = event.target.parentNode.getElementsByClassName("back-card")[0].getElementsByClassName("imgs")[0].src;
      elemento.parentNode.style.transform = "rotateY(180deg)";
      setTimeout(() => { 
        if (contagem === 2) {
          if (imgUltimoElementoCapturado !== imgElemento) {
            elemento.parentNode.style.transform = "none";
            ultimoElementoCapturado.parentNode.style.transform = "none";
            contagem = 0;
          } else if ( imgUltimoElementoCapturado === imgElemento ) {
            ultimoElementoCapturado.style.transition = "0.5s";
            ultimoElementoCapturado.style.width = "70%";
            elemento.style.transition = "0.5s";
            elemento.style.width = "70%";
            contagem = 0;
          }
        } else {
          ultimoElemento = elemento;
          imgUltimoElemento = elemento.parentNode.getElementsByClassName("back-card")[0].getElementsByClassName("imgs")[0].src;
        }
        isRunning = false; 
      }, 500);        
    }
  }
});

function reload() {
  window.location.reload(false);
}