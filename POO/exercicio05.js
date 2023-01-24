/*
O valor de A* pode ser calculado como sendo A multiplicado por si mesmo x vezes (se x for inteiro).
Escreva uma classe chamada Potencia que contenha um método chamado elevadoA que calcule
e retorne o resultado de Ax.
Obs: Não use o método Math.pow – Use o comando while.
*/

class Potencia {
  constructor(valor, potencia) {
    this.valor = valor;
    this.potencia = potencia;
  }
  elevadoA() {
    let n = this.potencia;
    let total = this.valor;
    while(n != 1) {
      total = total * this.valor;
      n--;
    }
    return total;
  }
}
let elevado = new Potencia(2,8);
console.log(elevado.elevadoA());