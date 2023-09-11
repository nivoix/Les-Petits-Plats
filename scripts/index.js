import { createCardTagSelected } from "./factories/createCardTagSelected.js";
import { createAllCardRecette } from "./factories/createCardRecette.js";
import { recettes } from "./data/recettes.js";
import { displayListTag } from "./utils/displayListTag.js";
import { sortListTag } from "./utils/sortListTag.js";
import { closeTag } from "./utils/filterTags.js";

const app = () => {

  const inputSearchProperties = document.querySelectorAll('.searchProperties')
  const selectTag = document.querySelectorAll('.accordion-item')
  const areaCard = document.querySelector('.carteRecette')

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
      init()
    }else {
      areaCard.innerHTML = ''
      createAllCardRecette(searchRecipe, areaCard)
      displayListTag(selectTag, searchRecipe)
      nbTotalRecttes(searchRecipe)
    }
    return searchRecipe
  }

    /**************************** gestion des TAGS *******************************/
    
  // e.target.texContent = nom du produit sélectionné
  // el.id.substring(5) = listeAppareils => on supprime 'liste' et on garde 'Appareils'

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
        ///////////////////////////////////////
        
        const aeraCardTagSelected = document.getElementById(`listeTagSelected${el.id.substring(5)}`)
        //creation du tag de l'item selectionné
        createCardTagSelected(e.target.textContent, aeraCardTagSelected, el.id.substring(5))
        const tag = document.getElementById(`${e.target.textContent}`)
        closeTag(tag, e.target.textContent)
        // searchRecipes()
        finalFilter(el.id.substring(5), e.target.textContent, data)
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
  
  let result 
  // filtrer la liste de l'input avec les Tags
  function finalFilter(nameProperty, value, inputRecipes) {
    const searchFinalRecipe = inputRecipes.filter(inputRecipe => {
      if(nameProperty == 'Ingredient'){
        const searchInTagIngredientSeclected = inputRecipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(value))
        return searchInTagIngredientSeclected
      } else if(nameProperty == 'Appareils') {
        const searchInTagAppareilsSelected = inputRecipe.appliance.toLowerCase().includes(value)
        return  searchInTagAppareilsSelected
      } else if(nameProperty == 'Ustensils') {
        const searchInTagUstensilsSelected = inputRecipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(value))
        return searchInTagUstensilsSelected
      }
      return (searchInTagIngredientSeclected && searchInTagAppareilsSelected && searchInTagUstensilsSelected)
    })
    console.log(searchFinalRecipe);
    if(searchFinalRecipe.length >=0 && searchFinalRecipe.length < 50) {
      areaCard.innerHTML = ''
      createAllCardRecette(searchFinalRecipe, areaCard)
      displayListTag(selectTag, searchFinalRecipe)
      nbTotalRecttes(searchFinalRecipe)
    } else if (searchFinalRecipe == 0) {
        areaCard.innerHTML = ''
        const messageErreur = document.createElement('p')
        messageErreur.textContent = `« Aucune recette ne contient "${value}" vous pouvez chercher «tarte aux pommes », « poisson », etc.`
        messageErreur.className ='messageErreur'
        areaCard.appendChild(messageErreur)
        displayListTag(selectTag, recettes)
    }else 
      init()
      result = searchFinalRecipe
    // return { searchFinalRecipe }
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