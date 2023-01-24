/*
Construa uma classe para representar uma partida de futebol.
a) A classe Partida deve conter um placar (duas variáveis numéricas), cidade onde ocorre,
nome do árbitro, e dois objetos representando as equipes.
b) A cidade é representada por um objeto da classe Cidade, contendo o nome, estado e
país.
c) Cada equipe será representada por um objeto da classe Equipe, contendo nome da
equipe, cidade de origem (um objeto da classe cidade). Também deve conter o número de
vitórias, derrotas e empates na competição. Adicione um método na classe equipe para
calcular a pontuação da mesma no campeonato.
Crie pelo menos 2 objetos representando partidas de futebol
*/

class Partida {
  constructor(golsTime1, golsTime2, Cidade, arbitro, Equipe1, Equipe2) {
    this.golsTime1 = golsTime1;
    this.golsTime2 = golsTime2;
    this.Cidade = Cidade;
    this.arbitro = arbitro;
    this.Equipe1 = Equipe1;
    this.Equipe2 = Equipe2;
  }
}
class Cidade {
  constructor(nome, pais, estado) {
    this.nome = nome;
    this.pais = pais;
    this.estado = estado;
  }
}
class Equipe {
  constructor(nome, cidade, vitorias, empates, derrotas) {
    this.nome = nome;
    this.cidade = cidade;
    this.vitorias = vitorias;
    this.empates = empates;
    this.derrotas = derrotas;
  }
  pontuacao() {
    return ((this.vitorias * 3) + (this.empates * 1));
  }
}
const caxias = new Cidade("Caxias do Sul", "Brasil", "Rio Grande do Sul");
const porto = new Cidade("Porto Alegre", "Brasil", "Rio Grande do Sul");
const inter = new Equipe("Internacional", porto, 3,1,0);
const juventude = new Equipe("Juventude", caxias, 0,1,3);
const partida1 = new Partida(3, 1, porto, "Daronco", inter, juventude);
const partida2 = new Partida(2, 3, caxias, "Daronco", juventude, inter);

console.log("PARTIDA 1");
console.log(`Time da casa: ${partida1.Equipe1.nome} ${partida1.golsTime1}`);
console.log(`Time visitante: ${partida1.Equipe2.nome} ${partida1.golsTime2}`);
console.log(`Arbitro da partida: ${partida1.arbitro}`);
console.log(`Local da partida: ${partida1.Cidade.nome}`)

console.log("PARTIDA 2");
console.log(`Time da casa: ${partida2.Equipe1.nome} ${partida2.golsTime1}`);
console.log(`Time visitante: ${partida2.Equipe2.nome} ${partida2.golsTime2}`);
console.log(`Arbitro da partida: ${partida2.arbitro}`);
console.log(`Local da partida: ${partida2.Cidade.nome}`)

console.log(`pontuação do ${inter.nome}: ${inter.pontuacao()}`);
console.log(`pontuação do ${juventude.nome}: ${juventude.pontuacao()}`);