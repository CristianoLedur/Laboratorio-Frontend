document.getElementsByClassName("formulario")[0].addEventListener("submit", function(event){
  event.preventDefault();
  validar();
});

function validar() {
  var nome = document.getElementById("first-name").value;
  var sobrenome = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("password").value;

  let validaNome = validarNome(nome);
  let validaSobrenome = validarSobrenome(sobrenome);
  let validaEmail = validarEmail(email);
  let validaSenha = validarSenha(senha);
  
  let erroSpan =  document.getElementsByClassName('erro');
  let erroInput = document.getElementsByClassName('erro-input');
  let erroIcon = document.getElementsByClassName('icon-erro');
  if (!validaNome) {
    erroSpan[0].style.display = "block";
    erroInput[0].style.color = "hsl(0, 100%, 74%)";
    erroIcon[0].style.display = "block";
  } else {
    erroSpan[0].style.display = "none";
    erroInput[0].style.color = "var(--neutral-color-darkBlue)";
    erroIcon[0].style.display = "none";
  }

  if (!validaSobrenome) {
    erroInput[1].style.color = "hsl(0, 100%, 74%)";
    erroSpan[1].style.display = "block";
    erroIcon[1].style.display = "block";
  } else {
    erroSpan[1].style.display = "none";
    erroInput[1].style.color = "var(--neutral-color-darkBlue)";
    erroIcon[1].style.display = "none";
  }

  if (!validaEmail) {
    erroInput[2].style.color = "hsl(0, 100%, 74%)";
    erroSpan[2].style.display = "block";
    erroIcon[2].style.display = "block";
  } else {
    erroSpan[2].style.display = "none";
    erroInput[2].style.color = "var(--neutral-color-darkBlue)";
    erroIcon[2].style.display = "none";
  }

  if (!validaSenha) {
    erroInput[3].style.color = "hsl(0, 100%, 74%)";
    erroSpan[3].style.display = "block";
    erroIcon[3].style.display = "block";
  } else {
    erroSpan[3].style.display = "none";
    erroInput[3].style.color = "var(--neutral-color-darkBlue)";
    erroIcon[3].style.display = "none";
  }

  if( validaNome && validaSobrenome && validaEmail && validaSenha ) {
    let usuario = new Usuario(nome, sobrenome, email, senha);
    usuario.imprimir();
  }

}
