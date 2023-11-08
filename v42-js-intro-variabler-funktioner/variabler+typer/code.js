// VARIABLER - Behållare för data i javascript och alla andra programmeringsspråk.

// CRUD - CREATE, READ, UPDATE, DELETE

//CREATE
let myNumber = 5;
console.log("myNumber", myNumber);

// READ
let myNumber2 = myNumber;
console.log("myNumber2:", myNumber2);

//UPDATE
myNumber = myNumber + 3;
console.log("myNumber updated", myNumber);

//DELETE
myNumber = null;

let positionX = 5;
let positionY = 8;
// Ändrar css: translate(100px, 0px);

// TYPER
//STING
let myString = "hej";

//NUMBER
let myNum = 10;

//BOOLEAN
let myBoolean = true;
myBoolean = false;

let showPopup = false;
//Visa popup:
showPopup = true;

//Tryck på stäng-knappen:
showPopup = false;

//null och undefined
let myVar;
console.log("myVar", myVar);
showPopup = null;
console.log("showPopup", showPopup);

let showPopup2;

// var, let och const
// var = gamla sättet att skapa variabler.
// versioner av javascript - ecmascript es5 - senaste = es6
// let är nya var
// const är helt nytt

//CONST - betyder att den inte går att ändra.
let myNum2 = 5;

// myNum2 = "hej";

//myNum2 = 7; Funkar inte - di får error.
console.log(myNum2);
let myNum3 = myNum2;

// Operators (matte-funktioner + annat)
// +, -, *, /  (matte-funktioner)
const sum = 1 + 20;
let result = 3 * 3;

result++; //öka med ett;
result--; //minska med ett;

result += 10; // öka med 10;
result *= 10; // gångra med 10 och uppdatera variabeln;

result = result * 10; // Ovan används istället för detta

// Modolo operator
let result2 = 10 % 3; // Rest vid heltalsdivition = 1

let i = 0;
// Är det jämt?
const isEven = i % 2 == 0;
