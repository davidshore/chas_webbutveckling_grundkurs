// 1. (3p) Använd forEach för att skapa en funktion, calculateAverage,
// som tar en array av tal som input och returnerar medelvärdet
// av dessa tal.
// tips: Googla hur man räknar ut medelvärdet av ett antal tal

function calculateAverage(arr) {
  // Din kod här
  let sum = 0;
  let length = arr.length;

  arr.forEach((num) => (sum += num));

  return sum / length;
}
