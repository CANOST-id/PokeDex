let limit = 30;

async function getPokedex() {
    const pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`;
    let response = await fetch(pokeApi); 
    let pokemonJson = await response.json();
    renderPokeCards(pokemonJson.results);
}