import { recettes } from "../data/recettes.js";
import { createListeProperties } from "../factories/createListes.js";
import { displayListTag } from "./displayListTag.js";
import { searchRecipes } from "./filterByInput.js";
import { finalFilter, result } from "./filterByTags.js";

const selectTag = document.querySelectorAll('.accordion-item')

// filtrer la liste des tags en fonction de la saisie de l'input
function filterListeTag(property, areaListe, nameProperty) {
  let inputSearch = document.getElementById(`search${nameProperty}`)
  inputSearch.addEventListener("input", (e) => {
    const liste = document.getElementById(`liste${nameProperty}`)
    liste.innerHTML = "";
    const result = property.filter((lettres) => lettres.includes(inputSearch.value))
    createListeProperties(result, areaListe)
    if(e.target.value === '') {
      createListeProperties(property, areaListe)
    };
  })
}
export { filterListeTag }

// Suppression du tag
function closeTag(tag, choiceName, arrayTags) {
const close = document.getElementById(`close${choiceName}`)
const tagUnselected = document.querySelectorAll('.tagSelected')
  close.addEventListener('click', (e) => {
    tag.remove()
    arrayTags.splice(Array.from(tagUnselected).indexOf(tag),1)
    if(arrayTags.length === 0) {
      displayListTag(selectTag, recettes)
      searchRecipes()
    }else if( arrayTags.length === 1) {
      displayListTag(selectTag, result)
      finalFilter(arrayTags, searchRecipes())
    }else if(arrayTags.length > 1){
      displayListTag(selectTag, result)
      finalFilter([arrayTags[0]], searchRecipes())
      for(let i = 1; i < arrayTags.length; i++){
        finalFilter([arrayTags[i]], result)
      }
    }
  })
}
export { closeTag }