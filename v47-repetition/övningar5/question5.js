// Skapa en funktion, findLongestWord, som tar en sträng som input
// och returnerar det längsta ordet i strängen.

// 1. Dela upp meningen i en array med ord
// 2. Loopa arrayen och jämnför med en variabel som håller reda på längsta ordet.

function findLongestWord(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord("hej hopp hej")); // hopp
