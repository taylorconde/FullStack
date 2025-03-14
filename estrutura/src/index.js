const Planet = require('./planet');
const solarSystem = require('./solar_system');
const moment = require('moment');

const earth = new Planet("Terra", 5010000);
earth.rotate();

solarSystem.planets.push(earth)
solarSystem.planets.push(new Planet("Marte", 144800000));
solarSystem.planets.push(new Planet("Mercurio", 74800000));
solarSystem.planets.push(new Planet("Saturno", 427800000));

console.log(solarSystem.planets);

console.log(moment().format())