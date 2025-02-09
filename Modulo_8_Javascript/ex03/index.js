let spaceshipName = prompt("informe o nome da nave:");

let caracterProibido = prompt("parar em que letra?");

let newSpaceshipName = "";

for (let i = spaceshipName.length - 1; i > 0; i--) {

    if (spaceshipName[i] === caracterProibido) {
        break;
    } else {
        newSpaceshipName += spaceshipName[i];
    }
};
console.log(newSpaceshipName);