// 7.1 (6p) Hämta data med fetch från denna url: https://restcountries.com/v3.1/all
// Visa följande för varje land:
// Officiellt namn
// Valuta
// bild på flagga med tillhörande alt-text

const containerEl = document.querySelector(".container");

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();

  data.forEach((country) => {
    const countryDiv = document.createElement("div");

    let currency = "";

    if (country.currencies) {
      const currencyArr = Object.values(country.currencies);
      currency = currencyArr[0].name;
    }

    countryDiv.innerHTML = `<h2>${country.name.official}</h2>
     <p>${currency}</p>
     <img src="${country.flags.png}" alt="${country.flags.alt}" />`;

    containerEl.appendChild(countryDiv);
  });
}

getCountries();

// 7.2 (3p) Gör sidan responsive:
// I desktop-vy ska varje land visas i 3 kolumner.
// I mobil-vy ska varje land visas i en kolumn med 100% width.
