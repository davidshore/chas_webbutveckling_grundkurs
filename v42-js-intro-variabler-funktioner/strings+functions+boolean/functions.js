// debugger;
// Funktionsdeklaration

function getIfOver18(age) {
  if (age == null) {
    return "Wrong input";
  }

  return age > 18; // sant eller falskt
}

// Funktionsanrop
const result1 = getIfOver18(20);
const result2 = getIfOver18(17);
const result3 = getIfOver18();

console.log("result1: ", result1);
console.log("result2: ", result2);
console.log("result3: ", result3);

// Arrow function
const getIfOver18Arrow = (age) => {
  return age > 18;
};

const result4 = getIfOver18Arrow(40);
console.log("result4: ", result4);

// String functions
const greeting = "hejhopp";
const word = greeting.substring(3, 6);
console.log("word:", word);

// Position of letters in string with bracket notation
const letter0 = greeting[0];
console.log("letter0:", letter0);
