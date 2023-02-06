// Primeiro elemento do array com numeros.shift()
console.log("Removendo o primeiro elemento do array com numeros.shift()");
var numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
numeros.shift();
console.log(numeros);
console.log();

// Último elemento  do array com numeros.pop()
console.log("Removendo o último elemento do array com numeros.pop()");
numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
numeros.pop();
console.log(numeros);
console.log();

// Um elemento de acordo com sua posição com numeros.indexOf(3) e numeros.splice(index, 1);
console.log("Removendo um elemento de acordo com sua posição com numeros.indexOf(3)");
numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
var index = numeros.indexOf(3);
console.log(index);
if (index > -1) {
  numeros.splice(index, 1);
}
console.log("Uma forma de simplificar o ódigoo seria utilizar a seguinte estrutura:");
console.log("numeros.splice(numeros.indexOf(3), 1);")
console.log();

// Remover várias ocorrências de um mesmo elemento
console.log("Removendo várias ocorrências de um mesmo elemento utilizandoo indexOf() e splice()");
var estados = ["RJ","SP","SC","SP","SP","RS","PR"];
console.log(estados);
var buscar = "SP";
var indice = estados.indexOf(buscar);
while(indice >= 0) {
  estados.splice(indice,1);
  indice = estados.indexOf(buscar);
}
console.log(estados);
console.log();

// Segunda maneira de remover dados duplicados de um array utilizando um array auxiliar
console.log("Segunda maneira de remover dados duplicados de um array utilizando um array auxiliar");
estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"];
var estados_novo = [];
estados.forEach((item) => {
  if (!estados_novo.includes(item)) {
    estados_novo.push(item);
  }
});
estados = estados_novo;
console.log(estados);

// Outra forma de eliminar repetições é utilizar o objeto Set
console.log("Outra forma de eliminar repetições é utilizar o objeto Set");
estados = ["RJ", "MG", "SP", "SC", "SP", "SP", "PR", "PE", "PA"];
estados_novo = new Set(estados); // Set recebe como parâmetro o objeto iterável, que é o nosso array, e cria um objeto sem repetições
estados = Array.from(estados_novo);  //  Precisamo converter este objeto em array para receber o novo array sem repetições.
console.log(estados);
console.log();

// Remover elementos de acordo com uma condição
console.log("Removendo elementos de acordo com uma condição (maiores que 5) utilizando filter()");
numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
numeros = numeros.filter(item => item > 5);
console.log(numeros);