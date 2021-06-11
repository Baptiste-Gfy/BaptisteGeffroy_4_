// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const firstNameInput = document.querySelector("#first");
const nodeParentOfFirstName = firstNameInput.parentNode;

// EVENT
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.addEventListener("click", closeModal);

// FUNCTION
function editNav() {
  var x = document.getElementById("myTopnav");
  x.className === "topnav"
    ? (x.className += " responsive")
    : (x.className = "topnav");
}
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

const ValidadorFirstName = () => {
  // min 2 character
  // required
  console.log(firstNameInput.value);
  // =>
  if (firstNameInput.value.length === 0) {
    nodeParentOfFirstName.setAttribute("data-error", "Ce champs est requis");
    nodeParentOfFirstName.setAttribute("data-error-visible", "true");
  } else if (firstNameInput.value.length < 2) {
    nodeParentOfFirstName.setAttribute(
      "data-error",
      "Ce choix doit contenir minimum 2 character"
    );
    nodeParentOfFirstName.setAttribute("data-error-visible", "true");
  } else {
    nodeParentOfFirstName.setAttribute("data-error-visible", "false");
  }
};

// const ValidadorLastName = () => {
//   // min 2 character
//   // required
// };

// const ValidadorMail = () => {
//   // L'adresse électronique est valide.
//   // REGEX =>
//   // ^([\w]([-_\\.]*[\w]+)*)@([\w]([-_\\.]*[\w]+)*)[\\.]([a-zA-Z]{2,9})$
//   // required
// };

// const ValidadorBirthday = () => {
//   // required
// };

// const ValidadorNbTournament = () => {
//   // required
// };

// const ValidadorCity = () => {
//   // required
//   // maybe more city
// };

// TEST
firstNameInput.addEventListener("blur", ValidadorFirstName);
