function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertCtoF(30));

function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

reverseString("hello");

function factorialize(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

function findLongestWordLength(str) {
  const arr = str.split(" ");

  let longestWord = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }

  return longestWord;
}

// Hittar högsta i en array.
function getHighestNum(arr) {
  let highest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (highest < arr[i]) {
      highest = arr[i];
    }
  }
  return highest;
}

function largestOfFour(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    const highest = getHighestNum(subArr);
    resultArr.push(highest);
  }

  return resultArr;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
