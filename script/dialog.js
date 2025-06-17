// onclick function
function openDialog() {
  document.getElementById('overlay_id').classList.remove('d_none');
}

function closeDialog() {
  document.getElementById('overlay_id').classList.add('d_none');
}

function stopPropagation(event) {
  event.stopPropagation();
}

function renderDialog(pokemon) {
  let dialogCard = document.getElementById('overlay_id');
  openDialog();
  dialogCard.innerHTML = "";
  dialogCard.innerHTML += dialogTemplate(pokemon);
}

// // fetch dialog
// async function getPokeDialog() {
//   const dialogApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
//   try {
//     let diaResponse = await fetch(dialogApi);
//     if (!diaResponse.ok) {
//       throw new Error("Fehler beim Laden der Dialog-Pokemon")
//     }
//     dialogPokemon = await diaResponse.json();
//     renderDialog(dialogPokemon.results);
//   } catch (error) {
//     console.error("Fehler beim abrufen der Dialog-Pokemon", error)
//   }
// }

// // render dialog
// async function renderDialog(dialogPokemon) {
//   openDialog();

//   let overlay = document.getElementById('overlay_id');
//   const fullDialog = await Promise.all(
//     dialogPokemon.map(d => fetch(d.url)
//   .then(res => res.json()))
//   );
//     overlay.innerHTML = dialogTemplate(dialogPoke)
//   .map(pokeData => returnDialogDetails(pokeData))
//   .join('');
// }

// // return pokemon details 
// function returnDialogDetails(dialogPoke) {
//       const typesArray = dialogPoke.types.map(types => types.type.name);
//     let backgroundStyle = '';
//     if (typesArray.length === 1) {
//         backgroundStyle = `
//                         background-color: ${colors[typesArray[0]]};`;
//     } else if (typesArray.length === 2) {
//         backgroundStyle = `
//                         background: linear-gradient(90deg, ${colors[typesArray[0]]}, ${colors[typesArray[1]]});`;
//     }
//     console.log(dialogPoke);
//     return dialogTemplate(dialogPoke, backgroundStyle, typesArray);
// }









// async function renderDialog(i) {
//   const typesArray = i.types.map(types => types.type.name);
//   let backgroundStyle = '';
//   if (typesArray.length === 1) {
//     backgroundStyle = `
//                         background-color: ${colors[typesArray[0]]};`;
//   } else if (typesArray.length === 2) {
//     backgroundStyle = `
//                         background: linear-gradient(90deg, ${colors[typesArray[0]]}, ${colors[typesArray[1]]});`;
//   }
//   console.log(i);
//   return dialogTemplate(i, backgroundStyle, typesArray);
// }


// openDialog();
// if (typesArray.length === 1) {
//   backgroundStyle = `background-color: ${colors[typesArray[0]]};`;
// } else {
//   backgroundStyle = `background: linear-gradient(90deg,
//     ${colors[typesArray[0]]},
//     ${colors[typesArray[1]]});`;
// }
