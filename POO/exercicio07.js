/*
Considere as seguintes classes:
a) Carro, contendo 4 rodas e 1 motor;
b) Roda, contendo o seu tamanho (ex: 14, 15, 16 … 20);
c) Motor, contendo o número de cilindros e a potência (ex: 8 ciclindros e 200 cv).
Associe as classes para construir a classe Carro
Crie pelo menos 2 objetos desta classe
*/

//Associação
class Carro {
  constructor(rodaDianteriaDireita,rodaDianteriaEsquerda, rodaTraseiraDireita,rodaTraseiraEsquerda, motor) {
    this.rodaDianteriaDireita = rodaDianteriaDireita;
    this.rodaDianteriaEsquerda = rodaDianteriaEsquerda;
    this.rodaTraseiraDireita = rodaTraseiraDireita;
    this.rodaTraseiraEsquerda = rodaTraseiraEsquerda;
    this.motor = motor;
  }
}
class Roda {
  constructor(tamanho) {
    this.tamanho =  tamanho;
  }
}
class Motor {
  constructor(nCilindros, potencia) {
    this.nCilindros = nCilindros;
    this.potencia = potencia;
  }
}
let motorFord = new Motor(4, "145cv");
let motorOpala = new Motor(6, "171cv");
let rodaDianteriaDireita = new Roda("aro 20");
let rodaDianteriaEsquerda = new Roda("aro 20");
let rodaTraseiraDireita = new Roda("aro 20");
let rodaTraseiraEsquerda = new Roda("aro 20");
let opala = new Carro(rodaDianteriaDireita,rodaDianteriaEsquerda,rodaTraseiraDireita,rodaTraseiraEsquerda,motorOpala);
let fordFocus = new Carro(rodaDianteriaDireita,rodaDianteriaEsquerda,rodaTraseiraDireita,rodaTraseiraEsquerda,motorFord);
let list = [opala, fordFocus];
for(let i = 0; i < list.length; i++) {
  console.log(list[i].motor.nCilindros);
  console.log(list[i].motor.potencia);
  console.log(list[i].rodaDianteriaDireita.tamanho);
  console.log(list[i].rodaDianteriaEsquerda.tamanho);
  console.log(list[i].rodaTraseiraDireita.tamanho);
  console.log(list[i].rodaTraseiraEsquerda.tamanho);
  console.log();
}