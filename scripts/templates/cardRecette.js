
function cardRecette(recettes) {
  const {id, image, name, ingredients, time, description} = recettes

  function createCardRecette(){
    const card = document.createElement('article')
    card.id = id
    card.className = "card cardRecette"
    const imageRecette = document .createElement('img')
    imageRecette.className = "card-img-top imgRecette"
    imageRecette.setAttribute('src', `./assets/images/${image}`)
    imageRecette.setAttribute('alt', 'photo de présentaton de la recette')
    const infoRecette = document.createElement('div')
    infoRecette.className = 'card-body infoRecette'
    const nameRecette = document.createElement('h2')
    nameRecette.className = 'card-title nameRecette'
    nameRecette.textContent = name
    const titreDetail = document.createElement('h3')
    titreDetail.className = 'card-subtitle mb-2 text-body-secondary titreInfo'
    titreDetail.id = "titreInfo"
    titreDetail.textContent = 'RECETTE'
    const infoDetail = document.createElement('p')
    infoDetail.className = 'card-text infoDetail'
    infoDetail.textContent = description
    const titreContenu = document.createElement('h3')
    titreContenu.className = 'card-subtitle mb-2 text-body-secondary titreInfo'
    titreContenu.id = "titreInfo"
    titreContenu.textContent = 'INGRÉDIENTS'
    const contenuDetail = document.createElement('div')
    contenuDetail.className = 'row row-cols-1 row-cols-md-2 g-4 contenuDetail'
    for(let el of ingredients) {
      const contentAliment = document.createElement('div')
      contentAliment.className ='card alimentQty'
      const aliment = document.createElement('h4')
      aliment.className = 'card-title aliment'
      aliment.textContent = el.ingredient
      const qty =document.createElement('span')
      qty.className = 'card-text quantite'
      qty.textContent = el.unit ? el.quantity +' '+ el.unit : el.quantity
      contenuDetail.appendChild(contentAliment)
      contentAliment.appendChild(aliment)
      contentAliment.appendChild(qty)
    }
    const duree = document.createElement('span')
    duree.className = 'duree'
    duree.textContent = time + 'min'

    card.appendChild(imageRecette)
    card.appendChild(infoRecette)
    card.appendChild(duree)
    infoRecette.appendChild(nameRecette)
    infoRecette.appendChild(titreDetail)
    infoRecette.appendChild(infoDetail)
    infoRecette.appendChild(titreContenu)
    infoRecette.appendChild(contenuDetail)
    
  
    return card 
  }
  return { createCardRecette }
}
export { cardRecette }