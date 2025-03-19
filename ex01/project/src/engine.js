import Spaceship from "./spaceship";

export class SpacechipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship;
        this.isOn = false;
    }

    async turnOn() {

        // Cria uma Promise que resolve ou rejeita
        return new Promise((resolve, reject) => {
            const percent = this.spaceship.percent();

            if (percent >= 30) {
                this.isOn = true;
                resolve(`The spaceship ${this.spaceship.name} is On. Actual charge: ${percent}%`);
            } else {
                reject(`Was not possible turn on the spaceship ${this.spaceship.name}. The charge is less than 30%. Percent: ${percent}%`);
            }
        });
    }

    async verifyShield() {

        // Promise para verificar shield
        return new Promise((resolve, reject) => {

            let doubleShield = this.spaceship.shield * 2;
            // Step1: Shield stronger enouth?
            if (doubleShield < 100) {
                reject(`Nave ${this.spaceship.name} - Shield máximo insuficiente: ${doubleShield}`);
            };
            // Reduce shield for 70% of the previous value
            doubleShield *= 0.7;
            // Step2: Shield out of range?
            if (doubleShield > 120) {
                reject(`Escudo em supercarga: ${doubleShield}`)
            };
            resolve(doubleShield);
        });
    };
};
