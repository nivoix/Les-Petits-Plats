import { liste } from "../templates/tags.js";

function createListeProperties(property, areaListe) {
  
    property.forEach(aliment => {
      const template = new liste(aliment)
      areaListe.appendChild(template.createListe())
    });
}
export { createListeProperties }

