// contador de dobras espaciais
let dobras = 0;
// Nome da nave
let spaceshipName = prompt("Informe o nome da nave: ");
//Primeira entrada na dobra.
let primeiraDobra;

do {

    primeiraDobra = prompt("Deseja entrar na dobra?\n" +
        "1- Sim\n" +
        "2- Não"
    );

    if (primeiraDobra !== "1" && primeiraDobra !== "2") {
        alert(`Opcao invalida,"${primeiraDobra}".`);
    } else if (primeiraDobra === "1") {
        dobras += 1;
        let novaDobra;
        do {
            novaDobra = prompt("Deseja realizar uma nova dobra?\n" +
                "1- Sim\n" +
                "2- Não"
            );
            if (novaDobra !== "1" && novaDobra !== "2") {
                alert(`Opcao invalida "${novaDobra}`);
            } else if (novaDobra === "1") {
                dobras += 1;
            } else {
                primeiraDobra = "2";
                alert(`Nome da nave: ${spaceshipName}\n` +
                    `Numero de dobras realizado: ${dobras}`
                );
            }
        } while (novaDobra !== "2");
    } else {
        alert(`Nome da nave: ${spaceshipName}\n` +
            `Numero de dobras realizado: ${dobras}`
        )
    }

} while (primeiraDobra !== "2");