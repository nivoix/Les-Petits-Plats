import { createListeProperties } from "./factories/createListes.js";
import { Ingredient } from "./data/extractDataRecipes.js";
import { Ustensils } from "./data/extractDataRecipes.js";
import { Appareils } from "./data/extractDataRecipes.js";
import { filterListeTag } from "./utils/filterTags.js";

const app = () => {

    const listeIngredient = document.getElementById('listeIngredient')
    const listeUstensils = document.getElementById('listeUstensils')
    const listeAppareils = document.getElementById('listeAppareils')
    const inputSearchProperties = document.querySelectorAll('.searchProperties')
    const selectTag = document.querySelectorAll('.option')

    selectTag.forEach((tag) => {
        tag.addEventListener('click', ()  => {
            if(tag.id =='Ingredient'){
                console.log("je suis ingredient");
                createListeProperties(Ingredient, listeIngredient, "Ingredient")
            }else if (tag.id =='Ustensils'){
                console.log("je suis Ustensils");
                createListeProperties(Ustensils, listeUstensils, "Ustensils")
            } else if (tag.id =='Appareils'){
                console.log("je suis Appareils");
                createListeProperties(Appareils, listeAppareils, "Appareils")
            }
        })
    })

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
    
}
app()