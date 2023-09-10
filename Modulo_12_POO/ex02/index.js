import {Spaceship, BattleSpaceship, TransportSpaceship, spaceshipsList, menu} from './utils.js';


//-------------------------------------------------

let optionMenu;
//-------------------------------------------------
menu();
do {

    optionMenu = prompt("Escolha uma das opções:\n1 - Acelerar a nave\n2 - Trocar a Nave\n3 - Imprimir e sair").toLowerCase();

    switch (optionMenu) {
        case "1":
            // Mostra os índices e nomes das naves disponíveis
            let availableShips = "Naves Disponíveis:\n";
            for (let i = 0; i < spaceshipsList.length; i++) {
                availableShips += `${i+1}: ${spaceshipsList[i]._name}\n`;
            }
            alert(availableShips);
            // Identifique qual nave o usuário deseja acelerar (por exemplo, com um índice)
            let indexToSpeedUp = parseInt(prompt("Qual nave deseja acelerar? (Informe o índice da nave)"))-1;

            // Verifique se o índice é válido
            if (indexToSpeedUp >= 0 && indexToSpeedUp < spaceshipsList.length) {
                let speedUp = parseFloat(prompt("Quanto deseja acelerar?"));
                spaceshipsList[indexToSpeedUp].acceleration = speedUp;

                alert(`Nave acelerada! Nova velocidade: ${spaceshipsList[indexToSpeedUp].velocity.toFixed(2)}Km/s`);
            } else {
                alert("Índice de nave inválido. Por favor, escolha um índice válido.");
            }
            break;
        case "2":
            //chamar o menu para cadastro de nova nave
            menu();
            break;
        case "3":
            //exibir naves e sair 
            let spaceshipNumber = 1;
            for (const spaceship of spaceshipsList) {
                if (spaceship._type == "Batalha") {
                    alert(`Nave Nº${spaceshipNumber}\nNome: ${spaceship._name}\nTripulantes: ${spaceship._crewQuantity}\nVelocidade: ${spaceship.velocity}km/s\nTipo: ${spaceship._type}\nArmas: ${spaceship._weaponsQuantity}`);
                }else {
                    alert(`Nave Nº${spaceshipNumber}\nNome: ${spaceship._name}\nTripulantes: ${spaceship._crewQuantity}\nVelocidade: ${spaceship.velocity}km/s\nTipo: ${spaceship._type}\nLugares: ${spaceship._seatsQuantity}`);
                }
                spaceshipNumber++;
            }

    }
} while (optionMenu !== "3");

