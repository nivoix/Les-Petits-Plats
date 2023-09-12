import { createAllCardRecette } from "../factories/createCardRecette.js"
import { displayListTag } from "./displayListTag.js"
import { nbTotalRecettes } from "./countNbTotalrecettes.js"
import { recettes } from "../data/recettes.js"


const selectTag = document.querySelectorAll('.accordion-item')
const areaCard = document.querySelector('.carteRecette')
let resultInput
//filtrer les recettes en fonction de l'input principal et des tags
const mainInput = document.querySelector('#search')
mainInput.addEventListener('input', () => {
  if (mainInput.value.length >=3 || mainInput.value.length === 0) {
      searchRecipes()
  }
})
  //recherche des recettes correspondantes à la saisie de l'input principale
  function searchRecipes() {
    const searchTerm = mainInput.value.toLowerCase()
    const searchRecipe = recettes.filter(recette => {
      const searchInName = recette.name.toLowerCase().includes(searchTerm)
      const searchInDescription = recette.description.toLowerCase().includes(searchTerm)
      const searchInIngredient = recette.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm))
      return (searchInName || searchInDescription || searchInIngredient)
    })
    if (searchRecipe.length === 0) {
      areaCard.innerHTML = ''
      const messageErreur = document.createElement('p')
      messageErreur.textContent = `« Aucune recette ne contient "${searchTerm}" vous pouvez chercher «tarte aux pommes », « poisson », etc.`
      messageErreur.className ='messageErreur'
      areaCard.appendChild(messageErreur)
    } else if (searchRecipe.length === 50){
      areaCard.innerHTML = ''
      //afficher toutes les cartes des recettes
      createAllCardRecette(recettes, areaCard)
      displayListTag(selectTag, recettes)
      nbTotalRecettes(recettes)
    }else {
      areaCard.innerHTML = ''
      createAllCardRecette(searchRecipe, areaCard)
      displayListTag(selectTag, searchRecipe)
      nbTotalRecettes(searchRecipe)
    }
    resultInput =  searchRecipe
    return searchRecipe
  }
  export { searchRecipes }
  export { resultInput }