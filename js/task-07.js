const control = document.querySelector("#font-size-control");
const valueSize = document.querySelector("#text");
control.addEventListener("input", valueInput);
function valueInput() {
  valueSize.style.fontSize = control.value + "px";
}
