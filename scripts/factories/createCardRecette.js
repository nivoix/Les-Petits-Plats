import { cardRecette } from "../templates/cardRecette.js";

function createAllCardRecette (recettes, areaCard) {
  recettes.forEach(recette => {
    
    const template = new cardRecette(recette)
    areaCard.appendChild(template.createCardRecette())
  })
  
}
export { createAllCardRecette }