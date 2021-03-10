// Menu de navigation

function editNav() {
  var x = document.getElementById("myTopnav");
  const icon = document.getElementsByClassName("icon");

  if (x.className === "topnav") {
    x.className += " responsive";
    icon[0].style.color = "white";
  } else {
    x.className = "topnav";
    icon[0].style.color = "#ff0000";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal form
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));


const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const location1 = document.getElementById('location1');
const location2 = document.getElementById('location2');
const location3 = document.getElementById('location3');
const location4 = document.getElementById('location4');
const location5 = document.getElementById('location5');
const location6 = document.getElementById('location6');
const terms = document.getElementById("checkbox1");
const modalCloseConfirmation = document.getElementById("modal-confirmation");
const btnConfirmation = document.querySelectorAll(".button-modal-confirmation");


// Messages d"erreur

const errorFirstName = document.getElementById("error-first");
const errorLastName = document.getElementById("error-last");
const errorEmail = document.getElementById("error-email");
const errorBirth = document.getElementById("error-birthdate");
const errorQuantity = document.getElementById("error-quantity");
const errorLocation = document.getElementById("error-location");
const errorTerms = document.getElementById("error-terms");


// Prevent default : envoi du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();
})

// Reset des champs du formulaire

function reset() {
  form.reset();
}
reset();

// Vérification des champs et affichage des messages d"erreur

function validate() {
  let firstCheck;
  let lastCheck;
  let emailCheck;
  let birthCheck;
  let quantityCheck;
  let termsCheck;
  let locationChecked;

  if (firstName.value.match(/(.*[a-z]){2}/i) || !firstName.value == ' ' || !firstName.value == null || firstName.value.length >= 2) {
    errorFirstName.style.display = "none";
    firstName.style.border = "none";
    firstCheck = true;
  } else {
    errorFirstName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    errorFirstName.style.color = "red";
    errorFirstName.style.fontSize = "0.7rem";
    errorFirstName.style.marginTop = "5px";
    firstName.style.border = "solid red 2px";
    errorFirstName.style.display = "inline-block";
  };

  if (lastName.value.match(/(.*[a-z]){2}/i) || !lastName.value == " " || !lastName.value == null || lastName.value.length >= 2) {
    errorLastName.style.display = "none";
    lastName.style.border = "none";
    lastCheck = true;
  } else {
    errorLastName.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
    errorLastName.style.color = "red";
    errorLastName.style.fontSize = "0.7rem";
    errorLastName.style.marginTop = "5px";
    lastName.style.border = "solid red 2px";
    errorLastName.style.display = "inline-block";
  };

  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
    errorEmail.style.display = "none";
    email.style.border = "none";
    emailCheck = true;
  } else {
    errorEmail.innerText = "Veuillez renseigner une addresse mail valide";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = "0.7rem";
    errorEmail.style.marginTop = "5px";
    email.style.border = "solid red 2px";
    errorEmail.style.display = "inline-block";
  };

  if (birthdate.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
    errorBirth.style.display = "none";
    birthdate.style.border = "none";
    birthCheck = true;
  } else {
    errorBirth.innerText = "Veuillez entrer votre date de naissance";
    errorBirth.style.color = "red";
    errorBirth.style.fontSize = "0.7rem";
    errorBirth.style.marginTop = "5px";
    errorBirth.style.marginBottom = "5px";
    birthdate.style.border = "solid red 2px";
    errorBirth.style.display = "inline-block";
  }

  if (quantity.value.match(/^[1-9][0-9]?$/)) {
    errorQuantity.style.display = "none";
    quantity.style.border = "none";
    quantityCheck = true;
  } else {
    errorQuantity.innerText = "Veuillez indiquer un nombre valide";
    errorQuantity.style.color = "red";
    errorQuantity.style.fontSize = "0.7rem";
    errorQuantity.style.marginTop = "5px";
    quantity.style.border = "solid red 2px";
    errorQuantity.style.display = "inline-block";
  };

  if (location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked) {
    errorLocation.style.display = "none";
    locationChecked = true;
  } else {
    errorLocation.innerText = "Veuillez choisir une ville";
    errorLocation.style.color = "red";
    errorLocation.style.fontSize = "0.7rem";
    errorLocation.style.marginTop = "10px";
    errorLocation.style.display = "inline-block";
  };

  if (terms.checked) {
    errorTerms.style.display = "none";
    termsCheck = true;
  } else {
    errorTerms.innerText = "Veuillez vérifier que vous acceptez les termes et conditions";
    errorTerms.style.color = "red";
    errorTerms.style.fontSize = "0.7rem";
    errorTerms.style.marginTop = "5px";
    errorTerms.style.marginBottom = "20px";
    errorTerms.style.display = "inline-block";
  };

  // Confirmation du formulaire

  if (firstCheck == true && lastCheck == true && emailCheck == true && quantityCheck == true && locationChecked == true && termsCheck == true && birthCheck == true) {
    form.style.display = "none";
    modalCloseConfirmation.style.display = "flex";
  }
}

// Confirmation de la fermeture de la modale
btnConfirmation.forEach((btn) => btn.addEventListener("click", closeModal));



