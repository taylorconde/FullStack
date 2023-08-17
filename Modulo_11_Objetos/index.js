//MAPEAMENTO DE VELOCIDADE DE UMA NAVE CADASTRAR NOME, TIPO, VELOCIDADE MAXIMA ANTES DE ENTRAR EM COMBUSTAO
//Menu perguntando ao usuario se ele quer parar ou acelerar. Se desejar parar, informar as caracteristicas da nave, Nome, tipo, e velocidade atual. Se ultrapacar a velocidade maxima, uma mensagem deve ser exibida informando a velocidade da nave e a velocidade maxima permitida.
let spaceship = {};

//Nome da nave
spaceship.name = prompt("Informe o nome da nave: ");

//Tipo da nave
spaceship.type = prompt("Informe o tipo desta nave: ");

//Informar qual a velocidade maxima desta nave
spaceship.maxSpeed = parseFloat(prompt("Informe a velocidade maxima da nave: "));

// perguntar se quer parar ou acelerar
let optionAcelerar = ["acelerar", "1"];
let optionParar = ["parar", "2"];


spaceship.acelerarOuParar = {
    option : function() {

        let result = prompt("Deseja acelerar ou para a nave?\n(1)Acelerar\n(2)Parar").toLowerCase();
        return result;
}};

// acelerar? perguntar quanto deseja
spaceship.velocity = 0;

spaceship.functions = [
    {acceleration : function(acceleration) {
        
        spaceship.velocity += acceleration;

            if (spaceship.velocity > spaceship.maxSpeed) {
                alert("Velocidade maxima ultrapassada!!!\n Favor parar a nave imediatamente para refriamento!");
            }
    }},

    {info : function(name, type, speed) {
        alert(`Nome da nave: ${name}\nTipo de nave: ${type}\nVelocidade atual: ${speed}`);
    }},
];



let choice;

do {

    choice = spaceship.acelerarOuParar.option();
      
    if (optionAcelerar.includes(choice)){
        let aceleracaoDesejada = parseFloat(prompt("Quanto deseja acelerar?"));
        spaceship.functions[0].acceleration(aceleracaoDesejada);

    } else if(optionParar.includes(choice)) {
        alert(`[CARACTERISTICAS DA NAVE]\n\nNome da nave: ${spaceship.name}\nTipo de nave: ${spaceship.type}\nVelocidade antes da parada: ${spaceship.velocity}km/s`);
    }
    
} while (optionAcelerar.includes(choice));

