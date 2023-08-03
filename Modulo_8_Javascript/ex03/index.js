//spaceship name
let spaceshipName = prompt("Informe o nome da sua nave: ");

let spaceshipNameReverse = "";
// reverse spaceship's name with a loop

for(let i = spaceshipName.length -1; i >= 0; i --) {
    if(spaceshipName[i] == "e") {
        break;
    }
    spaceshipNameReverse += spaceshipName[i];
}

alert(`Nome original da nave: ${spaceshipName}\nNome apos ocultação: ${spaceshipNameReverse}`);