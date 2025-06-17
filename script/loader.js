// handle opening loader
function closeLoader() {
    document.getElementById('loader_id').classList.add('loader_blendout');
    setTimeout(keepLoaderClosed, 500);
}

function keepLoaderClosed() {
    document.getElementById('loader_id').classList.add('d_none');
}

// handle load more button


// load 30 more pokemon
async function changeOffset() {
    let button = document.getElementById('more_button');
    button.disabled = true;
    button.innerText = "...Loading!"
    limit = + 30;
    offset = offset + 30;
    await getPokedex();
    setTimeout(morePokemonText, 1000)
}

function morePokemonText() {
    let button = document.getElementById('more_button');
    button.innerText = "More Pokemon..."
    button.disabled = false;
}