const focusInput = document.querySelector("input#validation-input");
focusInput.addEventListener("blur", blureStatus);
function blureStatus(event) {
  if (event.currentTarget.value.length === Number(focusInput.dataset.length)) {
    focusInput.classList.remove("invalid");
    focusInput.classList.add("valid");
  } else if (
    event.currentTarget.value.length !== Number(focusInput.dataset.length)
  ) {
    focusInput.classList.add("invalid");
    focusInput.classList.remove("valid");
  }
}
