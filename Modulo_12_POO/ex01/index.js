class Spaceship {
    constructor(name, tripulationNumber) {
        this.name = name;
        this.tripulationNumber = tripulationNumber;
        this.hitched = false;
        this.dors = false;
    }
    engate() {
        this.hitched = true;
        this.dors = true;
    }
};
//lista de naves
let spaceships = [];

// menu 
let menuOption;
let otherSpaceship;

// functions
function printSpaceships(spaceships) {
    let spaceshipsList = "";
    spaceships.forEach((spaceship, index) => {
        spaceshipsList += `${(index + 1)} - ${spaceship.name} (${spaceship.tripulationNumber} tripulantes)\n`
    });
    alert(spaceshipsList);
}


do {

    menuOption = prompt("1-Realizar engate\n2-Imprimir naves\n3-Sair do programa");

    switch(menuOption) {
        case "1":
            let newName = prompt("Informe o nome da nave");
            let numTripulantes = prompt("Informe o numero de tripulantes");
            let otherSpaceship = new Spaceship(newName, numTripulantes);
            otherSpaceship.engate();
            spaceships.push(otherSpaceship);
            break;
        case "2":
            printSpaceships(spaceships);
            break;
        case "3":
            alert("Encerrando o sistema...");
    }

} while (menuOption != "3");