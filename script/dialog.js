// toggle dialog
function toggleDialog() {
  document.getElementById('overlay_id').classList.toggle('d_none');
}

// stop propagation
function stopPropagation(event) {
  event.stopPropagation();
}

function renderDialog(pokemon) {
  let dialogCard = document.getElementById('overlay_id');
  toggleDialog();
  dialogCard.innerHTML = "";
  dialogCard.innerHTML += dialogTemplate(pokemon);
}