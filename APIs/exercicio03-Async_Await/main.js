let busca = document.querySelector("#input-box");
let boxBusca = document.querySelector(".buscar-pokemon");
let boxPokemon = document.querySelector(".pokemon-box");
let pokemonNome = document.querySelector("#pokemon-name");
let audio = document.querySelector("#error");

busca.addEventListener("keypress", function(event) {
  if (event.key === 'Enter') {
    boxBusca.style.display = "none";
    boxPokemon.style.display = "flex";
    obterDados(busca.value);
  }
});

function reload() {
  boxBusca.style.display = "flex";
  boxPokemon.style.display = "none";
}

async function obterDados(id) {
  try {
    const resposta = await  fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`);
    const dados = await resposta.json();
    console.log(dados);
    document.querySelector("#pokemon-image").src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    pokemonNome.innerHTML = dados.name;
  } catch (err) {
    document.querySelector("#pokemon-image").src = "./assets/error.gif";
    pokemonNome.innerHTML = "Quem é este pokemon?";
    audio.play();
  }
};


