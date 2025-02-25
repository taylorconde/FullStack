/*
Estação com lista de naves engatadas
Cada nave possue 
    nome
    qtdd de tripulantes
    engatada ou nao?
    portas de entrada abertas?
MENU:
    1- REALIZAR O ENGATE
        cadastrar nave com 
            nome
            nmr de tripulantes
        apos o cadastro a nave PODE ser engatada
        quando engatada, suas portas sao abertas
    2- IMPRIMIR AS NAVES
    3- SAIR DO PROGRAMA

1 classe para criar as naves. com método para engatar a nave.
1 array para armazenar as espaçonaves
validar a opção de saída- somente se digitar '3'.
*/

//array com todas as naves
let spaceships = [];

class Spaceship {
    constructor(name, crew) {
        this.name = name;
        this.crew = crew;
        this.isEngaged = false;
        this.doorOpen = false;
    };

    engaged() {
        this.isEngaged = true;
        this.doorOpen = true;
    };

    spaceshipsAdd(newSpaceship) {
        spaceships.push(newSpaceship);
    };
};

function registeringSpaceship() {

    let name = prompt("Informe o nome da Nave: ");
    let quantityCrew = prompt("Informe a quantidade de tripulantes: ");
    let spaceship = new Spaceship(name, quantityCrew);
    spaceship.engaged();
    spaceship.spaceshipsAdd(spaceship);
    return spaceship;
};

function spaceshipsInformation() {

    let listSpaceships = spaceships.map((spaceship, index) => {
        return `${index + 1} - Spaceship  -  Name: ${spaceship.name}, Crew: ${spaceship.crew} -\n`
    }).join("");
    alert(listSpaceships);
};

let menu;
do {
    menu = prompt(`-STARSHIPS MENU-\nREALIZAR O ENGATE (1)\nIMPRIMIR AS NAVES (2)\nSAIR DO PROGRAMA (3)`);

    switch (menu) {
        case "1":
            registeringSpaceship();
            break;
        case "2":
            spaceshipsInformation();
            break;
        case "3":
            alert("Saindo do programa")
            break;
        default:
            alert("Digite apenas o número de cada opção, (1,2,3)")
    }
} while (menu !== "3")