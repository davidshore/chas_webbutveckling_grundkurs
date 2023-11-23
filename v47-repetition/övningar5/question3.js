// 3. (3p) Skriv en funktion, capitalizeWords, som tar en array av
// strängar som input och returnerar en ny array där varje
// ord börjar med en stor bokstav.

function capitalizeWords(arr) {
  const newArr = [];

  arr.forEach((word) => {
    const firstLetter = word.substring(0, 1);
    const theRest = word.substring(1);

    return firstLetter.toUpperCase() + theRest.toLowerCase();
  });
  return newArr;
}

console.log(capitalizeWords(["hej", "hopp"])); // ska logg ["Hej", "Hopp"]
