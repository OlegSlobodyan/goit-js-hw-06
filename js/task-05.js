const inputText = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");
inputText.addEventListener("input", insertValue);
function insertValue(event) {
  if (event.currentTarget.value === "") {
    return (outputValue.textContent = "Anonymous");
  }

  outputValue.textContent = event.currentTarget.value;
}
