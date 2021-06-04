// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// EVENT
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.addEventListener("click", closeModal);

// FUNCTION
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

const firstNameValid = () =>{
  // Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
  // /^([a-zA-Z\sáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]{2,})$/
}

const lastNameValid = () => {
  // Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
  // /^([a-zA-Z\sáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]{2,})$/
}

const emailValid = () => {
  // L'adresse électronique est valide.
  // ^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$
  // ^([\w]([-_\\.]*[\w]+)*)@([\w]([-_\\.]*[\w]+)*)[\\.]([a-zA-Z]{2,9})$
  // ^[\w\-\.]+@([\w-]+\.)+[\w-]{2,3}$
}