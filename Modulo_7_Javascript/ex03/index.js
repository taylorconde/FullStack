
//Utilizar as seguintes conversões:
//1 ano luz = 0,306601 pc
const anoParsec = 0.306601

//1 ano luz = 6324,1 AU
const anoUa = 6324.1

//1 ano luz = 9,5*10¹²
const anoLuz = 9.5 * (Math.pow(10,12))


// perguntar a distancia em anos luz

let distance = prompt("Informe a distância em anos-luz: ")

// oferecer uma lista de opçõs 1- Parsec(pc), 2- Unidade astronômica(AU), 3- Quilômetros(km)
// Perguntar qual operação deseja realizar, a resposta receberá o numero da opção escolhida

let convertOption = prompt("Em qual das 3 opções aseguir deseja realizar a conversão?\n1- Parsec(pc)\n 2- Unidade astronômica(AU)\n 3- Quilômetros(km)\n")

/* 
Utilize o switch para verificar a opção escolida pelo usuário
Armazenar o nome da unidade
Armazenar o valor convertido de anos-luz para a unidade desejada*/

switch(convertOption) {
    case "1":
        var conversao = "Parsec(pc)"
        var converted = (+distance * anoParsec)
        var unidade = "pc"
        break
    case "2":
        var conversao = "Unidade Astronômica(AU)"
        var converted = (+distance * anoUa)
        var unidade = "AU"
        break
    case "3":
        var conversao = "Quilômetros(Km)"
        var converted = (+distance * anoLuz)
        var unidade = "Km"
        break
    default:
        alert(`Distancia em anos-luz: ${distance}\nUnidade não identificada: Conversão fora do escopo `)
        break
}

/*
Exiba com alerta contendo a distância em anos-luz e a distância convertida para a operação desejada.
Distancia em Anos-luz: <distancia digitada em anos-luz>
<conversão desejada>:<distância convertida>*/



alert(`Distancia em Anos-luz: ${distance}\n${conversao} : ${converted}${unidade}`)


