//Destucture = bryta isär

const obj = {
  firstName: "Sven",
  lastName: "Larsson",
  age: 56,
};

//gamla sättet
// const firstName = obj.firstName;
// const lastName = obj.lastName;
// const age = obj.age;

//nya sättet
const { firstName: myFirstName, lastName, age } = obj;

console.log(myFirstName);

console.log(age);
const arr = [0, 1, 55];

//gamla sättet
const a = arr[0];
const b = arr[1];

// nya sättet

const [a2, b2, c2] = arr;

console.log(b);
