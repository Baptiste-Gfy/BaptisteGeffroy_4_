// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
// firstName
const firstNameInput = document.querySelector("#first");
const npFirstName = firstNameInput.parentNode;
// lastName
const lastNameInput = document.querySelector("#last");
const npLastName = lastNameInput.parentNode;
// email
const mailInput = document.querySelector("#email");
const npMail = mailInput.parentNode;
// birthday
const birthdayInput = document.querySelector("#birthdate");
const npBirthday = birthdayInput.parentNode;
// tournament
const tournamentInput = document.querySelector("#quantity");
const npTournament = tournamentInput.parentNode;
//

// FUNCTION
function editNav() {
  var x = document.getElementById("myTopnav");
  x.className === "topnav"
    ? (x.className += " responsive")
    : (x.className = "topnav");
}

function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

const ValidadorFirstName = () => {
  // required  // min 2 character
  if (firstNameInput.value.trim().length === 0) {
    npFirstName.setAttribute("data-error", "Ce champs est requis");
    npFirstName.setAttribute("data-error-visible", "true");
  } else if (firstNameInput.value.trim().length < 2) {
    npFirstName.setAttribute(
      "data-error",
      "Ce choix doit contenir minimum 2 character"
    );
    npFirstName.setAttribute("data-error-visible", "true");
  } else {
    npFirstName.setAttribute("data-error-visible", "false");
  }
  return firstNameInput.value;
};

const ValidadorLastName = () => {
  // required // min 2 character
  if (lastNameInput.value.trim().length === 0) {
    npLastName.setAttribute("data-error", "Ce champs est requis");
    npLastName.setAttribute("data-error-visible", "true");
  } else if (lastNameInput.value.trim().length < 2) {
    npLastName.setAttribute(
      "data-error",
      "Ce choix doit contenir minimum 2 character"
    );
    npLastName.setAttribute("data-error-visible", "true");
  } else {
    npLastName.setAttribute("data-error-visible", "false");
  }
};

const ValidadorMail = () => {
  // required  // Mail format : valide@format.mail
  const mailRegex =
    /^([\w]([-_\\.]*[\w]+)*)@([\w]([-_\\.]*[\w]+)*)[\\.]([a-zA-Z]{2,9})$/;

  if (mailRegex.test(mailInput.value) === false) {
    npMail.setAttribute("data-error", "mail not found : good@format.mail");
    npMail.setAttribute("data-error-visible", "true");
  } else {
    npMail.setAttribute("data-error-visible", "false");
  }
};

const ValidadorBirthday = () => {
  // required // date format : dd/mm/yyyy
  console.log(birthdayInput.value);
};

const ValidadorTournament = () => {
  // required
  const test = /^([0-9]{1,2})$/;
  const test2 = /^([\w]{1,})$/;
  // console.log(`
  //   regex: ${test.test(tournamentInput.value)}, longueur : ${
  //   tournamentInput.value.trim().length
  // }
  //   `);

  if (
    test.test(tournamentInput.value) === false &&
    tournamentInput.value.trim().length <= 2
  ) {
    npTournament.setAttribute("data-error", "how many tounmament have you do");
    npTournament.setAttribute("data-error-visible", "true");
  } else if (
    test.test(tournamentInput.value) === false &&
    tournamentInput.value.trim().length > 2
  ) {
    npTournament.setAttribute("data-error", "pas bien de mentir");
    npTournament.setAttribute("data-error-visible", "true");
  } else {
    npTournament.setAttribute("data-error-visible", "false");
  }
};

// const ValidadorCity = () => {
//   // required
//   // maybe more city
// };

// EVENT
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.addEventListener("click", closeModal);
// Validator firstname
firstNameInput.addEventListener("blur", ValidadorFirstName);
// Validator lastname
lastNameInput.addEventListener("blur", ValidadorLastName);
// Validator email
mailInput.addEventListener("blur", ValidadorMail);
// Validator birthday
birthdayInput.addEventListener("blur", ValidadorBirthday);
// Validator tournament
tournamentInput.addEventListener("blur", ValidadorTournament);
// Validator city
