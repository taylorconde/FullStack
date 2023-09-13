import { Spaceship } from "./spaceship.js";
import { Battleship } from "./battleship.js";
import { TransportShip } from "./transportship.js";
import { battleshipsList } from "./list.js";

export class Menu {
    constructor(){
        this._spaceship = null;
    }
//START
    iniciar() {
        this.spaceshipData();
        let _chosenOption;
        
        do {
            _chosenOption = this.menuPrincipal();
            this.nemuPrincipalFuncao(_chosenOption);
        } while (_chosenOption != "3");

        this.printExit();
    }

//PROMPT INICIAL
    spaceshipData() {
        let _spaceshipName = prompt ("Informe o nome da nave: ");
        let _spaceshipCrew = prompt("Informe a quantitade de tripulantes: ");
        let _spaceshipKind = this.spaceshipType();
        if(_spaceshipKind == "1") {
            let _weaponsQuantity = prompt ("Informe quantas armas há na nave: ")
            battleshipsList.push(new Battleship(_spaceshipName, _spaceshipCrew, _weaponsQuantity ));
        } else {
            let _sitsQuantity = prompt ("Informe quantas lugares há na nave: ")
            battleshipsList.push(new TransportShip(_spaceshipName, _spaceshipCrew, _sitsQuantity ));
        }
    }
//PROMPT TIPO DE NAVE
    spaceshipType() {
        let _chosenOption;
        let _typeMenu =  "Informe qual o tipo da nave:" +
                        "\n1- Batalha" +
                        "\n2- Transporte";
        while(!["1","2"].includes(_chosenOption)){
            _chosenOption = prompt(_typeMenu);
        }
        return _chosenOption;
    }
//PROMPT 3 - 
    menuPrincipal() {
        let _chosenOption;
        let _menu = "O que deseja fazer:" +
                    "\n1- Acelerar a nave" +
                    "\n2- Trocar de nave" +
                    "\n3- Exibir naves e sair";
        while(!["1","2","3"].includes(_chosenOption)) {
            _chosenOption = prompt(_menu);
        } 
        return _chosenOption;
    }
//PROMPT 3 AÇÕES
    nemuPrincipalFuncao(_chosenOption) {
        switch(_chosenOption) {
            case "1" :
                this.accelerateSpaceships();
                break;
            case "2" :
                this.spaceshipData();
                break;
        }
    }
//ACELERAR NAVES
    accelerateSpaceships() {
        let _availableSpaceship = "Naves disponíveis\n";
        for (let i = 0; i < battleshipsList.length; i++) {

            _availableSpaceship += `${i+1}: ${battleshipsList[i].name}\n`;
        }
        alert(_availableSpaceship);
        
        let _spaceshipToSpeedup = parseInt(prompt("Qual nave deseja acelerar? (Informe o índice da nave)"))-1;
        
        if(_spaceshipToSpeedup >= 0 && _spaceshipToSpeedup < battleshipsList.length) {

            let accelerate = parseFloat(prompt("Quanto deseja acelerar?"));
            battleshipsList[_spaceshipToSpeedup].speedUp(accelerate)                
        }
        if (battleshipsList[_spaceshipToSpeedup]) {

            alert(`Nave ${battleshipsList[_spaceshipToSpeedup]._spaceshipName} acelerada com sucesso.\nNova velocidade: ${battleshipsList[_spaceshipToSpeedup].currentSpeed.toFixed(2)}Km/s`);
        } else {
            alert("Nave não encontrada.");
        }
    
    }
//PRINT AND EXIT
    printExit() {
        let _spaceship = "";
        for(let i = 0; i < battleshipsList.length; i++) {
            _spaceship += (`Nave ${i+1}:\nNome: ${battleshipsList[i].name}\nTipo: ${battleshipsList[i]._type}\nVelocidade: ${battleshipsList[i].currentSpeed.toFixed(2)}\n`);

        }
        alert(`-----------------------------------\n${_spaceship}`);
    }
}