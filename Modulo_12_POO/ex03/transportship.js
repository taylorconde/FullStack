import { Spaceship } from "./spaceship.js";

export class TransportShip extends Spaceship {
    constructor(_name, _crewQuantity, _placesQuantity) {
        super(_name, _crewQuantity);
        this._placesQuantity = _placesQuantity;
        this._type = "Transporte";
    }
}