class Usuario {
  constructor(nome, sobrenome, email, senha) {
    this.nome = nome;
    this.sobrenome = nome;
    this.email = email;
    this.senha = senha;
  }
  imprimir() {
    console.log("Usuario cadastrado!");
    console.log(`Nome: ${this.nome} ${this.sobrenome}`);
    console.log(`Email: ${this.email}`);
    console.log(`Senha: ${this.senha}`);
  }
}