// check input
function isInputValid(input) {
    return input.length >= 3;
}

// get input
function getSearchInput() {
    return document.getElementById('search_input').value.toLowerCase();
}

// return all card elements
function getCardElements() {
    return document.getElementById('card_section').getElementsByClassName('card');
}

// filter cards by input
function filterCards(input, cards) {
    let found = false;
    for (let card of cards) {
        let cardText = card.textContent.toLowerCase();
        if (cardText.includes(input)) {
            card.style.display = '';
            found = true;
        } else {
            card.style.display = 'none';
        }
    }
    return found;
}

// show not found message if no cards match
function handleNoResults(found) {
    let cardSection = document.getElementById('card_section');
    if (!found) {
        cardSection.innerHTML += `<section id="not_found" class="not_found_section">
                                <h3 class="not_found">No Pokémon found. Please try again.
                                Or go ... </h3>
                                </section>`;
    }
}

// render all cards if input is empty
function handleEmptyInput(input) {
    if (input === '') {
        let cardSection = document.getElementById('card_section');
        cardSection.innerHTML = '';
        renderPokeCards(pokemonIndex);
    }
}

// remove not found section
function removeNotFoundSection() {
    let notFound = document.getElementById('not_found');
    if (notFound) {
        notFound.remove();
    }
}

// main search function
function searchPokemon() {
    removeNotFoundSection();
    let input = getSearchInput();
    if (!isInputValid(input)) {
        alert('Bitte gib mindestens 3 Buchstaben ein.');
        return;
    }
    let cards = getCardElements();
    let found = filterCards(input, cards);
    handleNoResults(found);
    handleEmptyInput(input);
    clearSearch();
    removeSlider();
    replaceButtonForSearch();
}

// clear search input
function clearSearch() {
    document.getElementById('search_input').value = '';
}

// replace button while searching
function replaceButtonForSearch() {
    let button = document.getElementById('more_button');
    button.innerHTML = '<h3 class="back_to_main_button" onclick="resetToOriginalList()">... BACK TO MAIN</h3>';
}

// reset card list to original
function resetToOriginalList() {
    let cardSection = document.getElementById('card_section');
    cardSection.innerHTML = '';
    offset = 0;
    limit = 30;
    getPokedex();
    clearSearch();
    showSlider();
}