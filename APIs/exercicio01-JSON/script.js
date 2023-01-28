/*
Dado o seguinte JSON:

{
  "name": "John Doe",
  "age": 30,
  "address": {
    "city": "New York",
    "state": "NY"
  },
  "hobbies": ["reading", "traveling"]
}

- Use o método JSON.parse() para transformar o JSON em um objeto JavaScript e imprima o nome, cidade e primeiro hobby do objeto.
- Use o método JSON.stringify() para transformar o objeto JavaScript em JSON e imprimir o resultado.
*/

let objData = require('./pessoa.json'); // require já retorna o arquivo em objeto
let jsonData = JSON.stringify(objData); // tornando os dados novamente em formato JSON
objData = JSON.parse(jsonData); // agora sim, utilizando o método JSON.parse() para me retornar um objeto

console.log("Imprimindo o objeto");
console.log(`Nome: ${objData.name}`);
console.log(`Idade: ${objData.age}`);
console.log(`Enderço: ${objData.address.street}, ${objData.address.city}, ${objData.address.state}, ${objData.address.zip}`);
console.log();
console.log("Imprimindo o arquivo JSON");
console.log(jsonData);