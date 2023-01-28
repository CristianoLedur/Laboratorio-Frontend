const objs = [
  {
    nome: "Cristiano",
    sobrenome: "Ledur",
    idade: 24,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null,
    },
    hobbies: ["Programar","Correr","Ler"],
  },
  {
    nome: "João",
    sobrenome: "Ledur",
    idade: 25,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "Programador",
      empresa: "Empresa x",
    },
    hobbies: ["Jogar","Academia"],
  }
]

console.log(typeof objs);

//Converter objeto para json
//Enviando para Api
const jsonData = JSON.stringify(objs);
console.log(jsonData);

//Converter JSON para objeto
//Enviando para o sistema
const objData = JSON.parse(jsonData);
console.log(objData);


// imprimindo dados
objData.map((pessoa) => {
  console.log(pessoa.nome);
})