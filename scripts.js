const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
//const submitError = document.querySelector("#submit-error");

const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", () => {
  if (!nameValidation() && !phoneValidation() && !emailValidation() && !messageValidation()) {

  }
})

const nameInput = document.querySelector(".js-name");
const emailInput = document.querySelector(".js-email");
const phoneInput = document.querySelector(".js-phone");
const messageInput = document.querySelector(".js-message");


nameInput.addEventListener("keyup", () => {
  nameValidation();
})

phoneInput.addEventListener("keyup", () => {
  phoneValidation();
})

emailInput.addEventListener("keyup", () => {
  emailValidation();
})

messageInput.addEventListener("keydown", () => {
  messageValidation();
})


function nameValidation() {
  if (nameInput.value === "") {
    nameError.innerHTML = "Name is required";
  } else if (!nameInput.value.match(/^[A-Za-z]*\s{1}/)) {
    nameError.innerHTML = "Full name required";
  } else {
    nameError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  }
}

function phoneValidation() {
  const phoneInputValue = phoneInput.value;

  if (phoneInputValue.length === 0) {
    phoneError.innerHTML = "Phone no. is required"
  }
  else if (phoneInputValue < 11) {
    phoneError.innerHTML = "Minimum 11 digits"
  } else if (phoneInputValue.match(/[A-Z]/gi)) {
    phoneError.innerHTML = "only numbers are allowd";
  }
  else if (phoneInputValue.match(/^\d{11}$/)) {
    phoneError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  }
}

function emailValidation() {
  if (emailInput.value === "") {
    emailError.innerHTML = "Email is required";
  } else if (!emailInput.value.match(/^([A-Z0-9_\.])+@([A-Z0-9_\.])+\.([A-Z]){2,4}$/gi)) {
    emailError.innerHTML = "Invalid email"
  } else {
    emailError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  }
}

function messageValidation() {
  if (messageInput.value === "") {
    messageError.innerHTML = "Message is required";
  } else {
    messageError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  }
}





