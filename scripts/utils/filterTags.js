import { createListeProperties } from "../factories/createListes.js";
import { createCardTagSelected } from "../factories/createCardTagSelected.js";

// filtrer la liste des tags en fonction de la saisie de l'input
function filterListeTag(property, areaListe, nameProperty) {
  let inputSearch = document.getElementById(`search${nameProperty}`)
  inputSearch.addEventListener("keyup", (e) => {
      const liste = document.getElementById(`liste${nameProperty}`)
      liste.innerHTML = "";
      console.log(inputSearch.id);
      const result = property.filter((lettres) => lettres.includes(inputSearch.value))
      console.log(result);
      createListeProperties(result, areaListe)
    })
}
export { filterListeTag }


// choisir un élément de la liste et en faire un tag
function chooseTag(nameProperty, Value) {
  const aeraCardTagSelected = document.getElementById(`listeTagSelected${nameProperty}`)
  //creation du tag de l'item selectionné
  createCardTagSelected(Value, aeraCardTagSelected)
  const tag = document.getElementById(`${Value}`)
  // suppression du tag
  closeTag(tag)
}
export { chooseTag }

// Suppression du tag
function closeTag(tag) {
  const close = document.getElementById(`${tag.id}`)
  close.addEventListener('click', () => {
    tag.remove()
  })
}
export { closeTag }