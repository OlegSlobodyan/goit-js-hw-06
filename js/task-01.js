const numberOfCastegories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${numberOfCastegories}`);

const tittles = document.querySelectorAll(" h2");
const numberOfLi = document.querySelectorAll("ul")
tittles.forEach(el => {
    console.log(`Category: ${el.textContent}`)
    console.log(`Elements: ${numberOfLi.length}`);
})
