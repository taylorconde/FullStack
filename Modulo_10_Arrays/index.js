/*
Nome, tipo e velocidade maxima
velocidade inicial = 0
menu para acelerar e parar
    se parar, 
        informar nome, tipo e velocidade
    se acelerar, 
        perguntar quanto quer acelerar, velocidade sera incrementada
            se ultrapassar velocidade maxia, exiba mensagem informando vel atual e vel maxima permitida
prompt nome, tipo, vel maxima, acelerar ou parar.
criar um objeto para a nave. */


let spaceship = [{
    nome: "",
    type: "",
    maxSpeed: "",
    velocity: 0,
    start: function () {
        this.nome = prompt("Informe o nome da nave: ");
        this.type = prompt("Informe o tipo da nave: ");
        this.maxSpeed = prompt("Informe a velocidade maxima da nave: ");
        this.movement();
    },
    movement: function () {
        let movement = "";

        do {
            if (this.velocity == 0) {
                movement = prompt(`Deseja partir, ou permanecer parado?\nVelocidade atual: ${this.velocity}Km/h\nPartir - (1)\nPermanecer parado - (2)`);
            } else {
                movement = prompt(`Deseja Acelerar, ou parar a nave?\nVelocidade atual: ${this.velocity}Km/h\nPartir - (1)\nPermanecer parado - (2)`);
            };

            if (movement == "2" && this.velocity == 0) {
                console.log(`Permanecer parado!\nNome da Nave: ${this.nome}\nTipo de Nave: ${this.type}\nVelocidade: ${this.velocity}Km/h`)
            } else if (movement == "2") {
                console.log(`Parando a nave.\nNome da Nave: ${this.nome}\nTipo de Nave: ${this.type}\nVelocidade: ${this.velocity}Km/h`)
            } else if (movement == "1") {
                let accelerate = parseFloat(prompt("Quanto deseja acelerar?"))
                if (this.velocity >= this.maxSpeed) {
                    console.log(`Velocidade máxima alcançada, reduzindo 10% da velocidade atual: \nVelocidade atual: ${this.velocity}Km/h\nReduzindo...\n..\n.`);
                    this.velocity *= 0.9;
                    console.log(`Velocidade reduzida para: ${this.velocity}Km/h`)
                } else {
                    this.velocity += accelerate;
                    console.log(`Acelerando...\nVelocidade atual: ${this.velocity}Km/h`)
                }
            } else {
                console.log("Opção inválida!\nDigite '1' Para acelerar, e '2' Para parar.")
            }
        } while (movement !== "2");
    },
}];



start = spaceship[0].start();