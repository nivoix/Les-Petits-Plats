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
    return [...new Set(array.map((el) => el.toLowerCase()))];
  } return array
}
export { createUniqueArray }


function extractDataRecipes(data) {

  let Ustensils = createUniqueArray(data, "ustensils", true)
  let Appareils = createUniqueArray(data, "appliance", true)
  let ingredients = createUniqueArray(data, "ingredients", false)
  let Ingredient = createUniqueArray(ingredients, "ingredient", true)

  return { Ustensils, Appareils, Ingredient }
}
export { extractDataRecipes }

/* 
export { Ustensils }
export { Appareils }
export { Ingredient } */