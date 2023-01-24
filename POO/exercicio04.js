/*
Defina uma classe Aluno com os atributos: nome, curso, data de admissão e número de matrícula.
Inclua um método para imprimir todos os dados do aluno. Use o método que imprime os dados do aluno 
após criar e inserir valores nos atributos do aluno. Crie 3 objetos da classe aluno.
*/

class Aluno {
  constructor(nome, curso, dataDeAdmissao, numeroDeMatricula) {
    this.nome = nome;
    this.curso = curso;
    this.dataDeAdmissao = dataDeAdmissao;
    this.numeroDeMatricula = numeroDeMatricula;
  }
}
let aluno1 = new Aluno("Cristiano Ledur", "ADS", "2022", "12345");
let aluno2 = new Aluno("Cristiano", "ADS", "2023", "23456");
let aluno3 = new Aluno("Ledur", "ADS", "2024", "34567");
var list = [aluno1,aluno2,aluno3];
for(let i = 0; i < list.length; i++) {
  console.log(list[i].nome);
  console.log(list[i].curso);
  console.log(list[i].dataDeAdmissao);
  console.log(list[i].numeroDeMatricula);
  console.log();
}