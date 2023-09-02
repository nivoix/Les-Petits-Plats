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

let Ustensils = createUniqueArray(recettes, "ustensils", true)
let Appareils = createUniqueArray(recettes, "appliance", true)
let ingredients = createUniqueArray(recettes, "ingredients", false)
let Ingredient = createUniqueArray(ingredients, "ingredient", true)

function ToLowerCase(properties) {
  properties.forEach(element => {
    properties.push(element.toLowerCase())
  });
  return properties
}
ToLowerCase(Ustensils)
ToLowerCase(Appareils)
ToLowerCase(Ingredient)

export { Ustensils }
export { Appareils }
export { Ingredient }