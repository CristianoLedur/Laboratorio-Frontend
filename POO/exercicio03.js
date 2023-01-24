/*
Construa uma classe chamada Celular que possui dois atributos: modelo e marca.
Crie uma segunda classe chamada ComparadorCelular que contém um método que recebe dois
celulares como parâmetro. Este método deve comparar os dois celulares e retornar true caso os
celulares sejam da mesma marca e modelo, ou falso caso contrário.
Usando os objetos, compare os diferentes objetos de celular criados.
*/
class Celular {
  constructor(modelo, marca) {
    this.modelo = modelo;
    this.marca = marca;
  }
}
class ComparadorCelular {
  comparar(obj1, obj2) {
    if (obj1.marca === obj2.marca) {
      if(obj1.modelo === obj2.modelo) {
        return true;
      }
    }
  }
}
let celular1 = new Celular("Iphone 13","Iphone");
let celular2 = new Celular("Iphone 13","Iphone");
let compararCelular = new ComparadorCelular();
console.log(compararCelular.comparar(celular1, celular2));