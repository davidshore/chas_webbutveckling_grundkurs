// Syntax fel: t.ex. fel antal parenteser eller måsvingar
// const obj = {

// Försöker läsa från object som inte finns
let myObject = {};

const first = myObject?.firstName?.name;

let myArray = [];
myArray.map((item) => {
  console.log(item);
});
