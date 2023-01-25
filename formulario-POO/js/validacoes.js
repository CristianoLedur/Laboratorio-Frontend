function validarNome(nome) {
  var padrao = /[^a-zà-ú]/gi;
  var valida_nome = nome.match(padrao);
  if ( valida_nome || !nome ){
    return false;
  } else {
    return true; // Nome ok!
  }
}

function validarSobrenome(sobrenome) {
  var padrao = /[^a-zà-ú]/gi;
  var valida_sobrenome = sobrenome.match(padrao);
  if ( valida_sobrenome || !sobrenome ){
    return false;
  } else {
    return true; // Sobrenome ok!
  }
}

function validarEmail(email) {
  if (email.length >= 11) {
    return true; // Email ok!
  }
  return false;
}

function validarSenha(password) {
  if (password.length >= 8) {
    return true; // Senha ok!
  }
  return false;
}