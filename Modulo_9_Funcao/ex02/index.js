let spaceshipSpeed = 150

// funcao para desacelerar a nave 20km/s a cada segundo
// Cosiderando que cada iteracao de um laco de repeticao e 1 seg.

function desacelerar(speed, printer, stop) {
    while (speed > 0) {
        if (speed > 10) {
            speed -= 20;
            printer(speed);
        } else {
            speed -= 10;
            printer(speed);
            stop();
        }
    }
    
}

let newVelocity = velocity => {
    alert(`Desacelerando... Velocidade atual: ${velocity} `);
}

let stopMessage = function() {
    alert(`A nave esta parada, as comportas podem ser abertas`);
}

let sistemInfor = desacelerar(spaceshipSpeed, newVelocity, stopMessage);