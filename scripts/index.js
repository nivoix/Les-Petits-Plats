import { recettes } from "./data/recettes.js";
import { createListeProperties } from "./factories/createListes.js";
import { ingredient } from "./data/extractDataRecipes.js";
import { ustensils } from "./data/extractDataRecipes.js";
import { appareils } from "./data/extractDataRecipes.js";

const app = () => {
    console.log(recettes);
    const listeIngredients = document.getElementById('listeIngredients')
    const inputIngredients = document.getElementById('ingredients')
    createListeProperties(ingredient, listeIngredients, inputIngredients)
    const listeUstensils = document.getElementById('listeUstensils')
    const inputUstensils = document.getElementById('ustensils')
    createListeProperties(ustensils, listeUstensils, inputUstensils)
    const listeAppareils = document.getElementById('listeAppareils')
    const inputAppareils = document.getElementById('appareils')
    createListeProperties(appareils, listeAppareils, inputAppareils)
}

app()