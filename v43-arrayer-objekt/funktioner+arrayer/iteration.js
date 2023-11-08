// iteration eller loopar = Går igenom en hel array och t.ex. läser
// allt i arrayen.

const myArray = [4, 5, 24, 5, 1, 77, 6];

// krångligt att skriva så här för att läsa hela arrayen:
const index1 = myArray[0];
const index2 = myArray[1];
const index3 = myArray[2];
const index4 = myArray[3];
const index5 = myArray[4];
const index6 = myArray[5];
const index7 = myArray[6];

//for loop
// i går mellan 0 och 5
for (let i = 0; i < myArray.length; i++) {
  const result = myArray[i];
  console.log(result);
}

// räkna summan av arrayen
let sum = 0;
for (let i = 0; i < 6; i++) {
  sum += myArray[i];
}

// array-funktioner som loopar
// forEach
let sum2 = 0;
myArray.forEach((item) => {
  console.log(item);
  sum2 += item;
  console.log("sum in loop: ", sum2);
});
console.log("sum: ", sum2);

// map
// map är som forEach men den skapar en ny array.
// glöm inte return

const myArray2 = myArray.map((item) => {
  return `<div>${item}</div>`;
});
console.log(myArray2);
