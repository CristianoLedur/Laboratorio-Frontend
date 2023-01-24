/*
Crie uma classe Calculadora que realize as seguintes operações: soma, subtração, multiplicação,
divisão e média. Crie os métodos para suportar essas operações. As operações devem receber
dois números inteiros como parâmetro, exceto a operação de média que deve receber um array de
inteiros como parâmetro.
*/
class Calculadora {
  constructor(valor1, valor2) {
    this.valor1 = valor1;
    this.valor2 = valor2;
  }
  soma() {
    return this.valor1 + this.valor2;
  }
  subtracao() {
    return this.valor1 - this.valor2;
  }
  multiplicacao() {
    return this.valor1 * this.valor2;
  }
  divisao() {
    return this.valor1 / this.valor2;
  }
  media(list) {
    let n = list.length;
    let total = list.reduce((a,b) => a+b);
    return (total / n).toFixed(1);
  }
}
let calculadora = new Calculadora(4, 2);
console.log(calculadora.soma()); // 6
console.log(calculadora.subtracao()); // 2
console.log(calculadora.multiplicacao()); // 8
console.log(calculadora.divisao()); // 2
let list = [2,3,4];
console.log(calculadora.media(list));