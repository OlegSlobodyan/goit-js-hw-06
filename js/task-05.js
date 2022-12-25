const inputText = document.querySelector("#name-input");
const outputValue = document.querySelector("#name-output");
inputText.addEventListener("input", insertValue);
function insertValue(event) {
  if (outputValue.textContent.length >= 2) {
    return (outputValue.textContent = event.currentTarget.value);
  }
  outputValue.textContent = "Anonymous";
}
