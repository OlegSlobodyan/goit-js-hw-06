function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const create = input.nextElementSibling;
const destroy = create.nextElementSibling;
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  //ElementsToAdd = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    element.style.backgroundColor = getRandomHexColor();
    const hightWidth =
      ((element.style.width = `${30 + 10 * i}px`),
      (element.style.height = `${30 + 10 * i}px`));


    boxes.append(element);
    console.log(element);
  }
}
let value = 0;
create.addEventListener("click", createBoxes(input.value))
// input.addEventListener("input", (event) => {
//   value = event.currentTarget.value
// })

 console.log(input.value)
