function cardTemplate(pokemonDetail) {
    return `
            <div class="card">
                <img src="${pokemonDetail.sprites.front_default}" alt="${pokemonDetail.name}">
                <h3>${pokemonDetail.name}</h3>
            </div>
        `;
}