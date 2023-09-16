import { createAllCardRecette } from "../factories/createCardRecette.js"
import { displayListTag } from "./displayListTag.js"
import { nbTotalRecettes } from "./countNbTotalrecettes.js"
import { recettes } from "../data/recettes.js"


const areaInput = document.querySelector('.container-fluid')
const selectTag = document.querySelectorAll('.accordion-item')
const areaCard = document.querySelector('.carteRecette')
let resultInput
const msgInfo = document.createElement('p')
msgInfo.className = "msgInfo"
areaInput.appendChild(msgInfo)
//filtrer les recettes en fonction de l'input principal et des tags
const mainInput = document.querySelector('#search')
mainInput.addEventListener('input', () => {
  if (mainInput.value.length >=3 || mainInput.value.length === 0) {
    console.time('filter')
    msgInfo.textContent = ""
    searchRecipes()
  } else if(mainInput.value.length > 0) {
    msgInfo.textContent = "Vous devez saisir au minimum 3 caractères"
  }
})
  //recherche des recettes correspondantes à la saisie de l'input principale
  function searchRecipes() {
    const searchTerm = mainInput.value.toLowerCase();
    const foundRecipes = searchRecipesFor(searchTerm);
    if (foundRecipes.length === 0) {
      areaCard.innerHTML = '';
      const messageErreur = document.createElement('p');
      messageErreur.textContent = `« Aucune recette ne contient "${searchTerm}" vous pouvez chercher «tarte aux pommes », « poisson », etc.`;
      messageErreur.className ='messageErreur';
      areaCard.appendChild(messageErreur);
      nbTotalRecettes(foundRecipes);
    } else if (foundRecipes.length === 50){
      areaCard.innerHTML = '';
      //afficher toutes les cartes des recettes
      createAllCardRecette(recettes, areaCard);
      displayListTag(selectTag, recettes);
      nbTotalRecettes(recettes);
    }else {
      areaCard.innerHTML = '';
      createAllCardRecette(foundRecipes, areaCard);
      console.timeEnd('for');
      displayListTag(selectTag, foundRecipes);
      nbTotalRecettes(foundRecipes);
    }
    resultInput =  foundRecipes;
    return foundRecipes;
  }
  export { searchRecipes };
  export { resultInput };

  function searchRecipesFor(searchTerm) {
    
    let tabRecipe = [];

    for(let i = 0 ; i <recettes.length ; i ++) {
      let recette = recettes[i];

      if (searchTermFoundInRecette(recette, searchTerm)) {
        tabRecipe.push(recette);
      }
    }
    
    return tabRecipe;
  }
  
  function searchTermFoundInRecette(recette, searchTerm) {
    const foundInTitle = recette.name.toLowerCase().includes(searchTerm);
    const foundInDescription = recette.description.toLowerCase().includes(searchTerm);
    const foundInIngredient = recette.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm));
    
    return foundInTitle || foundInDescription || foundInIngredient;
  }

