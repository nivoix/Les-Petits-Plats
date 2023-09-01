import { recettes } from "../data/recettes.js";

// extraction des données nécessaires présentes dans les recettes
function createUniqueArray(array, value, arrayContainsObjects) {
  // concaténation de toutes les valeurs(ustensiles, appareils, ingrédients) dans un tableau
  array = [].concat(
    ...array.map((recipe) => {
      let result = recipe[value];
      return result;
    })
  );
  if (arrayContainsObjects) {
    //filtre les doublons avec Set()
    return [...new Set(array)];
  } return array
}

let ustensils = createUniqueArray(recettes, "ustensils", true)
let appareils = createUniqueArray(recettes, "appliance", true)
let ingredients = createUniqueArray(recettes, "ingredients", false)
let ingredient = createUniqueArray(ingredients, "ingredient", true)

export { ustensils }
export { appareils }
export { ingredient }