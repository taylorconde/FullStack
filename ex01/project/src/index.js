import Spaceship from "./spaceship"
import { SpacechipEngine } from "./engine"
import "core-js"
import "regenerator-runtime"

/*
Sophia: 10Gj e carga de 5Gj
Amsterda: 14Gj e carga de 10Gj
Estrela-Ana: 20Gj e carga de 4Gj
30%

*/
const spaceships = [
    { name: "Sophia", maxCharge: "10", charge: "5", shield: "70", },
    { name: "Amsterdã", maxCharge: "14", charge: "10", shield: "40", },
    { name: "Estrela-Anã", maxCharge: "20", charge: "4", shield: "80", },
];

async function startSpaceship(spaceships) {

    for (const spaceship of spaceships) {
        try {

            const newSpaceship = new Spaceship(spaceship.name, spaceship.maxCharge, spaceship.charge, spaceship.shield);
            //teste de bateria
            const engine = new SpacechipEngine(newSpaceship)
            await engine.turnOn();
            //teste de escudo
            const shieldEngine = new SpacechipEngine(newSpaceship)
            const shieldValue = await shieldEngine.verifyShield()
            spaceship.shield = shieldValue;

            console.log(`Nave ${spaceship.name} liberada - Shield atual: ${spaceship.shield}%`);

        } catch (erro) {
            console.error(`Erro: ${erro}`);
        }

    };
}
startSpaceship(spaceships);