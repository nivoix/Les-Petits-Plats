//modifier le nombre de recettes affichées
function nbTotalRecettes(data){
  const nbRecettes = document.querySelector('.nbRecettes')
  nbRecettes.textContent = data.length +' '+ 'Recettes'
}
export { nbTotalRecettes }