import Spaceship from './spaceship/Spaceship.js';
import { SpaceshipOperations } from './spaceship/SpaceshipOperations.js'
import { validateCrew, validateName } from './utils/validators.js';

export function showMenu() {
    let menu;
    let spaceships = [];
    let currentSpaceshipIndex = null;

    do {
        menu = prompt(`- STARSHIPS MENU -\n1. Dados da Nave\n2. Operações da Nave\n3. Sair`);
        switch (menu) {
            case '1':
                let newSpaceship = createSpaceship();
                spaceships.push(newSpaceship);
                currentSpaceshipIndex = spaceships.length - 1;
                break;
            case '2':
                if (currentSpaceshipIndex !== null) {
                    operateSpaceship(spaceships[currentSpaceshipIndex]);
                } else {
                    console.log('Crie uma nave primeiro!');
                }
                break;
            case '3':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida.');
                break;
        }
    } while (menu !== '3');
}

function createSpaceship() {

    let name = prompt('Informe o nome da nave: ');
    while (!validateName(name)) {
        console.log('Nome inválido, tente novamente.');
        name = prompt('Informe o nome da nave: ');
    }

    let crew = parseInt(prompt('Informe o número de tripulantes: '));
    while (!validateCrew(crew)) {
        console.log('Quantidade de tripulantes inválida, tente novamente.');
        crew = prompt('Informe o número de tripulantes: ');
    }

    let type = prompt('Tipo da nave (batalha/transporte): ').toLocaleLowerCase();
    const spaceship = new Spaceship(name, crew, type);

    if (type === 'batalha') {
        const weapons = parseInt(prompt('Número de armas: '));
        SpaceshipOperations.setWeapons(spaceship, weapons);
    } else if (type === 'transporte') {
        const seats = parseInt(prompt('Número de lugares: '));
        SpaceshipOperations.setSeats(spaceship, seats);
    }

    return spaceship;
}

function operateSpaceship(spaceship) {
    let operation;
    do {
        operation = prompt(`- OPERAÇÕES DA NAVE -\n1. Acelerar Nave\n2. Trocar de Nave\n3. Imprimir e Sair`);
        switch (operation) {
            case '1':
                let increment = parseFloat(prompt(`Quanto devemos acelerar? `));
                SpaceshipOperations.accelerate(spaceship, increment);
                break;
            case '2':
                createSpaceship();
                break;
            case '3':
                SpaceshipOperations.printSpaceship(spaceship);
                break;
            default:
                console.log('Opção inválida.');
        }
    } while (operation !== '3');
}