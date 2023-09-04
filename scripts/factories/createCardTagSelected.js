import { createSelectTagCard } from "../templates/tags.js";

function createCardTagSelected(value, areaListe) {
  
    const template = new createSelectTagCard(value)
    areaListe.appendChild(template.createCardTag())
}
export { createCardTagSelected }