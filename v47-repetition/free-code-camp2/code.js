function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }

  let truncStr = "";
  truncStr = str.substring(0, num);
  truncStr += "...";

  return truncStr;
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);

function titleCase(str) {
  let sentence = "";
  const words = str.split(" ");

  words.forEach((word, i) => {
    word = word.toLowerCase();
    word = word.substring(0, 1).toUpperCase() + word.substring(1);

    if (i < words.length - 1) {
      word += " ";
    }
    sentence += word;
  });

  return sentence;
}

console.log(titleCase("I'm a little tea pot"));

function frankenSplice(arr1, arr2, n) {
  const arr = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];

  return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

function bouncer(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      arr.splice(i, 1);
      i--;
    }
  }

  return arr;
}

console.log(bouncer([7, "ate", "", false, 9]));
