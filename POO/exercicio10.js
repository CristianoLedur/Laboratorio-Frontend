/*
Crie uma classe chamada Curso e detalhe a mesma através de outras classes.
Por exemplo, crie classes como Disciplina, Professor, Aluno, etc..
*/
class Curso {
  constructor(Professor, alunos, disciplinas) {
    this.Professor = Professor;
    this.alunos = alunos;
    this.disciplinas = disciplinas;
  }
}
class Disciplina {
  constructor(nome, cargaHoraria, diaDaSemana) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
    this.diaDaSemana = diaDaSemana;
  }
}
class Aluno {
  constructor(nome, sobrenome, nMatricula) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nMatricula = nMatricula;
  }
}
class Professor {
  constructor(nome) {
    this.nome = nome;
  }
}

const prof1 = new Professor("Ana Paula");
const aluno1 = new Aluno("Cristiano", "Ledur", 1211);
const aluno2 = new Aluno("Cris", "Ledur", 11);
let listAlunos = [aluno1, aluno2];
const disciplina1 = new Disciplina("Programação 3", 200, "Terça-feira");
const disciplina2 = new Disciplina("Banco de dados", 200, "Sexta-feira");
let listDisciplinas = [disciplina1, disciplina2];
const curso1 = new Curso(prof1, listAlunos, listDisciplinas);

console.log(`Professor: ${curso1.Professor.nome}`);
curso1.disciplinas.forEach(element => {
  console.log(`Disciplina do curso: ${element.nome}; Carga horaria: ${element.cargaHoraria}; Dia: ${element.diaDaSemana}.`);
});
curso1.alunos.forEach(element => {
  console.log(`Aluno do curso: ${element.nome} ${element.sobrenome}, ${element.nMatricula}`);
})
  