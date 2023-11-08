// DOM = Document Object Model
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btn");
const resultEl = document.getElementById("result");

// Event object = när knappen klickas så skickar den med
// information om händelsen

buttonEl.addEventListener("click", (e) => {
  // parseFloat gör om från sträng till number
  // tex "100" => 100
  const price = parseFloat(inputEl.value);

  const moms = 0.2 * price;

  resultEl.textContent = "Din moms är: " + moms;
});
