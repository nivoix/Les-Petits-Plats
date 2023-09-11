import { recettes } from "../data/recettes.js";
import { createListeProperties } from "../factories/createListes.js";
import { displayListTag } from "./displayListTag.js";

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
 function closeTag(tag, choiceName) {
  const close = document.getElementById(`close${choiceName}`)
    close.addEventListener('click', () => {
      tag.remove()
      displayListTag(selectTag, recettes)
    })
    
}
export { closeTag }