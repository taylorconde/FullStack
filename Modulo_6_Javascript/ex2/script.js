let departureDateEntry = prompt("Informe a data de partida da nave (DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today.diff(departureDate);

let displayChoice = prompt("Deseja verificar o tempo decorrido em:\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias\n5 - Meses\n6 - Anos");

// if (displayChoice == "1") {
//     let inSeconds = moment.duration(dateDiff).asSeconds();
//     let roundedSeconds = Math.round(inSeconds);
//     alert(`The ocurred time is ${roundedSeconds} seconds`);
// } else if (displayChoice == "2") {
//     let inMinutes = moment.duration(dateDiff).asMinutes();
//     let roundedMinutes = Math.round(inMinutes);
//     alert(`The ocurred time is ${roundedMinutes} minutes`);
// } else if (displayChoice == "3") {
//     let inHours = moment.duration(dateDiff).asHours();
//     let roundedHours = Math.round(inHours);
//     alert(`The ocurred time is ${roundedHours} Hours`);
// } else if (displayChoice == "4") {
//     let inDays = moment.duration(dateDiff).asDays();
//     let roundedDays = Math.round(inDays);
//     alert(`The ocurred time is ${roundedDays} Days`);
// } else if (displayChoice == "5") {
//     let inMonths = moment.duration(dateDiff).asMonths();
//     let roundedMonths = Math.round(inMonths);
//     alert(`The ocurred time was ${roundedMonths} Months`);
// } else if (displayChoice == "6") {
//     let inYears = moment.duration(dateDiff).asYears();
//     let roundedYears = Math.round(inYears);
//     alert(`The ocurred time was ${roundedYears} Years`);
// } else {
//     alert("The opition is invalid.")
// };

switch (displayChoice) {
    case "1":
        let inSeconds = moment.duration(dateDiff).asSeconds();
        let roundedSeconds = Math.round(inSeconds);
        alert(`The ocurred time was ${roundedSeconds}sec.`);
        break;
    case "2":
        let inMinutes = moment.duration(dateDiff).asMinutes();
        let roundedMinutes = Math.round(inMinutes);
        alert(`The ocurred time was ${roundedMinutes}min.`);
        break;
    case "3":
        let inHours = moment.duration(dateDiff).asHours();
        let roundedHours = Math.round(inHours);
        alert(`The ocurred time was ${roundedHours}Hr.`);
        break;
    case "4":
        let inDays = moment.duration(dateDiff).asDays();
        let roundedDays = Math.round(inDays);
        alert(`The ocurred time was ${roundedDays} Day(s).`);
        break;
    case "5":
        let inMonths = moment.duration(dateDiff).inMonths();
        let roundedMonths = Math.round(inMonths);
        alert(`The ocurred time was ${roundedMonths} Months.`);
        break;
    case "6":
        let inYears = moment.duration(dateDiff).asYears();
        let roundedYears = Math.round(inYears);
        alert(`The ocurred time was ${roundedYears} Years.`);
        break;
    default:
        alert(`The option ${displayChoice}, is invalid.`);
};