export default class Spaceship {
    constructor(name, type, crew) {
        this.name = name;
        this.type = type;
        this.crew = crew;
        this.weapons = type === "batalha" ? 0 : null;
        this.seats = type === "transporte" ? 0 : null;
        this.velocity = 0;
    }
}