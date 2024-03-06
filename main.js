function add(namn, pris) {
  // Hämta element
  const varukorgLista = document.getElementById("Varukorg-listan");
  const totalprisElement = document.getElementById("Totalpris");

  // Skapa element för produkten
  const produktElement = document.createElement("li");
  produktElement.textContent = namn + ": " + pris + " kr";

  // Lägg till produkt i listan
  varukorgLista.appendChild(produktElement);

  // Uppdatera totalpriset
  const nyttTotalpris = parseInt(totalprisElement.textContent) + pris + "kr";
  totalprisElement.textContent = nyttTotalpris;
}
