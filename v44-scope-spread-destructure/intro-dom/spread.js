//Spread

// Kopiera object
const obj = {
  firstName: "Sven",
};

const obj2 = { ...obj };

// inte kopia - referens
const obj3 = obj;

obj.firstName = "Fred";

console.log("obj3 referens", obj3);
console.log("obj2 kopia", obj2);

// Kopiera en array
const arr = [1, 2, 3];
const arr2 = [...arr];

// Lägga ihop 2 arrayer
const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const arr5 = [...arr3, ...arr4];

// kopiera objekt och uppdatera samtidigt
const obj4 = { ...obj, lastName: "Larsson", firstName: "Lars" };
console.log(obj4);
