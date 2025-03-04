import Spaceship from "./Spaceship.js";

export class SpaceshipOperations {

    static setWeapons(spaceship, weapons) {
        if (spaceship.type === 'batalha') {
            spaceship.weapons = weapons;
        }
    }

    static setSeats(spaceship, seats) {
        if (spaceship.type === 'transporte') {
            spaceship.seats = seats;
        }
    }

    static accelerate(spaceship, increment) {
        spaceship.velocity += increment * 0.83;
    }

    static resetVelocity(spaceship) {
        spaceship.velocity = 0;
    }

    static printSpaceship(spaceship) {
        console.log(`Nome: ${spaceship.name}, Tipo: ${spaceship.type}, Velocidade: ${spaceship.velocity}.`);
    }
}