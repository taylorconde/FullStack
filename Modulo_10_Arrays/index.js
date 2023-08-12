const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false],
]


//retornar O nome das naves que tem mais de 9 tripulantes 

let nameNine = hitchedSpaceships 
    .filter((elemento) => elemento[1] > 9)
    .map((elemento) => elemento[0])
    .join(" e ");

// alert( `As naves com mais de 9 tripulantes sao ${nameNine}`);

// Informar o numero da plataforma em que esta a primeira nave que ainda esta com engate pendente

let findEngateIndex = hitchedSpaceships
    .findIndex((elemento) => !elemento[2]);

let numeroPlataforma = findEngateIndex !== -1 ? findEngateIndex + 1 : "Nenhuma nave com engate pendente encontrada";

// alert (`A plataforma de numero ${numeroPlataforma}, esta com engate pendente.`);

// Destacar o nome de todas as naves colocando-as em caixa alta e exibindo.

let upperCaseNames = hitchedSpaceships
    .map((elemento) => elemento[0].toUpperCase());
    
// alert(`Nome das Naves: \n${upperCaseNames.join(",\n")}`);

// Exibir um alerta com todas estas informacoes
let mensagem = `As naves com mais de 9 tripulantes sao ${nameNine}\n`;
mensagem += `A plataforma de numero ${numeroPlataforma}, esta com engate pendente.\n`;
mensagem += `Nome das Naves: \n${upperCaseNames.join(",\n")}`;
alert(mensagem);