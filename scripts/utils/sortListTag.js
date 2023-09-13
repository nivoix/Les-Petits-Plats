import { filterListeTag } from "./filterTags.js";
import { extractDataRecipes } from "../data/extractDataRecipes.js";

function sortListTag(inputSearchProperties, property) {

  const listeIngredient = document.getElementById('listeIngredient')
  const listeUstensils = document.getElementById('listeUstensils')
  const listeAppareils = document.getElementById('listeAppareils')
  let data = extractDataRecipes(property)

  // faire le trie d'une liste en fonction de la saisie de l'input
  inputSearchProperties.forEach((inputSearch) => {
      inputSearch.addEventListener("click", (e) => {
          if(inputSearch.id.includes('Ingredient')){
              filterListeTag(data.Ingredient, listeIngredient, "Ingredient")
          }else if (inputSearch.id.includes('Ustensils')){
              filterListeTag(data.Ustensils, listeUstensils, "Ustensils")
          } else if (inputSearch.id.includes('Appareils')){
              filterListeTag(data.Appareils, listeAppareils, "Appareils")
          }
      })
  })
}
export { sortListTag }