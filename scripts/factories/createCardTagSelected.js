import { createSelectTagCard } from "../templates/tags.js";

function createCardTagSelected(value, areaListe, tag) {
  
    const template = new createSelectTagCard(value, tag)
    areaListe.appendChild(template.createCardTag())
}
export { createCardTagSelected }