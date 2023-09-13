import { createCardTagSelected } from "./factories/createCardTagSelected.js";
import { createAllCardRecette } from "./factories/createCardRecette.js";
import { recettes } from "./data/recettes.js";
import { displayListTag } from "./utils/displayListTag.js";
import { sortListTag } from "./utils/sortListTag.js";
import { closeTag } from "./utils/filterTags.js";
import { finalFilter } from "./utils/filterByTags.js";
import { nbTotalRecettes } from "./utils/countNbTotalrecettes.js";
import { searchRecipes } from "./utils/filterByInput.js";
import { result } from "./utils/filterByTags.js";

const app = () => {

  const inputSearchProperties = document.querySelectorAll('.searchProperties')
  const selectTag = document.querySelectorAll('.accordion-item')
  const areaCard = document.querySelector('.carteRecette')

    /**************************** gestion des TAGS *******************************/
    
  // e.target.texContent = nom du produit sélectionné
  // el.id.substring(5) = listeAppareils => on supprime 'liste' et on garde 'Appareils'
  let arrayTags =[]
  // choisir un élément de la liste sans recours au filtre
  function chooseElementListTag() {
    const itemListeSelected = document.querySelectorAll('.choiceProperties')
    itemListeSelected.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault()
        // gérer progressivement les recettes filtrées en fonction de l'accumulation des tags selectionnés
        const nbTags = document.querySelectorAll('.listElementSelected')
        const nbTagSelected = Array.from(nbTags).every(nbtag => nbtag.childElementCount === 0)
        let data 
        nbTagSelected ?  data = searchRecipes() : data = result
        ///////////////////////////////////////////////////////////////////////////////////////////////////
        // ne pas mettre 2 fois le même tag
        if(!arrayTags.some(tag =>tag.includes(e.target.textContent))) {
          arrayTags.push(e.target.textContent)
          const aeraCardTagSelected = document.getElementById(`listeTagSelected${el.id.substring(5)}`)
          //creation du tag de l'item selectionné
          createCardTagSelected(e.target.textContent, aeraCardTagSelected, el.id.substring(5))
        }
        const tag = document.getElementById(`${e.target.textContent}`)
        closeTag(tag, e.target.textContent, arrayTags)
        finalFilter(arrayTags, data)
      })
    })
  }
  chooseElementListTag()
  // faire le trie d'une liste en fonction de la saisie de l'input
  sortListTag(inputSearchProperties, recettes)

  /******************************************************************************/

  function init() {
    //afficher toutes les cartes des recettes
    createAllCardRecette(recettes, areaCard)
    //afficher la liste complète des éléments d'une propriété (=tag)
    displayListTag(selectTag, recettes)
    nbTotalRecettes(recettes)
  }
  init()  
}
app()