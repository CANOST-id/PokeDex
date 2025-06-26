function cardTemplate(pokemon, backgroundStyle, typesArray) {
    return `
        <div class="card scrollDown appearScrollDown" style="${backgroundStyle}" id="card_${pokemon.id}" onclick="openDialog(${pokemon.id})">
        <div>   
                <h3>#${pokemon.id}</h3>
                <span>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</span>
            </div>
                <div class="background_circle">
                <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
            <div class="type_span_align">
                <span class="type_span" style="background-color: ${colors[typesArray[0]]};">${typesArray[0]} </span>
                <span class="type_span" style="background-color: ${colors[typesArray[1]]};"> ${typesArray[1] ? `<span>${typesArray[1]}</span>` : ''}</span>
            </div>
        </div>
    `;
}

function dialogTemplate(pokemon, backgroundStyle, typesArray) {
    return ` 
                    <!-- CLOSE BUTTON -->
            <svg id="close_button_id" class="rotate_90deg close_button" width="80" height="80" viewBox="0 0 80 80"
                onclick="toggleDialog()" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="35" stroke="white" stroke-width="10" fill="none" />
                <!-- CROSS -->
                <line x1="28" y1="28" x2="52" y2="52" stroke="white" stroke-width="10" stroke-linecap="round" />
                <line x1="52" y1="28" x2="28" y2="52" stroke="white" stroke-width="10" stroke-linecap="round" />
            </svg>

            <dialog id="${pokemon.id}"> 

                <div class="dialog_content">
                    <section class="dialog_head">
                        <div class="dialog_head_info">
                            <h3>#${pokemon.id} - ${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h3> 
                            <h3>${pokemon.base_experience} HP</h3>
                        </div>
                        <div class="dialog_head_image">
                            <div class="dialog_image_background" style="${backgroundStyle}">
                                <img class="dialog_image" src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
                            </div>
                        </div>

                    </section>
                    <section class="dialog_detail">
                        <div class="dialog_info_span">
                            <span>Height: ${(pokemon.height / 10).toFixed(1)}m</span>
                            <span>Weight: ${(pokemon.weight / 10).toFixed(1)}kg</span>
                        </div>
                        <div class="dialog_type_align">
                            <span class="dialog_type" style="background-color: ${colors[typesArray[0]]};">${typesArray[0]} </span>
                            <span class="dialog_type" style="background-color: ${colors[typesArray[1]]};"> ${typesArray[1] ? `<span>${typesArray[1]}</span>` : ''}</span>
                        </div>
                        <hr>
                        <div class="dialog_info_buttons">
                            <button> STATS </button>
                            <button> EVOLUTION </button>
                            <button> MOVES </button>
                        </div>
                        <hr>
                        <div class="dialog_info_content" id="dialog_info_content_id">
                        
                        </div>
                    </section>
                </div>
            </dialog>
            <!-- left and right button -->
            <img class="left_arrow" src="./assets/icons/left-arrow.png" alt="">
            <img class="right_arrow" src="./assets/icons/right-arrow.png" alt="">
            `;
}

function statsTemplate() {
    return `
    
    `;
}

function evolutionTemplate() {
    
}

function movesTemplate() {
    
}