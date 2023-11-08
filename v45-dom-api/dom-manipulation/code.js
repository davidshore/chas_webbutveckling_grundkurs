// CRUD

// CREATE
const element = document.createElement("div");
element.setAttribute("class", "box blue");
element.textContent = "D";
console.log("element", element);
// Läs in parent för att lägga till nya elementet
const col1 = document.getElementById("col1");
col1.appendChild(element);

// CREATE MED ARRAY
const moreBlue = ["E", "F", "G"];
moreBlue.forEach((boxLetter) => {
  const element = document.createElement("div");
  element.setAttribute("class", "box blue textWhite");
  element.textContent = boxLetter;

  col1.appendChild(element);
});

// READ
// getElementById, getElementsByClassName, querySelector
const boxA = document.getElementById("A");
console.log("A", boxA);

const boxes = document.getElementsByClassName("box");
console.log(boxes);

const boxE = document.querySelector("#E");
console.log("boxE", boxE);

const redBoxes = document.querySelectorAll(".red");
console.log("redBoxes", redBoxes);

// UPDATE
const heading = document.getElementsByClassName("heading");
console.log(heading);
heading[0].textContent = "hej";

const blueBoxes = document.querySelectorAll(".blue");
blueBoxes.forEach((blueBox) => {
  blueBox.innerHTML = `<h2>${blueBox.innerHTML}</h2>`;
});

const greenBox = document.createElement("div");
greenBox.setAttribute("class", "box green textWhite");
greenBox.textContent = "I";

// hämta parent
const col3 = document.querySelector("#col3");
const boxJ = document.querySelector("#J");
const boxH = document.querySelector("#H");

col3.insertBefore(greenBox, boxJ);

//Delete
// Behöver parent och elementet som ska tas bort.
col3.removeChild(boxH);
col3.removeChild(boxJ);

//Uppdatera style med javascript
const boxC = document.querySelector("#C");
boxC.style.backgroundColor = "purple";
