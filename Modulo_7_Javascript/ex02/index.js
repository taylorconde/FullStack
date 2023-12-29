// data de partida da nave
let departureDateEntry = prompt("Digite a data da partida. (formato DD/MM/YYY)")

// converter data com a biblioteca moment

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

// utilizando a biblioteca moment para fornecer data atual

let today = moment()

// verificando a diferença em milisegundos entre as datas.

let dateDiff = today - departureDate

// solicitar em que formato deseja verificar o tempo. segundos, minutos, horas, dias.

let timeOption = prompt("Escolha em qual formato deseja ver o tempo de partida: \n1- segundos\n2- minutos\n3- horas\n4- dias\n")

if(timeOption == "1") {
    let timeSeconds = Math.round(dateDiff / 1000)
    alert(`Tempo de vôo ${timeSeconds} segundos`)
} else if(timeOption == "2") {
    let timeMinutes = Math.round(dateDiff / 1000 / 60)
    alert(`Tempo de vôo ${timeMinutes} minutos`)
} else if(timeOption == "3") {
    let timeHours = Math.round(dateDiff / 1000 / 60 / 60)
    alert(`Tempo de vôo ${timeHours} horas`)
} else if(timeOption == "4") {
    let timeDays = Math.round(dateDiff / 1000 / 60 / 60 / 24)
    alert(`Tempo de vôo ${timeDays} dias`)
} else {
    alert("Valor inválido")
}
