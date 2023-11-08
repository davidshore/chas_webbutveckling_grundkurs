const tshirt1 = "blåa t-shirt";
const tshirt2 = "röd t-shirt";

// börja alltid räkna från position noll.
const myArray = [4, 5, 24, 5, 1, 77];
const tshirts = ["blåa t-shirt", "röd t-shirt"];

// CRUD - Create Read Update Delete

// Read
console.log(myArray[3]);
const index4 = myArray[4];
console.log(index4);

// Update
myArray[2] = 25;
myArray[4] = 25;

let myVar;

console.log(myVar);

// Delete
myArray[2] = null;
console.log(myArray);

myArray.splice(2, 1);
console.log(myArray);

myArray.splice(1, 3);
console.log(myArray);

// Create
const myArray2 = ["hej", "hopp"];
myArray2.push("hej");
console.log(myArray2);
