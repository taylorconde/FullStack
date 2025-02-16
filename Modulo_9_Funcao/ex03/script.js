//LISTA DE NAVES
const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
];

console.log("Tipo de hitchedSpaceships:", typeof hitchedSpaceships);
console.log("É um array?", Array.isArray(hitchedSpaceships));
console.log("Estrutura dos dados:", hitchedSpaceships);

//Método para extrair arrays das naves com número de tripulantes maior que 9. Index "1".
let moreThan9 = hitchedSpaceships.filter(spaceship => spaceship[1] > 9).map(spaceship => spaceship[0]);

//Coletando o nome das naves com mais de 9 tripulantes.
let tripulation = moreThan9.map(subArray => subArray).join(", ");

//Informar o numero da plataforma em que está a primeira nave que ainda está com engate pendente, index "2".
let indexDoEngatePendente = (hitchedSpaceships.findIndex(engate => !engate[2]) + 1);

//Nome de todas as naves em caixa alta
// let allSpaceshipsName = hitchedSpaceships.map(spaceshipName => spaceshipName[0]).join(`- Plataform ${},\n`).toUpperCase();
let allSpaceshipsName = hitchedSpaceships.map(function (spaceshipName, index) {
    let namesAndIndex = `${index + 1} - ${spaceshipName[0]} `;
    return namesAndIndex;
}).join(`,\n`).toUpperCase();


alert(`Informações da Estação:\n` +
    `Todas as naves no presente momento:\n` +
    `${allSpaceshipsName}\n` +
    `Naves com mais de 9 tripulantes:\n` +
    `${tripulation}\n` +
    `Próxima plataforma com engate pendente: ${indexDoEngatePendente}`
)