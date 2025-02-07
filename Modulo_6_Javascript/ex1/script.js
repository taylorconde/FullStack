//nome do piloto
// velocidade 0
// perguntar velocidade ao piloto aceleracao
// confirmar se quer acelerar mesmo
// if else 0, menor que 40, menor que 80, maior que 80 e menor que 100, maior que 100.

let pilotName = prompt("Digite o nome do piloto: ");
let speed = 0;
let acceleration = prompt("Digite a aceleração inicial da Nave: ");
let confirmSpeed = confirm(`Deseja acelerar a Nave à ${acceleration} km/s²?`);

if (confirmSpeed) {
    speed += parseInt(acceleration);

    if (speed === 0) {
        alert(`Nave está parada. Considere partir e aumentar a velocidade`);
    } else if (speed < 40) {
        alert(`Você está devagar, podemos aumentar mais`);
    } else if (speed < 80) {
        alert(`Parece uma boa velocidade para manter ${speed} km/s²`);
    } else if (speed < 100) {
        alert(`Velocidade alta. Considere diminuir a velocidade`);
    } else {
        alert(`Velocidade perigosa. Controle automático forçado.`);
    };
};

let finalMessage = `Piloto: ${pilotName} \nVelocidade: ${speed} km/s²`;
alert(finalMessage);