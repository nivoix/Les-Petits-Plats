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