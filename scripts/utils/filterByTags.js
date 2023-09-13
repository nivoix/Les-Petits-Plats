import { createAllCardRecette } from "../factories/createCardRecette.js"
import { displayListTag } from "./displayListTag.js"
import { recettes } from "../data/recettes.js"
import { nbTotalRecettes } from "./countNbTotalrecettes.js"

const selectTag = document.querySelectorAll('.accordion-item')
const areaCard = document.querySelector('.carteRecette')
let result 
  // filtrer les recettes avec les Tags
let searchFinalRecipe
function finalFilter(value, finalRecipes) {
  value.every((tag) => {
    searchFinalRecipe = finalRecipes.filter(finalRecipe => {
      const searchInTagUstensilsSelected = finalRecipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(tag))
      const searchInTagAppareilsSelected = finalRecipe.appliance.toLowerCase().includes(tag)
      const searchInTagIngredientSeclected = finalRecipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(tag))
      return (searchInTagUstensilsSelected || searchInTagAppareilsSelected || searchInTagIngredientSeclected )
    })
    return searchFinalRecipe
  })
  if(searchFinalRecipe.length >=0 && searchFinalRecipe.length < 50) {
    areaCard.innerHTML = ''
    createAllCardRecette(searchFinalRecipe, areaCard)
    displayListTag(selectTag, searchFinalRecipe)
    nbTotalRecettes(searchFinalRecipe)
  } else if (searchFinalRecipe == 0) {
    areaCard.innerHTML = ''
    const messageErreur = document.createElement('p')
    messageErreur.textContent = `« Aucune recette ne contient "${value}" vous pouvez chercher «tarte aux pommes », « poisson », etc.`
    messageErreur.className ='messageErreur'
    areaCard.appendChild(messageErreur)
    displayListTag(selectTag, recettes)
  }
  result = searchFinalRecipe
}
  export { finalFilter }
  export { result }