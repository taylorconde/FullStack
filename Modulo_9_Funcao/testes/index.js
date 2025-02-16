// function multiplica(number, printer) {
//     let valor = number * 2;
//     printer(valor);
//     return valor;
// };

// textPrint = resultado => console.log(`O resultado foi: ${resultado}`);

// let resposta = multiplica(1500, textPrint);
// console.log(resposta);

let nomes = ["ano", "meses", "quatorze?", "especial"];

// let nomesIndex = nomes.forEach(function (nomeAtual, index) {
//     console.log(`O nome: ${nomeAtual}, tem o index: ${index}.`)
// })

// let nomesUppercase = nomes.map(function (nome) {
//     let maiuscula = nome.toUpperCase();
//     return maiuscula;
// });
// console.log(nomesUppercase[1]);

let morethan4 = nomes.filter(word => { return word.length > 4 });
console.log(morethan4);