/* 1 - Crie uma classe chamada Pais que contém os atributos para armazenar o seu nome, capital e
número de habitantes. 
a) Construa um objeto da classe Pais com os atributos;
b) Imprima na tela os atributos do objeto da classe Pais;
*/
class Pais {
  constructor(nome, capital, numeroDeHabitantes) {
    this.nome = nome;
    this.capital = capital;
    this.numeroDeHabitantes = numeroDeHabitantes;
  }
}
let pais1 = new Pais("Brasil","Distrito Federal","214 milhões");
console.log(pais1.nome);
console.log(pais1.capital);
console.log(pais1.numeroDeHabitantes);
