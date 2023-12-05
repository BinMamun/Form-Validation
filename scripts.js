const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
// const submitError = document.querySelector("#submit-error");

const submitButton = document.querySelector("#submit-button");


const nameInput = document.querySelector(".js-name");

nameInput.addEventListener("keyup", () => {
  if (nameInput.value === "") {
    nameError.innerHTML = "Name is required";
  } else if (!nameInput.value.match(/^[A-Za-z]*\s{1}/)) {
    nameError.innerHTML = "Full name required";
  } else {
    nameError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  }
})


const phoneInput = document.querySelector(".js-phone");

phoneInput.addEventListener("keyup", () => {
  const phoneInputValue = phoneInput.value;

  const reg = /^\d{11}$/;

  if (phoneInputValue.length === 0) {
    phoneError.innerHTML = "Phone no. is required"
  }
  else if (phoneInputValue < 11) {
    phoneError.innerHTML = "Minimum 11 digits"
  } else if (phoneInputValue.match(/[A-Z]/gi)) {
    phoneError.innerHTML = "only numbers are allowd";
  }
  else if (phoneInputValue.match(reg)) {
    phoneError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  }
})

const emailInput = document.querySelector(".js-email");

emailInput.addEventListener("keyup", () => {
  if (emailInput.value === "") {
    emailError.innerHTML = "Email is required";
  } else if (!emailInput.value.match(/^([A-Z0-9_\.])+@([A-Z0-9_\.])+\.([A-Z]){2,4}$/gi)) {
    emailError.innerHTML = "Invalid email"
  } else {
    emailError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  }
})

