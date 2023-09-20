import { createAllCardRecette } from "../factories/createCardRecette.js"
import { displayListTag } from "./displayListTag.js"
import { nbTotalRecettes } from "./countNbTotalrecettes.js"
import { recettes } from "../data/recettes.js"

const ligneTag = document.querySelector('.ligneTags')
const areaInput = document.querySelector('.container-fluid')
const selectTag = document.querySelectorAll('.accordion-item')
const areaCard = document.querySelector('.carteRecette')
const regexp = new RegExp('^[a-zA-Z _-]+$')
let resultInput
const msgInfo = document.createElement('p')
msgInfo.className = "msgInfo"
areaInput.appendChild(msgInfo)
const messageErreur = document.createElement('p');
const main = document .querySelector('main')
messageErreur.className ='messageErreur';
messageErreur.style.display ='none'
main.insertBefore(messageErreur, ligneTag)


//filtrer les recettes en fonction de l'input principal et des tags
const mainInput = document.querySelector('#search')
mainInput.addEventListener('input', () => {
  if(regexp.test(mainInput.value)) {
    if (mainInput.value.length >=3 || mainInput.value.length === 0) {
      console.time('filter')
      msgInfo.textContent = ""
      messageErreur.style.display = 'none'
      searchRecipes()
    } else if(mainInput.value.length > 0 ) {
      msgInfo.textContent = "Vous devez saisir au minimum 3 caractères"
      messageErreur.style.display = 'none'
    }
  } else if(mainInput.value.length === 0 ) {
    msgInfo.textContent = ""
    messageErreur.style.display = 'none'
    createAllCardRecette(recettes, areaCard);
    nbTotalRecettes(recettes);
  }else msgInfo.textContent = "Les caractères spéciaux et les chiffres ne sont pas autorisés"
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
      messageErreur.style.display = 'block'
      messageErreur.textContent = `« Aucune recette ne contient "${searchTerm}" vous pouvez chercher «tarte aux pommes », « poisson », etc.`;
      nbTotalRecettes(searchRecipe);
    } else if (searchRecipe.length === 50){
      areaCard.innerHTML = ''
      //afficher toutes les cartes des recettes
      createAllCardRecette(recettes, areaCard)
      displayListTag(selectTag, recettes)
      nbTotalRecettes(recettes)
    }else {
      areaCard.innerHTML = ''
      createAllCardRecette(searchRecipe, areaCard)
      console.timeEnd('filter');
      displayListTag(selectTag, searchRecipe)
      nbTotalRecettes(searchRecipe)
    }
    resultInput =  searchRecipe
    return searchRecipe
  }
  export { searchRecipes }
  export { resultInput }