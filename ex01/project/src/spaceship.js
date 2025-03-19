export default class Spaceship {
    constructor(name, maxCharge, charge, shield) {
        this.name = name;
        this.maxCharge = maxCharge;
        this.charge = charge;
        this.shield = shield;
    };

    percent() {
        return (this.charge * 100) / this.maxCharge;
    };
};