function addNewHouse() {
    let area = document.querySelector("input[name='area']").value;
    let number = document.querySelector("input[name='number']").value;
    let neighborhood = document.querySelector("input[name='neighborhood']").value;
    let city = document.querySelector("input[name ='city']").value;

    //creating newHouse li
    let newHouse = document.createElement("li");
    newHouse.innerText = `Área: ${area}m², Número: ${number} ( ${neighborhood} - ${city}) `;

    //creating removeHouseButton
    let removeHouseButton = document.createElement("button");
    removeHouseButton.type = "button";
    removeHouseButton.innerText = "Remover";
    removeHouseButton.setAttribute("onclick", "removeHouse(this)"); // this button it´s bring the function with himself as parameter.
    
    //adding button into li newHouse 
    newHouse.appendChild(removeHouseButton);

    //adding li into ul
    document.getElementById("house-list").appendChild(newHouse);

}

function removeHouse(button) {
    let liToRemove = button.parentNode;
    document.getElementById("house-list").removeChild(liToRemove);
}