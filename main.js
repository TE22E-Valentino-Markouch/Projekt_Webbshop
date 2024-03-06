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
    let VarukorgsObjekt = JSON.parse(localStorage.getItem("VarukorgsObjekt")) || [];
  
    // läger till infon för array
    VarukorgsObjekt.push({ namn, pris });
  
    // uppdaterar lokala storage med den nya carten
    localStorage.setItem("VarukorgsObjekt", JSON.stringify(VarukorgsObjekt));
  }
