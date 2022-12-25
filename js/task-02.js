const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredient = document.querySelector("#ingredients");
const elements = ingredients.map((el) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = el;
  return element;
});
ingredient.append(...elements);
