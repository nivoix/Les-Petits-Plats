import { createListeProperties } from "../factories/createListes.js";
import { extractDataRecipes } from "../data/extractDataRecipes.js";


function displayListTag (selectTag, property) {
  const listeIngredient = document.getElementById('listeIngredient')
  const listeUstensils = document.getElementById('listeUstensils')
  const listeAppareils = document.getElementById('listeAppareils')
  let data = extractDataRecipes(property)

  //afficher la liste complète des éléments d'une propriété (=tag)
  selectTag.forEach((tag) => {
		tag.addEventListener('click', ()  => {
			if(tag.id =='Ingredient'){
					listeIngredient.innerHTML =''
					createListeProperties(data.Ingredient, listeIngredient)
					closeListTag('collapseOne')
				}else if (tag.id =='Ustensils'){
					listeUstensils.innerHTML =''
					createListeProperties(data.Ustensils, listeUstensils)
					closeListTag('collapseThree')
				} else if (tag.id =='Appareils'){
					listeAppareils.innerHTML =''
					createListeProperties(data.Appareils, listeAppareils)
					closeListTag('collapseTwo')
			}
		})
  })	
}
export { displayListTag }

function closeListTag(collapse) {
	const buttoncollapse = document.querySelector(`.${collapse}`)
	const listecollapse = document.querySelector(`#${collapse}`)
	document.querySelector('.optionsFiltre').addEventListener('mouseleave', () => {
		listecollapse.classList.contains("show") ? listecollapse.classList.remove("show") : ''
		buttoncollapse.classList.contains("collapsed") ? '' : buttoncollapse.classList.add("collapsed") 
	})
}