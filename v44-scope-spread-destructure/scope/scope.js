// GLOBAL OCH LOCAL SCOPE
// LEXICAL SCOPE = SCOPE DÄR EN VARIABEL DEFINIERADES
let myName = "Fred"; // Global scope

function printName(myName) {
  const myName2 = "Sven"; // Local scope

  console.log(myName);

  function printLastName() {
    const myLastName = "Svensson";
    //Innersta funktionen kan läsa allt utanför
    console.log(myName, myName2, myLastName);
  }

  printLastName();
}

printName("Erik");

// SCOPE MED LET OCH VAR
// let-variabler syns inte utanför block scope.

function varScoping() {
  var x = 1;

  if (true) {
    // block scope
    var x = 2;
    console.log(x); // prints 2
  }

  console.log(x); // prints 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // prints 2
  }

  console.log(x); // prints 1
}
