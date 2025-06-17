// basics to add 30 more pokemon
let limit = 30;
let offset = 0;

// dialog array
let dialogList = [];

// colors for each type/background 
let colors = {
    grass: "green",
    poison: "blueviolet",
    fire: "crimson",
    ice: "rgb(204, 250, 250)",
    psychic: "violet",
    water: "rgb(90, 144, 226)",
    normal: "rgb(120, 168, 168)",
    fighting: "brown",
    ground: "burlywood",
    rock: "slategray",
    ghost: "mediumpurple",
    bug: "rgb(69, 184, 107)",
    steel: "steelblue",
    electric: "yellow",
    dragon: "darkgoldenrod",
    dark: "rgb(68, 27, 70)",
    fairy: "fuchsia",
    stellar: "gray",
    flying: "white",
    unknown: "orange"
}

// fetch pokedex
async function getPokedex() {
    const pokeApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    try {
        let response = await fetch(pokeApi);
        if (!response.ok) {
            throw new Error("Fehler beim Abrufen der Pokemon");
        }
        pokemonList = await response.json();
        renderPokeCards(pokemonList.results);
    } catch (error) {
        console.error("Fehler beim Abrufen der Pokemon", error)
    }
}

// render pokemon
async function renderPokeCards(pokemonList) {
    let cardSection = document.getElementById('card_section');
    const fullData = await Promise.all(
        pokemonList.map(p => fetch(p.url)
            .then(r => r.json()))
    );
    fullData.forEach(pokemon => {
        dialogList.push(pokemon);
        cardSection.innerHTML += renderCardTypes(pokemon);
    });
}

console.log(dialogList);


// return pokemon types
function renderCardTypes(pokemon) {
    const typesArray = pokemon.types.map(types => types.type.name);
    let backgroundStyle = '';
    if (typesArray.length === 1) {
        backgroundStyle = `
                        background-color: ${colors[typesArray[0]]};`;
    } else if (typesArray.length === 2) {
        backgroundStyle = `
                        background: linear-gradient(90deg, ${colors[typesArray[0]]}, ${colors[typesArray[1]]});`;
    }
    console.log(pokemon);
    return cardTemplate(pokemon, backgroundStyle, typesArray);
}