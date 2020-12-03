/**
 * Au chargement de la page, on souhaite faire croître le compteur d'arbres plantés toutes les quelques secondes
 * d'un nombre aléatoire d'arbres.
 */
function activerCompteur(){
    let compteur = document.getElementById('compteurNombreArbresPlantes');
    intervalle = Math.floor(Math.random() * 5) + 1;
    compteur.innerText = parseInt(compteur.innerText) + intervalle;
}


/*
                            GESTION DE LA CARTE
 */
// On créé une carte que l'on centre et zoome sur la région lyonnaise.
let mymap = L.map('carteInteractive').setView([45.75, 4.85], 9);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '<a href="https://www.openstreetmap.org/">OpenStreetMap</a> | ' +
        '<a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(mymap);

// Ajout des différents marqueurs. Commençons par récupérer les informations.
import data from "js/features.json"
console.log(data);
let marker = L.marker([45.75, 4.85]).addTo(mymap);
