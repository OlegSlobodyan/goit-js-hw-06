function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  wrapper: document.body,
  button: document.querySelector(".change-color"),
  text: document.querySelector(".color"),
};
refs.button.addEventListener("click", changeColor);
function changeColor() {
  refs.wrapper.style.backgroundColor = getRandomHexColor();
  refs.text.textContent = getRandomHexColor();
}
