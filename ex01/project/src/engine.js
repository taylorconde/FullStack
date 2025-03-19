import Spaceship from "./spaceship";

export class SpacechipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship;
        this.isOn = false;
    }

    async turnOn() {

        const percent = this.spaceship.percent();

        if (percent >= 30) {
            this.isOn = true;
            return (`The spaceship ${this.spaceship.name} is On. Actual charge: ${percent}%`);
        } else {
            throw new Error(`Was not possible turn on the spaceship ${this.spaceship.name}. The charge is less than 30%. Percent: ${percent}%`);
        }
    }

    async verifyShield() {

        let doubleShield = this.spaceship.shield * 2;
        // Step1: Shield stronger enouth?
        if (doubleShield < 100) {
            throw new Error(`Nave ${this.spaceship.name} - Shield máximo insuficiente: ${doubleShield}`);
        };
        // Reduce shield for 70% of the previous value
        doubleShield *= 0.7;
        // Step2: Shield out of range?
        if (doubleShield > 120) {
            throw new Error(`Escudo em supercarga: ${doubleShield}`)
        };
        return (doubleShield);
    };
};
