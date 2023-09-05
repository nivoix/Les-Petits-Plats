import { createListeProperties } from "./factories/createListes.js";
import { Ingredient } from "./data/extractDataRecipes.js";
import { Ustensils } from "./data/extractDataRecipes.js";
import { Appareils } from "./data/extractDataRecipes.js";
import { filterListeTag } from "./utils/filterTags.js";
import { chooseTag } from "./utils/filterTags.js";
import { createAllCardRecette } from "./factories/createCardRecette.js";
import { recettes } from "./data/recettes.js";

const app = () => {

    const listeIngredient = document.getElementById('listeIngredient')
    const listeUstensils = document.getElementById('listeUstensils')
    const listeAppareils = document.getElementById('listeAppareils')
    const inputSearchProperties = document.querySelectorAll('.searchProperties')
    const selectTag = document.querySelectorAll('.option')
    const areaCard = document.querySelector('.carteRecette')

    //afficher la liste complète des éléments d'une propriété (=tag)
    selectTag.forEach((tag) => {
        tag.addEventListener('click', ()  => {
            if(tag.id =='Ingredient' && [listeIngredient][0].children.length === 0){
                createListeProperties(Ingredient, listeIngredient)
                
            }else if (tag.id =='Ustensils' && [listeUstensils][0].children.length === 0){
                createListeProperties(Ustensils, listeUstensils)
                
            } else if (tag.id =='Appareils' && [listeAppareils][0].children.length === 0){
                createListeProperties(Appareils, listeAppareils)
                
            }
        })
    })

    // choisir un élément de la liste sans recours au filtre
    const itemListeSelected = document.querySelectorAll('.choiceProperties')
    itemListeSelected.forEach((el) => {
        el.addEventListener('click', (e) => {
            chooseTag(el.id.substring(5), e.target.textContent)
        })
    })

    // faire le trie d'une liste en fonction de la saisie de l'input
    inputSearchProperties.forEach((inputSearch) => {
        inputSearch.addEventListener("click", (e) => {
            if(inputSearch.id.includes('Ingredient')){
                console.log("je suis ingredient");
                filterListeTag(Ingredient, listeIngredient, "Ingredient")
            }else if (inputSearch.id.includes('Ustensils')){
                console.log("je suis Ustensils");
                filterListeTag(Ustensils, listeUstensils, "Ustensils")
            } else if (inputSearch.id.includes('Appareils')){
                console.log("je suis Appareils");
                filterListeTag(Appareils, listeAppareils, "Appareils")
            }
        })
    })
    const nbRecettes = document.querySelector('.nbRecettes')
    nbRecettes.textContent = recettes.length +' '+ 'Recettes'
    console.log(recettes.length);
    //afficher toutes les cartes des recettes
    createAllCardRecette(recettes, areaCard)
}
app()