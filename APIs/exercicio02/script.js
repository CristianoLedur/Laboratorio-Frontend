/*
API's
-> Utilize o fetch() para fazer uma chamada à API de sua escolha e imprima os dados retornados na tela.
*/

var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup', () => {
  pegaPokemons(quantidade.value);
});

pegaPokemons(9);
function pegaPokemons(quantidade) {
  fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
  .then(response => response.json())
  .then(allpokemon => {
    pokemon = [];

    allpokemon.results.map((val) => {

      fetch(val.url)
      .then(response => response.json())
      .then(pokemonSingle =>{
        pokemon.push({nome: val.name, imagem: pokemonSingle.sprites.front_default})
     
        if(pokemon.length == quantidade) {
          //Fim das requisições

          let poke_boxes = document.querySelector('.pokemon-boxes');
          poke_boxes.innerHTML = "";

          pokemon.map((val)=>{
            poke_boxes.innerHTML += `
            <div class="pokemon-box">
            <img src="` +val.imagem+`">
            <p>`+ val.nome+ `</p>`
          })
        }
      })
    })
    pokemon.map((val)=> {
      console.log(val.nome);
    })
  })
}
