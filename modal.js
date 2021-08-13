// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
// form
const form = document.querySelector("#form")
const contentForm = document.querySelectorAll(".modal-body")
const newBtn = document.createElement('btn')
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
// city
const cityInput = document.getElementsByName("location");
// ???????????????????????????????????????????????????????
// legal
const legalInput = document.querySelector("#checkbox1");
const npLegal = legalInput.parentNode;
// pub
const pubInput = document.querySelector("#checkbox2");
// submit btn
const submitBtn = document.querySelector("#form-submit");

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

//VALIDATION FORM
const specialCharac = ["@","&","$","€",":",";",".","," /* add other special char */ ]
const formValue = {
  firstname: {value: "", valid: false},
  lastname: {value: "", valid: false},
  mail: {value: "", valid: false},
  birthday: {value: "", valid: false},
  tournament: {value: "", valid: false},
  city: {value: "New York", valid: true},
  legal: {value: "checked", valid: true},
  pub: {value : "", valid: true},
}

const canSubmit = () => {
  if (
    formValue.firstname.valid === false ||
    formValue.lastname.valid === false ||
    formValue.mail.valid === false ||
    formValue.birthday.valid === false ||
    formValue.tournament.valid === false ||
    formValue.city.valid === false ||
    formValue.legal.valid === false ||
    formValue.pub.valid === false
  ) {
    submitBtn.disabled = true
  } else {
    submitBtn.disabled = false
  }
}

// => FIRSTNAME
const ValidadorFirstName = () => {
  formValue.firstname.value = firstNameInput.value.trim()
  formValue.firstname.valid = true
// required  
  if (firstNameInput.value.trim().length === 0) {
    npFirstName.setAttribute("data-error", "Ton prenom est requis");
    npFirstName.setAttribute("data-error-visible", "true");
    formValue.firstname.valid = false
  }
// min 2 character
  if (firstNameInput.value.trim().length < 2) {
    npFirstName.setAttribute("data-error", "Minimum 2 character");
    npFirstName.setAttribute("data-error-visible", "true");
    formValue.firstname.valid = false
  } 
// caracter speciaux
  if (specialCharac.some((char)=> firstNameInput.value.includes(char))){
      npFirstName.setAttribute("data-error", "Pas de caractere speciaux");
      npFirstName.setAttribute("data-error-visible", "true");
      formValue.firstname.valid = false
  }
  canSubmit()
};
const resetValidadorFirstName = () => {
  npFirstName.setAttribute("data-error-visible", "false");
}

// => LASTNAME
const ValidadorLastName = () => {
  formValue.lastname.value = lastNameInput.value.trim()
  formValue.lastname.valid = true
  // required 
  if (lastNameInput.value.trim().length === 0) {
    npLastName.setAttribute("data-error", "Ton nom est requis");
    npLastName.setAttribute("data-error-visible", "true");
    formValue.lastname.valid = false
  }
  // min 2 character
  if (lastNameInput.value.trim().length < 2) {
    npLastName.setAttribute(
      "data-error",
      "Minimum 2 character"
    );
    npLastName.setAttribute("data-error-visible", "true");
    formValue.lastname.valid = false
  } 
    // caracter speciaux
  if (specialCharac.some((char)=> lastNameInput.value.includes(char))){
    npLastName.setAttribute("data-error", "Pas de caractere speciaux");
    npLastName.setAttribute("data-error-visible", "true");
    formValue.lastname.valid = false
  }
  canSubmit()
};
const resetValidadorLastName = () => {
  npLastName.setAttribute("data-error-visible", "false");
}

// => EMAIL
const ValidadorMail = () => {
  formValue.mail.value = mailInput.value.trim()
  formValue.mail.valid = true
  const mailReg =
  /^([\w]([-_\\.]*[\w]+)*)@([\w]([-_\\.]*[\w]+)*)[\\.]([a-zA-Z]{2,9})$/;
  // required  
  if (mailInput.value.trim().length === 0){
    npMail.setAttribute("data-error", "mail requis");
    npMail.setAttribute("data-error-visible", "true");
    formValue.mail.valid = false
  }
  // Mail format : valide@format.mail
  if (mailReg.test(mailInput.value.trim()) === false) {
    npMail.setAttribute("data-error", "mail not found : good@format.mail");
    npMail.setAttribute("data-error-visible", "true");
    formValue.mail.valid = false
  }
  canSubmit()
};
const resetValidadorMail = () => {
  npMail.setAttribute("data-error-visible", "false");
}

