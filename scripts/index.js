import { chooseTag } from "./utils/filterTags.js";
import { createAllCardRecette } from "./factories/createCardRecette.js";
import { recettes } from "./data/recettes.js";
import { displayListTag } from "./utils/displayListTag.js";
import { sortListTag } from "./utils/sortListTag.js";

const app = () => {

    const inputSearchProperties = document.querySelectorAll('.searchProperties')
    const selectTag = document.querySelectorAll('.accordion-item')
    const areaCard = document.querySelector('.carteRecette')

    /**************************** gestion des TAGS *******************************/
    
    // choisir un élément de la liste sans recours au filtre
    function chooseElementListTag() {
        const itemListeSelected = document.querySelectorAll('.choiceProperties')
        let selectionsTag
        itemListeSelected.forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault()
                chooseTag(el.id.substring(5), e.target.textContent)
            })
        })
    }
    chooseElementListTag()
    // faire le trie d'une liste en fonction de la saisie de l'input
    sortListTag(inputSearchProperties, recettes)
    /******************************************************************************/

    //modifier le nombre de recettes affichées
    function nbTotalRecttes(data){
        const nbRecettes = document.querySelector('.nbRecettes')
        nbRecettes.textContent = data.length +' '+ 'Recettes'
    }

    //filtrer les recettes en fonction de l'input principal et des tags
    const mainInput = document.querySelector('#search')
    mainInput.addEventListener('input', () => {
        if (mainInput.value.length >=3 || mainInput.value.length === 0) {
            searchRecipes()
          }
        })

    const recipeFoundWithInput = (searchRecipes());    
        
    const tagSelected  = Array.from(document.querySelectorAll('.tagSelected')).map((tag) => tag.textContent)
    console.log(tagSelected);


    //recherche des recettes correspondantes avec la saisie de l'input principale
    function searchRecipes() {
      const searchTerm = mainInput.value.toLowerCase()
      const searchRecipe = recettes.filter(recette => {
        const searchInName = recette.name.toLowerCase().includes(searchTerm)
        const searchInDescription = recette.description.toLowerCase().includes(searchTerm)
        const searchInIngredient = recette.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchTerm))
        // const searchInTagSeclected = recette.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes())
        return (searchInName || searchInDescription || searchInIngredient)
      })
      console.log(searchRecipe.length);
      if (searchRecipe.length === 0) {
        areaCard.innerHTML = ''
        const messageErreur = document.createElement('p')
        messageErreur.textContent = `« Aucune recette ne contient ${searchTerm} vous pouvez chercher «tarte aux pommes », « poisson », etc.`
        messageErreur.className ='messageErreur'
        areaCard.appendChild(messageErreur)
      } else if (searchRecipe.length === 50){
        areaCard.innerHTML = ''
        //afficher toutes les cartes des recettes
        init()
      }else {
        areaCard.innerHTML = ''
        createAllCardRecette(searchRecipe, areaCard)
        displayListTag(selectTag, searchRecipe)
        nbTotalRecttes(searchRecipe)
      }
      return searchRecipe
    }


    function init() {
        //afficher toutes les cartes des recettes
        createAllCardRecette(recettes, areaCard)
        //afficher la liste complète des éléments d'une propriété (=tag)
        displayListTag(selectTag, recettes)
        nbTotalRecttes(recettes)
    }
    init()
    
}
app()