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



