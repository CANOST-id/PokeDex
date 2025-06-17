function cardTemplate(pokemon, backgroundStyle, typesArray) {
    return `
        <div class="card scrollDown appearScrollDown" style="${backgroundStyle}" id="card_${pokemon.id}" onclick="renderDialog(${pokemon.id})">
        <div>   
                <h3>#${pokemon.id}</h3>
                <span>${pokemon.name}</span>
            </div>
                <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
            <div class="type_span_align">
                <span class="type_span" style="background-color: ${colors[typesArray[0]]};">${typesArray[0]} </span>
                <span class="type_span" style="background-color: ${colors[typesArray[1]]};"> ${typesArray[1] ? `<span>${typesArray[1]}</span>` : ''}</span>
            </div>
        </div>
    `;
}

function dialogTemplate(dialogList, backgroundStyle, typesArray) {
    return ` 
                    <!-- CLOSE BUTTON -->
            <svg id="close_button_id" class="rotate_90deg close_button" width="80" height="80" viewBox="0 0 80 80"
                onclick="closeDialog()" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="35" stroke="white" stroke-width="10" fill="none" />
                <!-- CROSS -->
                <line x1="28" y1="28" x2="52" y2="52" stroke="white" stroke-width="10" stroke-linecap="round" />
                <line x1="52" y1="28" x2="28" y2="52" stroke="white" stroke-width="10" stroke-linecap="round" />
            </svg>

            <dialog id="${dialogList.id}"> 
                <div class="" style="${backgroundStyle}" id="card_${dialogList.id}">
                    <div>   
                        <h3>#${dialogList.id}</h3>
                        <span>${dialogList.name}</span>
                    </div>
                </div>
            </dialog>

            <!-- left and right button -->
            <img class="left_arrow" src="./assets/icons/left-arrow.png" alt="">
            <img class="right_arrow" src="./assets/icons/right-arrow.png" alt="">
            `; 
}
        //     <dialog> 
        //             <div class="card scrollDown appearScrollDown" style="${backgroundStyle}" id="card_${i.id}" onclick="renderDialog('dialog_${i.id}')">
        // <div>   
        //         <h3>#${i.id}</h3>
        //         <span>${i.name}</span>
        //     </div>
        //         <img src="${i.sprites.other["official-artwork"].front_default}" alt="${i.name}">

        // </div>
        //     /dialog>
                        
            // <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">