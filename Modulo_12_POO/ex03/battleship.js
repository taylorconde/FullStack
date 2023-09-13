import { Spaceship } from "./spaceship.js";

export class Battleship extends Spaceship {
    constructor(_name, _crewQuantity, _weaponsQuantity) {
        super(_name, _crewQuantity);
        this._weaponsQuantity = _weaponsQuantity;
        this._type = "Battle";
    }
};