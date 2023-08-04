// spaceship name
let spaceshipName = prompt("Informe o nome da nave: ");


// initial speed 0  / menu : 1 Acelerar 5mk/s , 2 Desacelerar 5km/s nao deve passar de zero, 3 print (nome, velocidade atual), 4 exit program
// se a opcao selecionada nao estiver no menu, entao o menu deve ser oferto novamente.

let spaceshipSpeed = 0;

let option = "";

let exit = false;


function nave() {


    do {
        option = prompt("1.Acelerar 5km/s\n2.Desacelerar 5km/s\n3.Informar Dados da Nave\n4.Exit");
        switch (option) {
            case "1":
                spaceshipSpeed += 5;
                break;
            case "2":
                if (spaceshipSpeed > 0) {
                    spaceshipSpeed -= 5;
                } else {
                    alert("Sua nave ja esta parada");
                }
                break;
            case "3":
                alert(`Nome da nave: ${spaceshipName}\nVelocidade da nave: ${spaceshipSpeed}`);
                break;
            case "4":
                exit = true;
                break;
            default:
                alert("Opção não reconhecida");
        }
    }
    while (!exit);
}
nave()