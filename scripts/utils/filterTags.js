import { recettes } from "../data/recettes.js";
import { createListeProperties } from "../factories/createListes.js";
import { displayListTag } from "./displayListTag.js";
import { searchRecipes } from "./filterByInput.js";
import { finalFilter, result } from "./filterByTags.js";

const ligneTag = document.querySelector('.optionsFiltre')
const msgInfoInput = document.createElement('p')
msgInfoInput.className= "msgInfoInput"
ligneTag.appendChild(msgInfoInput)
const selectTag = document.querySelectorAll('.accordion-item')
const regexp = new RegExp('^[a-zA-Z _-]+$')

// filtrer la liste des tags en fonction de la saisie de l'input
function filterListeTag(property, areaListe, nameProperty) {
  let inputSearch = document.getElementById(`search${nameProperty}`)
  inputSearch.addEventListener("keyup", (e) => {
    if(regexp.test(inputSearch.value)){
      console.log(inputSearch.value);
      msgInfoInput.textContent = ""
      const liste = document.getElementById(`liste${nameProperty}`)
      liste.innerHTML = "";
      const result = property.filter((lettres) => lettres.includes(inputSearch.value))
      createListeProperties(result, areaListe)
    }else if(e.target.value === "") {
      msgInfoInput.textContent = ""
      createListeProperties(property, areaListe)
    }else{
      msgInfoInput.textContent = "Les caractères spéciaux et les chiffres ne sont pas acceptés"
    }
  })
}
export { filterListeTag }

// Suppression du tag
function closeTag(/* tag, */ choiceName, arrayTags, arrayData) {
const close = document.getElementById(`close${choiceName}`)
  close.addEventListener('click', (e) => {
    const tag = document.getElementById(`${e.target.id.substring(5)}`)
    const indexTag = arrayTags.indexOf(tag.id);
    tag.remove()
    arrayTags.splice(indexTag,1)
    arrayData.splice(indexTag+1,1)
    if(arrayTags.length === 0) {
      displayListTag(selectTag, recettes)
      searchRecipes()
    }else if( arrayTags.length === 1) {
      displayListTag(selectTag, result)
      finalFilter(arrayTags, searchRecipes())
    }else if(arrayTags.length > 1){
      displayListTag(selectTag, result)
      finalFilter([arrayTags[0]], arrayData[0])
      for(let i = 1; i < arrayTags.length; i++){
        finalFilter([arrayTags[i]], arrayData[i])
      }
    }
  })
}
export { closeTag }