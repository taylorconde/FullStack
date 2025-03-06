function registerHouse() {
    event.preventDefault();
    //form elements
    let propertyType = document.forms["houses-form"].elements["house-type"].value;
    let propertyArea = document.forms["houses-form"].elements["area"].value;
    let propertyAvailability = document.forms["houses-form"].elements["availability"].value;
    document.getElementById("houses-form").reset();

    // translating some answer options to Portuguese
    propertyType = propertyType === "house" ? "Casa" : "Apartamento";
    propertyAvailability = propertyAvailability === "rented" ? "Alugada" : "Disponível";

    // Agrouping property informations
    let property = ` - Tipo: ${propertyType}, Área: ${propertyArea} - `;

    //Transforming a string in a DOM element;
    const textPropertyAvailability = document.createTextNode(propertyAvailability);
    const textProperty = document.createTextNode(property);

    //crating a span to be stylized after
    const spanAvailability = document.createElement("span");
    spanAvailability.className = propertyAvailability === "Disponível" ? "property-available" : "property-not-available";
    spanAvailability.appendChild(textPropertyAvailability);

    houseList(spanAvailability, textProperty, removeHouse);
}

function houseList(availability, house, removeFunc) {

    // Getting house-list div, and adding a 'p' element with (property informations)
    const houseList = document.getElementById("house-list");
    let houseParagrath = document.createElement("p");

    let removeButton = removeFunc(houseParagrath);

    houseParagrath.appendChild(availability);
    houseParagrath.append(house);
    houseParagrath.appendChild(removeButton);

    houseList.appendChild(houseParagrath);
}

function removeHouse(houseElement) {
    // creating remove button
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remover";

    // Adding funtionality
    removeButton.addEventListener("click", function () {
        houseElement.remove();
    })

    // Adding button to the house element;

    return removeButton;
}