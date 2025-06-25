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
  dialogCard.innerHTML = returnTypes(pokemon);
}

// return types for dialog 
function returnTypes(pokemon) {
  let typesArray = pokemon.types.map(types => types.type.name);
  let backgroundStyle = '';
  if (typesArray.length === 1) {
    backgroundStyle = `
                        background-color: ${colors[typesArray[0]]};`;
  } else if (typesArray.length === 2) {
    backgroundStyle = `
                        background: linear-gradient(90deg, ${colors[typesArray[0]]}, ${colors[typesArray[1]]});`;
  }
  return dialogTemplate(pokemon, backgroundStyle, typesArray);
}