let lightYear = prompt("Informe uma distância em anos luz: ");

let convertionOption = prompt("Para qual unidade de medida gostaria de converter a distancia em anos luz?\n1 - Parsec(pc)\n2 - Unidade Astronômica(AU)\n3 - Quilômetros(km)");

switch (convertionOption) {
    case "1":
        let parsec = (parseFloat(lightYear) * 0.0306601);
        alert(`Distância em Anos-Luz: ${lightYear}\n` +
            `Distância em Parsec: ${parsec}pc`);
        break;
    case "2":
        let astronomicUnit = (parseFloat(lightYear) * 63241.1);
        alert(`Distância em Anos-Luz: ${lightYear}\n` +
            `Distância em Unidade Astronômica: ${astronomicUnit}AU`);
        break;
    case "3":
        let quilometro = (parseFloat(lightYear) * (9.5 * (Math.pow(10, 12))));
        alert(`Distância em Anos-Luz: ${lightYear}\n` +
            `Distância em Quilômetros: ${quilometro}Km`);
        break;
    default:
        alert(`Distância em Anos-Luz: ${lightYear}\n` +
            `Unidade não identificada: Conversão fora do escopo`);
};