const { Planet } = require('./planet');
const { unidadeAstroToQuilometro } = require('./calcule');

const planetsAu = [
    { "Mercúrio": 0.39 },
    { "Vênus": 0.72 },
    { "Terra": 1 },
    { "Marte": 1.52 },
    { "Júpter": 52 },
    { "Saturno": 9.53 },
    { "Urano": 19.1 },
    { "Netuno": 30 },
];

let planetsAuKm = [];

planetsAu.forEach((planetObj) => {
    const [planetName, UnidadeAstronomica] = Object.entries(planetObj)[0];
    const distanceInKm = unidadeAstroToQuilometro(UnidadeAstronomica).toFixed(2);
    planetsAuKm.push(new Planet(planetName, distanceInKm));
});

const listParagraph = document.getElementById("list");

planetsAuKm.forEach((planet) => {
    listParagraph.append(` - Planeta: ${planet.name} - Distancia do sol em km: ${planet.distance}Km`);
    listParagraph.append(document.createElement("br"));
})