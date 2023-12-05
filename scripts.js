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
    return false;
  } else if (!nameInput.value.match(/^[A-Za-z]*\s{1}/)) {
    nameError.innerHTML = "Full name required";
    return false;
  } else {
    nameError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
    return true;
  }
}

function phoneValidation() {
  const phoneInputValue = phoneInput.value;

  if (phoneInputValue.length === 0) {
    phoneError.innerHTML = "Phone no. is required"
    return false;
  } else if (phoneInputValue < 11) {
    phoneError.innerHTML = "Minimum 11 digits";
    return false;
  } else if (phoneInputValue.match(/[A-Z]/gi)) {
    phoneError.innerHTML = "only numbers are allowd";
    return false;
  }
  else if (phoneInputValue.match(/^\d{11}$/)) {
    phoneError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
    return true;
  }
}

function emailValidation() {
  if (emailInput.value === "") {
    emailError.innerHTML = "Email is required";
    return false;
  } else if (!emailInput.value.match(/^([A-Z0-9_\.])+@([A-Z0-9_\.])+\.([A-Z]){2,4}$/gi)) {
    emailError.innerHTML = "Invalid email";
    return false;
  } else {
    emailError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
    return true;
  }
}

function messageValidation() {
  if (messageInput.value === "") {
    messageError.innerHTML = "Message is required";
    return false;
  } else {
    messageError.innerHTML = `<i class="fa fa-check-circle" aria-hidden="true"></i>`;
    return true;
  }
}

submitButton.addEventListener("click", () => {
  if (nameValidation() && phoneValidation() && emailValidation() && messageValidation() === true) {
    toastViewer.classList.add("display-toast");
    console.log("Toast Display");
  } else {
    toastViewer.classList.remove("display-toast");
  }

  setTimeout(() => {
    toastViewer.classList.remove("display-toast");
  }, 3000);
})
