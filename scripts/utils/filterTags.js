import { createListeProperties } from "../factories/createListes.js";
import { createCardTagSelected } from "../factories/createCardTagSelected.js";

// filtrer la liste des tags en fonction de la saisie de l'input
function filterListeTag(property, areaListe, nameProperty) {
  /* chooseTag() */
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
let value =''
// choisir un élément de la liste des tag
function chooseTag(nameProperty) {
  const elementListeProperty = document.querySelectorAll('.valueListe a')
  const aeraCardTagSelected = document.querySelector(`.listElementSelectedOf${nameProperty}`)
  console.log(aeraCardTagSelected);
  /* for(let el of (Array.from(elementListeProperty))){ */
  (Array.from(elementListeProperty)).forEach((el) => {  
    el.addEventListener('click', (e) => {
      e.preventDefault()
      console.log(e);
      value = e.target.textContent
      console.log(value);
      console.log(e.target.firstChild.data);
      return value
    })
  })
  // affichage de la carte si présence d'une valeur
  if(value != ''){
    createCardTagSelected(value, aeraCardTagSelected)
    const tag = document.getElementById(`${value}`)
    console.log(tag);
    console.log(tag.id);
    value = ''
    closeTag(tag)
  }
}
export { chooseTag }

// Suppression du tag
function closeTag(tag) {
  const close = document.getElementById(`${tag.id}`)
  console.log(close);
  close.addEventListener('click', () => {
    tag.remove()
  })
}
export { closeTag }