// Uppgift skapa funktionen som jag ritar:
const juicemaskin2 = (frukt) => {
  return `${frukt} juice`;
};

function juicemaskin(frukt) {
  return frukt + " juice";
}

const res = juicemaskin("äpple");
console.log(res);

const result1 = juicemaskin("äpple");
const result2 = juicemaskin("morot");
const result3 = juicemaskin("appelsin");

console.log(result1, result2, result3);

console.log(
  juicemaskin("äpple"),
  juicemaskin("morot"),
  juicemaskin("appelsin")
);

// Funktionsdeklaration
function fjärrkontroll(kanal) {
  return `Du ser på kanal ${kanal}`;
}

// Funktionsanrop
const r1 = fjärrkontroll(1);
const r2 = fjärrkontroll(2);
const r3 = fjärrkontroll(3);

function trängselskatt(tid) {
  if (tid <= 15 && tid >= 12) {
    return 20;
  } else {
    return 10;
  }
}

console.log(trängselskatt(13));
