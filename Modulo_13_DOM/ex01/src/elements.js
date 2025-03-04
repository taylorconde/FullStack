function addNewHouse() {

    const houseData = document.querySelectorAll("#houseData p");
    let house = Array.from(houseData).map(element => `${element.children[0].innerText} ${element.children[1].value} `).join(", ");

    const button = document.createElement("button");
    button.addEventListener("click", function () { event.preventDefault(); removeHouse(this.parentElement) })
    button.type = "button"
    button.innerText = "Apagar"

    const formHouses = document.getElementById("houses");
    const houseParagraph = document.createElement("p");
    houseParagraph.append(house, button, "\n");
    formHouses.append(houseParagraph);
}

function removeHouse(house) {
    const phormHouses = document.getElementById("houses");
    phormHouses.removeChild(house)
}