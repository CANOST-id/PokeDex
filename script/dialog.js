// toggle dialog
function toggleDialog() {
  document.getElementById('overlay_id').classList.toggle('d_none');
}

function closeDialog(pokemonId) {
  document.getElementById(pokemonId).close();
  toggleDialog();
}

// stop propagation
function stopPropagation(event) {
  event.stopPropagation();
}

// handle dialog
async function openDialog(pokemonId) {
  const pokemon = pokemonIndex.find(p => p.id === pokemonId);       // get complete objekt data 
  const evolutionNames = await fetchEvolutionChain(pokemon.name);
  const evolutionImages = getEvolutionImages(evolutionNames, pokemonIndex);
  renderDialog(pokemon, evolutionImages);
}

// render dialog
function renderDialog(pokemon, evolutionImages) {
  let dialogCard = document.getElementById('overlay_id');
  toggleDialog();
  dialogCard.innerHTML = returnTypes(pokemon, evolutionImages);
  document.getElementById('stats_button').classList.add('scale_1-2');
  document.getElementById('info_evolution').classList.add('d_none');
  document.getElementById('info_moves').classList.add('d_none');
}

// get and return pokemon types
function returnTypes(pokemon, evolutionImages) {
  let typesArray = pokemon.types.map(types => types.type.name);
  let backgroundStyle = '';
  if (typesArray.length === 1) {
    backgroundStyle = `
                        background-color: ${colors[typesArray[0]]};`;
  } else if (typesArray.length === 2) {
    backgroundStyle = `
                        background: linear-gradient(90deg, ${colors[typesArray[0]]}, ${colors[typesArray[1]]});`;
  }
  return dialogTemplate(pokemon, backgroundStyle, typesArray, evolutionImages);
}

// get evoltuion chain
async function fetchEvolutionChain(pokemon) {
  let evoNames = [];
  const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);  // get pokemon basics
  let pokeData = await pokeRes.json();
  const speciesRes = await fetch(pokeData.species.url);                         // get species data
  let speciesData = await speciesRes.json();
  const evoRes = await fetch(speciesData.evolution_chain.url);                  // get evolution chain
  let evoData = await evoRes.json();
  function traverse(chain) {                                                    // extract evolution
    evoNames.push(chain.species.name);
    chain.evolves_to.forEach(traverse);
  }
  traverse(evoData.chain);
  return evoNames;
}

// get evolution images
function getEvolutionImages(evoNames, pokemon) {
  return evoNames.map(name => {
    let findId = pokemon.find(p => p.name === name);
    let id = findId ? findId.id : null;
    let evolutionURL = id 
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      : '';
    return {name, id, evolutionURL};
  });
}

// show and hide content for stats - evolution - moves
function renderStats() {
  document.getElementById('stats_button').classList.add('scale_1-2');
  document.getElementById('moves_button').classList.remove('scale_1-2');
  document.getElementById('evo_button').classList.remove('scale_1-2');

  document.getElementById('info_stats').classList.remove('d_none');
  document.getElementById('info_evolution').classList.add('d_none');
  document.getElementById('info_moves').classList.add('d_none');
}

function renderEvolution() {
  document.getElementById('evo_button').classList.add('scale_1-2');
  document.getElementById('moves_button').classList.remove('scale_1-2');
  document.getElementById('stats_button').classList.remove('scale_1-2');

  document.getElementById('info_evolution').classList.remove('d_none');
  document.getElementById('info_moves').classList.add('d_none');
  document.getElementById('info_stats').classList.add('d_none');
}

function renderMoves() {
  document.getElementById('moves_button').classList.add('scale_1-2');
  document.getElementById('evo_button').classList.remove('scale_1-2');
  document.getElementById('stats_button').classList.remove('scale_1-2');

  document.getElementById('info_moves').classList.remove('d_none');
  document.getElementById('info_evolution').classList.add('d_none');
  document.getElementById('info_stats').classList.add('d_none');
}

// next and previous dialog
function nextDialog(currentId) {
  let currentIndex = pokemonIndex.findIndex(p => p.id === currentId);
  let nextIndex = (currentIndex + 1) % pokemonIndex.length;
  let nextId = pokemonIndex[nextIndex].id;
  closeDialog(currentId);
  openDialog(nextId);
}

function previousDialog(currentId) {
  let currentIndex = pokemonIndex.findIndex(p => p.id === currentId);
  let previousIndex = (currentIndex - 1 + pokemonIndex.length) % pokemonIndex.length;
  let previousId = pokemonIndex[previousIndex].id;
  closeDialog(currentId);
  openDialog(previousId);
}

