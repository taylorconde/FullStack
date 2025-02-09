//spaceship name
let spaceshipName = prompt("Informe o nome da aeronave: ");

//caracter to be replaced
let replaceCaracter = prompt("Informe o caractere a ser substituido: ");

//caracter to replace
let newCaracter = prompt("Por qual caractere deseja substituir?");

//Spaceship name after replacement
let newSpaceshipName = "";

//for loop to read all spaceshipName's caracters
for (let i = 0; i < spaceshipName.length; i++) {
    if (spaceshipName[i] == replaceCaracter) {
        newSpaceshipName += newCaracter;
    } else {
        newSpaceshipName += spaceshipName[i];
    }
}

alert(`The new Spaceship's name is ${newSpaceshipName}!`);