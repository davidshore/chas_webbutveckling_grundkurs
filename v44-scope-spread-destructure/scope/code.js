const fruits = ["apple", "orange", "cherry"];

// Arrow-funktions på en rad - Ger automatisk return.
// ta bort måsvingar och return
const fruitJuice = fruits.map((fruit) => fruit + "-juice");

// detta blir samma som ovan
const fruitJuice2 = fruits.map((fruit) => {
  return fruit + "-juice";
});
