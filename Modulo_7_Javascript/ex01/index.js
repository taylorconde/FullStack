// ask the pilot name
let name = prompt("Informe seu nome piloto: ")

// spaceship initial speed = 0
let spaceshipSpeed = 0

// ask what speed he wants to acelerate
let acelerate = prompt("Em que velocidade você quer acelerar a nave? ")

// ask for a confirmation saying it goes to speed x km/s, if yes, than the spaceship speed is updated
confirmAcelerate = confirm(`Tem certeza que deseja acelerar a nave em ${acelerate}Km/s?\n Precione OK para confirmar ou Cancel para desistir` )

if(confirmAcelerate){
    spaceshipSpeed += +acelerate
}
// show one of the 5 messages below, use a span
/*
Se for menor que 0km/s: "Nave está parada. Considere partir e aumentar a velocidade"
Se form menor que 40km/s: "Você está devagar, podemos aumentar mais"
Se for maior ou igual a 40km/s e menor que 80km/s: "Parece uma boa velocidae para manter"
Se for maior ou igual a 80km/s e menor que 100km/s: "Velocidade alta. Considere diminuir"
Se for maior ou igual a 100km/s: "Velocidade perigosa. Controle automático forçado"
*/
if(spaceshipSpeed <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
}else if(spaceshipSpeed < 40){
    alert("Você está devagar, podemos aumentar mais")
}else if(spaceshipSpeed < 80){
    alert("Parece uma boa velocidae para manter")
}else if(spaceshipSpeed < 100){
    alert("Velocidade alta. Considere diminuir")
}else{
    alert("Velocidade perigosa. Controle automático forçado")
}

//alert the pilot´s name and spaceship speed
alert(`Nome do piloto:\n ${name} \n\nVelocidade da nave:\n ${spaceshipSpeed}Km/s`)