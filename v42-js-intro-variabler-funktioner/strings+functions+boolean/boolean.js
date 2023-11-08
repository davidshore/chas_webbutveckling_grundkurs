// debugger;
/* 
Boolean 
(sant eller falskt)
*/

// Boolean
// (sant eller falskt)

// let myBool = true;
// myBool = false;

// const element = document.getElementById("age");
// console.log()

const age = 18;

// Jämförelser
const isOver18 = age >= 18;
const isUnder30 = age < 30;

const is18 = age == 18;

//Båda måste vara sanna för att isBetween18And30 ska vara sann
const isBetween18And30 = age >= 18 && age <= 30;

// En av jämnförelserna måste vara san för att under18orOver30 ska vara sann
const under18orOver30 = age < 18 || age > 30;

console.log("isOver18: ", isOver18);

if (isOver18) {
  console.log("Du får handla på systemet");
} else if (isUnder30) {
  console.log("Du får inte handla starksprit");
} else {
  console.log("Du får vänta");
}
