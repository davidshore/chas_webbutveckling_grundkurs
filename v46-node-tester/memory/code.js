import { cards } from "./cards.js";
const gameEl = document.getElementById("game");
let lastCard;
let lastCardEl;

// Skapa data för om ett kort visas eller inte

// 1. En array med alla kort-objekt är importerade och ligger i cards. Med forEach Lägg till en property
//    showing: false till varje kort för att hålla reda på om kortet visas eller inte.
cards.forEach((card) => (card.showing = false));

console.log("cards", cards);

// 2. Skapa en funktion createCard. Som tar ett card-objekt och ett index som input och skapar
//    ett img element och lägger till det på sidan i gameEl. Gör så här:
// - skapa ett ett img-element med document.createElement("img")
// - sätt attribut med setAttribute på img-elementet ange tex:
//    imgElement.setAttrubut("src", "images/backside.png") för baksidan på kortet.
//    om card.showing är true använd `images/${card.file}` annars använd "images/backside.png"
// - lägg till width och height till imgElementet
//    width ska vara 100 och height ska vara 145
// - lägg till id = index på card elementet så att du kommer åt det senare
// - använd appendChild för att lägga till kortet till gameEl
function createCard(card, index) {
  const imgTag = document.createElement("img"); // <img width="100" style={height: "100px"} src="images/2_of_clubs.png" />

  if (card.showing) {
    // imgTag.setAttribute("src", `images/${card.file}`);
    imgTag.src = `images/${card.file}`;
  } else {
    imgTag.src = "images/backside.png";
  }

  imgTag.id = index;
  imgTag.width = "100";
  imgTag.height = "145";

  imgTag.addEventListener("click", (e) => {
    const cardElement = e.currentTarget;
    const cardIndex = cardElement.id;
    const cardData = cards[cardIndex];

    cardElement.src = `images/${cardData.file}`;

    if (lastCard) {
      // om kortet finns - gör jämnförelse
      if (lastCard.num != cardData.num) {
        // Om korten inte är lika så vänd tillbaka dom
        setTimeout(() => {
          lastCardEl.src = "images/backside.png";
          cardElement.src = "images/backside.png";
        }, 1000);
        lastCard = null;
      }
    } else {
      // Spara kortet i lastCard
      lastCard = cardData;
      lastCardEl = cardElement;
    }
  });

  gameEl.appendChild(imgTag);
}

// 3. Använd for-loop eller forEach för att loopa igenom alla cards och anropa funktionen
//    createCard med varje kort och varje index (i). Nu ska alla kort synas på sidan.
//    Om du använder forEach måste du lägga till i som andra paremeter i arrow-function.
//    Då räknar i:et från 0 och uppåt

cards.forEach((card, i) => createCard(card, i));

// 4. Lägg till addEventListner på korten i funktionen createCard. När man klickar ska
//    kortet ändras från showing: false till showing:true

// 5 Använd en global variabel lastCard och lastCardEl för att hålla reda på vilket kort man klickade på senast.
//   kolla när man klickar på ett kort om det har samma värde som lastCard (card.num)

// 6 (Ganska svårt) Få ihop hela spelet med det du skrivit ovan.
