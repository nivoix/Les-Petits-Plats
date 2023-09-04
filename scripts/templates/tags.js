//création des listes pour les Tags
function liste(value) {
  
  function createListe(){
    const itemValue = document.createElement('li')
    const linkValue = document.createElement('a')
    itemValue.className = "valueListe"
    linkValue.textContent = value
    linkValue.setAttribute('href', '#')
    linkValue.style.color = 'black'
    itemValue.appendChild(linkValue)
    return itemValue
  }
  return {createListe}
}
export { liste }

function createSelectTagCard(value) {

  function createCardTag() {
    const card = document.createElement('li')
    const close = document.createElement('span')
    card.classList.add("tagSelected")
    card.textContent = value
    card.id = value
    card.style.backgroundColor = '#FFD15B'
    card.style.color = 'black'
    close.className ='close'
    card.appendChild(close)
    return card
  }
  return {createCardTag}
}
export { createSelectTagCard }