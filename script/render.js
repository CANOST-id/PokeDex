async function renderPokeCards(pokemonList) {
    let cardSection = document.getElementById('card_section');
    cardSection.innerHTML = "";

    let pokemonDetails = await Promise.all(
        pokemonList.map(async (pokemon) => {
            let pokeResponseRef = await fetch(pokemon.url);
            return await pokeResponseRef.json();
        })
    );
    pokemonDetails.forEach(pokemonDetail => {
        cardSection.innerHTML += cardTemplate(pokemonDetail);       // Karten designen, sodass Linear-gradient zu jeder art passt - JSON erweitern - siehe script
    });
}


function changeOffset() {                                           // Seite so gestalten, dass bereits geladene stehen bleiben und neu geladene nur hinzugefügt werden 
    limit += 30;
    getPokedex();
}