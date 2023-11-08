//Create
const person = {
  firstName: "Sven",
  food: {
    spagetti: {
      tomat: {
        titel: "Min favvo tomat-pasta",
        pris: "100kr",
      },
      ost: {
        titel: "Min favvo ost-pasta",
        pris: "150kr",
      },
    },
    sallad: {
      tonfisk: {
        titel: "Min favvo tonfisk-sallad",
        pris: "200kr",
      },
    },
  },
};

//Read nested objects
const dish = person.food.sallad.tonfisk;
const dish2 = person["food"]["spagetti"]["ost"];
const dish3 = person.food["spagetti"].tomat;

console.log(dish3);

//Arrays with objects
const tShirts = [
  { size: "M", colors: ["Blue"], price: 100 },
  { size: "L", colors: ["Blue", "Red"], price: 100 },
  { size: "S", colors: ["Blue"], price: 150 },
  { size: "M", colors: ["Pink"], price: 150 },
];

const color = tShirts[1]["colors"][1];
console.log("color", color);

//Update
tShirts[1].colors[1] = "Purple";

//Loop with map
// Hur få detta resultat: [100, 100, 150]
// eller ["M", "L", "S"]

const prices = tShirts.map((tShirt) => {
  return tShirt.price;
});

console.log("prices", prices);
const sizes = tShirts.map((tShirt) => {
  return tShirt.size;
});

console.log("sizes", sizes);

//Filter
// Hur får man detta: [{ size: "M", colors: ["Blue"], price: 100 },
// { size: "M", colors: ["Pink"], price: 150 }]

const mediumTshirts = tShirts.filter((tShirt) => {
  return tShirt.size == "M";
});

console.log("mediumTshirts", mediumTshirts);

// Ändra priset
const tShirtsNewPrice = tShirts.map((tShirt) => {
  tShirt.price *= 0.5;
  return tShirt;

  // Utan att ändra orginalet:
  // return {
  //   ...tShirt,
  //   price: tShirt.price * 0.5,
  // };
});

// for in loop
const days = {
  mon: 0,
  tue: 1,
  wed: 2,
  thu: 3,
  fri: 4,
};

for (const key in days) {
  const value = days[key];
  console.log(key, value);
}
