// toggle dialog
function toggleDialog() {
  document.getElementById('overlay_id').classList.toggle('d_none');
}

// stop propagation
function stopPropagation(event) {
  event.stopPropagation();
}

function renderDialog(dialogList) {
  let dialogCard = document.getElementById('overlay_id');
  toggleDialog();
  dialogCard.innerHTML = "";
  dialogCard.innerHTML += dialogTemplate(dialogList);
}

// function idDialog(dialogList) {
//   const idArray = dialogList;

//   console.log(idArray);
  
//   return dialogTemplate(idArray);
// }