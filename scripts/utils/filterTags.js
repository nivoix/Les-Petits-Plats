import { createListeProperties } from "../factories/createListes.js";


function filterListeTag(property, areaListe, nameProperty) {
  createListeProperties(property, areaListe)
  let inputSearch = document.getElementById(`search${nameProperty}`)
  inputSearch.addEventListener("keyup", (e) => {
      const liste = document.getElementById(`liste${nameProperty}`)
      liste.innerHTML = "";
      console.log(inputSearch.id);
      const result = property.filter((lettres) => lettres.includes(inputSearch.value))
      console.log(result);
      createListeProperties(result, areaListe)
    })
  
}
export { filterListeTag }