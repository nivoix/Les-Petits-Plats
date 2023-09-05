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
    //afficher la liste complète des éléments d'une propriété
    selectTag.forEach((tag) => {
        tag.addEventListener('click', ()  => {
            if(tag.id =='Ingredient'){
                createListeProperties(Ingredient, listeIngredient)
                chooseTag("Ingredient")
            }else if (tag.id =='Ustensils'){
                createListeProperties(Ustensils, listeUstensils)
                chooseTag("Ustensils")
            } else if (tag.id =='Appareils'){
                createListeProperties(Appareils, listeAppareils)
                chooseTag("Appareils")
            }
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
    //afficher les cartes des recettes
    createAllCardRecette(recettes, areaCard)
}
app()