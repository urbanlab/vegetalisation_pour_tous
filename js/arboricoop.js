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
let donnees = {"type": "FeatureCollection", "features": [{"id": "0f6829a4-8259-476e-bcbc-59a2ef2ab418", "properties": {"name": "Sanofi", "level": "2", "carbon": "3200", "nb_arbres": "12"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.83049598, 45.7349761]}}, {"id": "2724a9dd-5805-41ad-acfa-64f5eed964d9", "properties": {"name": "Lyon M\u00e9tropole Habitat", "type": "bailleur", "level": "1", "carbon": "12900", "nb_arbres": "140"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.86579243, 45.76150104]}}, {"id": "87cf0a17-ac38-4ea4-9526-937c0a0ac39f", "properties": {"name": "Sanofi", "type": "entreprise", "level": "3", "carbon": "340", "nb_arbres": "10"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.83049598, 45.7349761]}}, {"id": "cbf64485-886b-40b1-a39e-813dad4fe1e9", "properties": {"name": "Veolia", "type": "entreprise", "level": "1", "carbon": "8600", "nb_arbres": "45"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.88331724, 45.75099591]}}, {"id": "f806173b-6cd8-480b-9d1b-4e5d725810de", "properties": {"name": "Opac du Rh\u00f4ne", "type": "bailleur", "level": "3", "carbon": "40", "nb_arbres": "2"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.8427033, 45.75051784]}}, {"id": "4c16bb45-5229-4776-b73c-42b300ad40d0", "properties": {"name": "Alstom", "type": "entreprise", "level": "2", "carbon": "4200", "nb_arbres": "24"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.89637638, 45.69710266]}}, {"id": "3ac83a7f-e694-4479-93d9-4be9e6d64fd5", "properties": {"name": "Est M\u00e9tropole Habitat", "type": "bailleur", "level": "1", "carbon": "3400", "nb_arbres": "44"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.79240238, 45.71554049]}}, {"id": "703d31a3-c30f-4d32-81b5-ba04e439e41f", "properties": {"name": "Groupe SEB", "type": "entreprise", "level": "1", "carbon": "8500", "nb_arbres": "76"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.77963752, 45.77376865]}}, {"id": "d30232af-b1e8-4807-9c53-6f95c130c148", "properties": {"name": "Renault Trucks", "type": "entreprise", "level": "2", "carbon": "870", "nb_arbres": "9"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.95069876, 45.68923978]}}, {"id": "ceac32b2-6245-494a-b267-c5defd219d5c", "properties": {"name": "Keolis", "type": "entreprise", "level": "3", "carbon": "40", "nb_arbres": "1"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.85811116, 45.75584897]}}, {"id": "1bb6b530-dc3b-49c9-8c4a-6ddaf8a3103b", "properties": {"name": "SACVL", "type": "bailleur", "level": "1", "carbon": "3900", "nb_arbres": "80"}, "type": "Feature", "geometry": {"type": "Point", "coordinates": [4.77594231, 45.74487246]}}]};

function forgerTextePopUp(param) {
    let textePopUp = 'toto';
    console.log(param);
    return textePopUp;
}

// Parcourons les informations et affichons un marqueur pour chaque.
for (let donnee in donnees.features){
    const pointCourant = {
            "latitude":donnees.features[donnee].geometry.coordinates[1],
            "longitude":donnees.features[donnee].geometry.coordinates[0],
            "nom":donnees.features[donnee].properties.name,
            "niveau":donnees.features[donnee].properties.level,
            "nbArbres":donnees.features[donnee].properties.nb_arbres,
            "carbone":donnees.features[donnee].properties.carbon,
    }
    L.marker([pointCourant.latitude, pointCourant.longitude]).bindPopup(forgerTextePopUp({pointCourant})).addTo(mymap);
}
let marker =

/**
   * La fonction génère le code HTML qui sera injecté dans le pop-up correspondant à un marqueur
   * @param point Les données du point.
   * @returns {string} Du code HTML représentant les infos du point et qui sera affiché dane pop-up.
   */
function forgerTextePopUp(point)
{
    let textePopUp = 'toto';
    console.log(point);
    return textePopUp;
}
