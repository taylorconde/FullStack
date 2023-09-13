export class Spaceship {
    static deceleration(){
        return 0.17;
    }

    constructor(name, crewQuantity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.currentSpeed = 0;
    }

    speedUp(acceleration) {
        this.currentSpeed += acceleration * (1 - Spaceship.deceleration());
    }
}