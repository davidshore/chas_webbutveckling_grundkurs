const buttonEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");

buttonEl.addEventListener("click", (e) => {
  const price = parseFloat(inputEl.value);

  const moms = price * 0.2;

  resultEl.textContent = "Momsen är: " + moms;
});
