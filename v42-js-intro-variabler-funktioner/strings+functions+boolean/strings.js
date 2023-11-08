/* Strings 3 olika sätt */
const s1 = "hej";
const s2 = "hej2";
const s3 = `hej3`;

// Variabler i strängar
const age = 19;
const myName = "Fred";

const greeting = "Hello, I'm " + age + " years old";
console.log(greeting);

let greeting2 = `Hello, my name is ${myName}. I'm ${age} years old.`;
console.log(greeting2);

greeting2 = "hej";
console.log("--- greeting: ---", greeting2);
