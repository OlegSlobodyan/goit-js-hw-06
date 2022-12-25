let counterValue = 0;
const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
value.textContent = counterValue;
decrement.addEventListener("click", () => {
    dec(); 
    updateValue();
});
increment.addEventListener("click", () => {
    inc();
    updateValue()
});


function inc() {
  return (counterValue += 1);
}
function dec() {
  return (counterValue -= 1);
}
function updateValue() {
    value.textContent = counterValue;
}

