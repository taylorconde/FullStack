//classe principal. Nave 

export class Spaceship {
    static desaceleration() {
        return 0.17;
    }
    constructor(_name, _crewQuantity) {
        this._name = _name;
        this._crewQuantity = _crewQuantity;
        this.velocity = 0;
    }
    set acceleration(_acelerar) {
        this.velocity += (_acelerar * (1 - Spaceship.desaceleration()));
    }
}

//classe extendida para naves do tipo batalha
export class BattleSpaceship extends Spaceship {
    constructor(_name, _crewQuantity, _weaponsQuantity) {
        super(_name, _crewQuantity);
        this._type = "Batalha";
        this._weaponsQuantity = _weaponsQuantity;
    }
}

//Classe extendida para naves do tipo transporte
export class TransportSpaceship extends Spaceship {
    constructor(_name, _crewQuantity, _seatsQuantity) {
        super(_name, _crewQuantity);
        this._type = "Transporte";
        this._seatsQuantity = _seatsQuantity;
    }
}

//Lista que arquivará todas as naves
export let spaceshipsList = [];

//menu de coleta de dados  principais (nome , qtd tripulantes, tipo de nave)
// inclusão de naves na lista
export function menu() {
    let spaceshipName = prompt("Informe o nome da nave: ");
    let spaceshipQuantityCrew = parseInt(prompt("Informe a quantidade de tripulantes: "));
    let spaceshipType = prompt("Informe o tipo da nave:\n1) Batalha\n2) Transporte").toLowerCase();

    switch (spaceshipType) {
        case "1":
            let weaponsQuantity = parseInt(prompt("Informe quantas armas a nave tem disponível: "));
            spaceshipsList.push(new BattleSpaceship(spaceshipName, spaceshipQuantityCrew, weaponsQuantity));
            break;
        case "2":
            let seatsQuantity = parseInt(prompt("Informe o número de lugares que a nave comporta: "));
            spaceshipsList.push(new TransportSpaceship(spaceshipName, spaceshipQuantityCrew, seatsQuantity));
            break;
        default:
            alert("Tipo de nave não identificado no sistema!!!");
    }
}

