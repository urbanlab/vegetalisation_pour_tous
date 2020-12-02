/**
 * Au chargement de la page, on souhaite faire croître le compteur d'arbres plantés toutes les quelques secondes
 * d'un nombre aléatoire d'arbres.
 */
function activerCompteur(){
    let compteur = document.getElementById('compteurNombreArbresPlantes');
    intervalle = Math.floor(Math.random() * 5) + 1;
    compteur.innerText = parseInt(compteur.innerText) + intervalle;
}

