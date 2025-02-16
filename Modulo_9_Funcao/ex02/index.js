let velocity = 150;

//funcao menu
function menu() {
    let menuOption;
    let options = ["1", "2"];
    do {
        menuOption = prompt(`A nave está a ${velocity}km/s.\n` +
            `Inicie o protocolo de desaceleração!\n` +
            `Digite (1) pra iniciar o protocolo de parada.\n` +
            `Digite (2) pra informações da nave.`
        );
    } while (!options.includes(menuOption));

    if (menuOption === "1") {
        protocoloDeParada(printInformation, finalMessage);
    } else {
        spaceshipInformations();
    };
    return menuOption;
};

//funcao para desacelerar a nave 20km/s a cada segundo; precisa ter um call back
function protocoloDeParada(printer, stopped) {

    let intervalo = setInterval(() => {
        printer(velocity);
        velocity -= 25;
        if (velocity < 0) {
            clearInterval(intervalo);
            velocity = 0
            stopped(velocity);
        }
    }, 1000);
};

//informacoes da velocidade atual
printInformation = speed => console.log(`Nave desacelerando, velocidade atual: ${speed}`);
//mensagem para informar parada da nave
finalMessage = (speed) => console.log(`Velocidade atual: ${speed}km/s, nave parada.\nDesembarque autorizado.`);
//informacoes gerais da nave
spaceshipInformations = () => console.log(`Nome: Nabucodonosor\nTipo: Nave de combate\nTripulacao: 200.000`);

let painel;

do {

    painel = menu();

} while (painel !== "1");
