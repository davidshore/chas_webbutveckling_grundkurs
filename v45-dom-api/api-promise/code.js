// Epoch tid: Antal millisekunder sen 1 januari 1970
const t = Date.now();
console.log("tid just nu: ", t);

// setTimeout(() => {
//   const t2 = Date.now();
//   console.log("tid just nu2: ", t2);

//   console.log("Det har gått: ", t2 - t, " millisekunder");
// }, 1000);

// Får ett promise av en response-objekt
const responsePromise = fetch("https://jsonplaceholder.typicode.com/todos/");
console.log("Raden efter fetch: ", Date.now() - t);

// I then har du fått det riktiga response-objektet
// Sen väntar man på json-omvandlingen till js-objekt med dataPromise
const dataPromise = responsePromise.then((response) => {
  console.log("Svar från internet: ", Date.now() - t);

  return response.json();
});

console.log(dataPromise);

// I then har du riktiga javascript-datat.
dataPromise.then((data) => {
  console.log(data);
});

// Med then chaining
// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));
