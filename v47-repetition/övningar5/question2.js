// 2. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.

function removeDuplicates(arr) {
  const unique = [];
  const uniqueLowerCase = [];

  // includes - kollar om ett element finns i en array
  // indexOf - kollar vilket index ett element har. Ger -1 om den inte finns

  arr.forEach((item) => {
    //Finns den i den unika arrayer?
    const lowerCaseItem = item.toLowerCase();
    const isItemInUniqueArray = uniqueLowerCase.includes(lowerCaseItem);

    if (!isItemInUniqueArray) {
      unique.push(item);
      uniqueLowerCase.push(lowerCaseItem);
    }
  });

  return unique;
}

console.log(removeDuplicates(["hej", "hej", "hopp"])); // ska logga ["hej", "hopp"]
