/*
Nome da Nave
Velocidade = 0
Função Menu
    1-Acelerar 5km/s
    2-Desacelerar 5km/s
    3-Imprimir Dados de Bordo
    4-Sair do Programa
Função Acelerar
Função Desacelerar
Função Dados de bordo
    Nome da Nave e Velocidade Atual
*/
//Nome da nave
let spaceshipName = prompt("Olá, informe o nome da Nave: ");

//velocidade Inicial zero
let velocity = 0;

//função Menu inicial
function menu() {

    let option;
    let optionNumbers = ["1", "2", "3", "4"];

    do {
        option = prompt("Selecione o número de uma das opções, piloto:\n" +
            "1- Acelerar 5km/s\n" +
            "2- Desacelerar 5km/s\n" +
            "3- Imprimir Dados de Bordo\n" +
            "4- Sair do Programa"
        );
    } while (!optionNumbers.includes(option));

    return option;

};

function controlMenu(answer) {

    if (answer === "1") {
        speedUp();
    } else if (answer === "2") {
        slowDown();
    } else if (answer === "3") {
        spaceshipData(spaceshipName, velocity);
    } else {
        alert('Encerrando o programa.')
        return;
    }
}

function speedUp() {
    velocity += 5;
    console.log(velocity);
};

function slowDown() {
    if (velocity > 0) {
        velocity -= 5;
        console.log(velocity);
    } else {
        alert(`Estamos parados, primeiro acelere a nave.\nVelocidade atual: ${velocity}km/s.`);
    };
};

function spaceshipData(spaceshipName, velocity) {
    alert(`Nome da nave: ${spaceshipName}.\n` +
        `Velocidade atual: ${velocity}km/s.`
    );
};

let answer;
let controls;

do {

    answer = menu();
    controls = controlMenu(answer);

} while (answer !== "4");