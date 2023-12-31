const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const submitButton = document.querySelector("#submit-button");

const toastViewer = document.querySelector(".js-toast-box");


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

  if (phoneInput.value === "") {
    phoneError.innerHTML = "Phone no. is required";
  } else if (phoneInput.value < 11) {
    phoneError.innerHTML = "Minimum 11 digits";
  } else if (phoneInput.value.match(/[A-Z]/gi)) {
    phoneError.innerHTML = "only numbers are allowd";
  }
  else if (phoneInput.value.match(/^\d{11}$/)) {
    phoneError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
  }
}

function emailValidation() {
  if (emailInput.value === "") {
    emailError.innerHTML = "Email is required";
  } else if (!emailInput.value.match(/^([A-Z0-9_\.])+@([A-Z0-9_\.])+\.([A-Z]){2,4}$/gi)) {
    emailError.innerHTML = "Invalid email";
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

submitButton.addEventListener("click", () => {
  if (nameValidation() && phoneValidation() && emailValidation() && messageValidation() === true) {
    toastViewer.classList.add("display-toast");
  } else {
    toastViewer.classList.remove("display-toast");
  }
  setTimeout(() => {
    toastViewer.classList.remove("display-toast");
  }, 3000);
})
