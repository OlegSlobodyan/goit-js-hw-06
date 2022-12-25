const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email;
  const password = formElements.password;
  if (email.value.length === 0 || password.value.length === 0) {
    alert("У вас є не заповнені поля!");
  }

  console.log({ Login: email.value, Password: password.value });
  event.currentTarget.reset();
}
