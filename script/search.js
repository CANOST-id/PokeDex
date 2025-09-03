function isInputValid(input) {
    return input.length >= 3;
}

function getSearchInput() {
    return document.getElementById('search_input').value.toLowerCase();
}

function getCardElements() {
    return document.getElementById('card_section').getElementsByClassName('card');
}

function filterCards(input, cards) {
    let found = false;
    for (let card of cards) {
        const cardText = card.textContent.toLowerCase();
        if (cardText.includes(input)) {
            card.style.display = '';
            found = true;
        } else {
            card.style.display = 'none';
        }
    }
    return found;
}

function handleNoResults(found) {
    const cardSection = document.getElementById('card_section');
    if (!found) {
        cardSection.innerHTML = `<h3 class="not_found">No Pokémon found. Please try again.
                                Or go ... <button class="go_back_button" onclick="resetToOriginalList()">...BACK</button></h3>`;
    }
}

function handleEmptyInput(input) {
    if (input === '') {
        const cardSection = document.getElementById('card_section');
        cardSection.innerHTML = '';
        renderPokeCards(pokemonIndex);
    }
}

function searchPokemon() {
    const input = getSearchInput();
    if (!isInputValid(input)) {
        alert('Bitte gib mindestens 3 Buchstaben ein.');
        return;
    }
    const cards = getCardElements();
    const found = filterCards(input, cards);
    handleNoResults(found);
    handleEmptyInput(input);
    clearSearch();
    disableButton();
}

function clearSearch() {
    document.getElementById('search_input').value = '';
}

function resetToOriginalList() {
    const cardSection = document.getElementById('card_section');
    cardSection.innerHTML = '';
    getPokedex();
    clearSearch();
    enableButton();
}