// => Birthday
const ValidadorBirthday = () => {
  formValue.birthday.value = birthdayInput.value.trim().split("-").reverse().join("-")
  formValue.birthday.valid = true
  const dateReg = /^([0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2})$/
  const today = new Date()
  // required // date format : dd/mm/yyyy
  if (dateReg.test(birthdayInput.value) === false){
    npBirthday.setAttribute("data-error", "date de naissance requise: jj/mm/aaaa");
    npBirthday.setAttribute("data-error-visible", "true");
    formValue.birthday.valid = false
  }
  // + 16 ans
  if (today.getFullYear() - parseInt(birthdayInput.value.split("-")[0]) < 16){
    npBirthday.setAttribute("data-error", "Tu dois avoir au moins 16 ans");
    npBirthday.setAttribute("data-error-visible", "true");
    formValue.birthday.valid = false
  }
  canSubmit()
};
const resetValidadorBirthday = () => {
  npBirthday.setAttribute("data-error-visible", "false");
}

// => Tournament
const ValidadorTournament = () => {
  formValue.tournament.value = tournamentInput.value.trim()
  formValue.tournament.valid = true
  // required
  const test = /^([0-9]{1,2})$/;
  if (
    test.test(tournamentInput.value) === false &&
    tournamentInput.value.trim().length === 0 
  ) {
    npTournament.setAttribute("data-error", "how many tounmament have you do");
    npTournament.setAttribute("data-error-visible", "true");
    formValue.tournament.valid = false
  } else if (
    test.test(tournamentInput.value) === false &&
    tournamentInput.value.trim().length > 2
    ) {
    npTournament.setAttribute("data-error", "pas bien de mentir");
    npTournament.setAttribute("data-error-visible", "true");
    formValue.tournament.valid = false
  } else {
    npTournament.setAttribute("data-error-visible", "false");
  }
  canSubmit()
};
const resetValidadorTournament = () => {
  npTournament.setAttribute("data-error-visible", "false");
}

// => City
const ValidadorCity = () => {
  // required
  cityInput.forEach((city) => {
    if (city.checked === true) {
      formValue.city.value = city.value
      formValue.city.valid = true
    }
  })
  canSubmit()
};

// => Legal
const ValidatorLegal = () => {
  // required
  if (legalInput.checked === false){
    npLegal.setAttribute("data-error", "accepte les condition général");
    npLegal.setAttribute("data-error-visible", "true");
    formValue.legal.value = "unchecked"
    formValue.legal.valid = false
  } else {
    npLegal.setAttribute("data-error-visible", "false");
    formValue.legal.value = "checked"
    formValue.legal.valid = true
  }
  canSubmit()
}

// => Pub
const ValidatorPub = () => {
  if (pubInput.checked === false){
    formValue.pub.value = "unchecked"
  } else {
    formValue.pub.value = "checked"
  }
  canSubmit()
}

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const validatorForm = (event) => {
  event.preventDefault()
  const thanksSubmit = "Thank you for submitting your registration details"
  const btncontent = "Close"
  ValidadorFirstName()
  ValidadorLastName()
  ValidadorMail()
  ValidadorBirthday()
  ValidadorTournament()
  ValidadorCity()
  ValidatorLegal()
  ValidatorPub()
  form.className ="resize-form"
  newBtn.className = "btn-submit after-submit"
  form.innerHTML = thanksSubmit
  newBtn.innerHTML = btncontent
  insertAfter(newBtn, form)
}

// EVENT
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
modalClose.addEventListener("click", closeModal);
// Validator firstname
firstNameInput.addEventListener("blur", ValidadorFirstName);
firstNameInput.addEventListener("focus", resetValidadorFirstName);
// Validator lastname
lastNameInput.addEventListener("blur", ValidadorLastName);
lastNameInput.addEventListener("focus", resetValidadorLastName);
// Validator email
mailInput.addEventListener("blur", ValidadorMail);
mailInput.addEventListener("focus", resetValidadorMail);
// Validator birthday
birthdayInput.addEventListener("blur", ValidadorBirthday);
birthdayInput.addEventListener("focus", resetValidadorBirthday);
// Validator tournament
tournamentInput.addEventListener("blur", ValidadorTournament);
tournamentInput.addEventListener("focus", resetValidadorTournament);
// Validator city
cityInput[0].addEventListener("change", ValidadorCity)
cityInput[1].addEventListener("change", ValidadorCity)
cityInput[2].addEventListener("change", ValidadorCity)
cityInput[3].addEventListener("change", ValidadorCity)
cityInput[4].addEventListener("change", ValidadorCity)
cityInput[5].addEventListener("change", ValidadorCity)
// Validator legal
legalInput.addEventListener("change", ValidatorLegal)
// validator pub
pubInput.addEventListener("change", ValidatorPub)
// form
form.addEventListener("submit", validatorForm)
// new btn submit
newBtn.addEventListener("click", closeModal);