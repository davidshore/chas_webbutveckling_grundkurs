//CRUD

//Create
const weekDays = {
  mon: 1,
  tue: 2,
  wed: 3,
};

//Read
const firstDay = weekDays.mon;
const firstDay2 = weekDays["mon"];

//Read with variable
const day = "wed";
const chosenDay = weekDays[day];

//Update
weekDays.mon = 0;
weekDays["tue"] = 1;

//Update with variable
weekDays[day] = 2;

//Uppdate add property
weekDays["thu"] = 3;
weekDays.fri = 4;

//Update add property with variable
const day2 = "sat";
weekDays[day2] = 5;

//Delete
delete weekDays.mon;
delete weekDays["tue"];

console.log("weekDays", weekDays);

//const för objekt och arrayer innebär att man får ändra inuti dessa
//men man får inte skriva över hela arrayen eller objektet.
