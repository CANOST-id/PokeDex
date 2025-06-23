// toggle dialog
function toggleDialog() {
  document.getElementById('overlay_id').classList.toggle('d_none');
}

// stop propagation
function stopPropagation(event) {
  event.stopPropagation();
}

// handle dialog
function openDialog(pokemonId) {
  const pokemon = pokemonIndex.find(p => p.id === pokemonId);       // get complete objekt data 
  renderDialog(pokemon);
}

function renderDialog(pokemon) {
  let dialogCard = document.getElementById('overlay_id');
  toggleDialog();
  dialogCard.innerHTML = dialogTemplate(pokemon);
}