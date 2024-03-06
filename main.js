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
  const nyttTotalpris = parseInt(totalprisElement.textContent) + pris;
  totalprisElement.textContent = nyttTotalpris + " kr";

  // kollar ifall det finns en tom array
  let VarukorgsObjekt =
    JSON.parse(localStorage.getItem("VarukorgsObjekt")) || [];

  // läger till infon för array
  VarukorgsObjekt.push({ namn, pris });

  // uppdaterar lokala storage med den nya carten
  localStorage.setItem("VarukorgsObjekt", JSON.stringify(VarukorgsObjekt));
}

window.onload = function () {
  // ifall det finns Varukorgs objekt så hämtar den från lokal storage
  const VarukorgsObjekt =
    JSON.parse(localStorage.getItem("VarukorgsObjekt")) || [];

  // Uppdaterar listan och total priset
  VarukorgsObjekt.forEach((item) => {
    const produktElement = document.createElement("li");
    produktElement.textContent = item.namn + ": " + item.pris + " kr";
    document.getElementById("Varukorg-listan").appendChild(produktElement);

    const totalprisElement = document.getElementById("Totalpris");
    totalprisElement.textContent =
      parseInt(totalprisElement.textContent) + item.pris + " kr";
  });
};
