let newSpaceshipName = "";
// ask the spaceship name
let spaceshipName = prompt("Informe o nome da nave: ");

// ask which character would he like to swap
let oldLetter = prompt("Qual letra deseja substituir?");

// ask for which character would he like to swap

let newLetter = prompt("Por qual letra deseja realizar a troca?");

// Use for loop to solve this problem

for(let i = 0; i < spaceshipName.length; i++) {
    if(spaceshipName[i] == oldLetter){
        newSpaceshipName += newLetter;
    } else {
        newSpaceshipName += spaceshipName[i];
    }
    console.log(newSpaceshipName)
}

// show an alert with the new spaceship's name

alert(`O novo nome da nave é: ${newSpaceshipName}`);