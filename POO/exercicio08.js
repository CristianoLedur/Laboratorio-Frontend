/*
Considere as seguintes classes:
a) Filme, contendo um diretor e uma cidade principal onde foi filmado;
b) Diretor, contendo o seu nome, sobrenome e número de prêmios;
c) Cidade, contendo seu nome, país, estado e número de habitantes.
Associe as classes para construir a classe Filme.
Crie pelo menos 2 objetos desta classe
*/

//Associação
class Filme {
  constructor(nome, Diretor, Cidade) {
    this.nome = nome;
    this.Diretor = Diretor;
    this.Cidade = Cidade;
  }
}
class Diretor {
  constructor(nome, sobrenome, nPremio) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nPremio = nPremio;
  }
}
class Cidade {
  constructor(nome, pais, estado, nHabitantes) {
    this.nome = nome;
    this.pais = pais;
    this.estado = estado;
    this.nHabitantes = nHabitantes;
  }
}

const diretor1 = new Diretor("Cristiano", "Ledur", "12");
const diretor2 = new Diretor("Ledur", "Cristiano", "11");
const bomPrincipio = new Cidade("Bom Princípio","Brasil","Rio Grande do Sul", 14446);
const feliz = new Cidade("Feliz","Brasil","Rio Grande do Sul", 13640);
const filme1 = new Filme("O poderoso Chefão I", diretor1, bomPrincipio);
const filme2 = new Filme("O poderoso Chefão II", diretor2, feliz);
const listFilmes = [filme1, filme2];

for(let i = 0; i < listFilmes.length; i++) {
  console.log("Nome do filme: " +listFilmes[i].nome + ";");
  console.log(`Diretor: ${listFilmes[i].Diretor.nome} ${listFilmes[i].Diretor.sobrenome}, ${listFilmes[i].Diretor.nPremio} prêmios;`);
  console.log(`Cidade: ${listFilmes[i].Cidade.nome}, ${listFilmes[i].Cidade.pais}, ${listFilmes[i].Cidade.estado}, ${listFilmes[i].Cidade.nHabitantes} habitantes.`);
  console.log();
}