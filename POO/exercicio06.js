/*
Crie uma classe chamada Conta que representa uma conta corrente contendo um saldo.
a) Adicione um método para imprimir o saldo da conta.
b) Adicione um método sacar na classe, o qual recebe como parâmetro um valor a ser retirado.
Se o valor for superior ao saldo, o método deve retornar false.
Se o valor for igual ou menor que o saldo, o saque deve ser efetuado e o método retorna true.
c) Adicione um método para fazer uma transferência de uma conta para outra.
Este método tem dois parâmetros: o objeto representando a conta destino e o valor a ser
transferido. A transferência deve ocorrer somente se a conta origem tiver saldo suficiente.
O método de transferência retorna true se a transferência for possível, ou false caso contrário.
d) Teste os métodos usando dois objetos Conta usando valores informados pelo usuário
*/
class Conta {
  constructor(saldo) {
    this.saldo = saldo;
  }
  imprimir() {
    return this.saldo;
  }
  sacar(valor) {
    if (valor > this.saldo) {
      return false;
    } else {
      this.saldo = this.saldo - valor;
      return true
    }
  }
  transferencia(Conta, valor) {
    if (valor > this.saldo) {
      return false;
    } else {
      Conta.saldo += valor;
      return true
    }
  }
}
let conta1 = new Conta(1000);
let conta2 = new Conta(2000);
console.log("saldo conta1");
console.log(conta1.imprimir());
console.log("saldo conta2");
console.log(conta2.imprimir());
console.log("sacar conta1 250 e imprimir valor");
console.log(conta1.sacar(250));
console.log(conta1.imprimir());
console.log("sacar conta2 250 e imprimir valor");
console.log(conta2.sacar(250));
console.log(conta2.imprimir());
console.log("Transferir da conta 1 para a conta dois e imprimir as duas contas");
console.log("transferindo 750");
console.log(conta1.transferencia(conta2, 750));
console.log(conta2.imprimir());