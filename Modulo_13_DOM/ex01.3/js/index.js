function submitHouse() {
    const houseNumber = document.querySelector("input[name='number']").value;
    const neighborhood = document.querySelector("input[name='neighborhood']").value;
    const city = document.querySelector("input[name='city']").value;
    const area = document.querySelector("input[name='area']").value;
    const list = document.querySelector("ul[id='List']");

    let newHouse = document.createElement("li");
    
    newHouse.textContent = `Casa Numero: ${houseNumber}, Area: ${area}m² [bairro: ${neighborhood} - cidade ${city}] `;
    
    const removeButton = document.createElement("button");
    removeButton.textContent = 'Remover';
    removeButton.setAttribute("onclick", "removeHouse(this)");
    //adding button to li and li to ul
    newHouse.appendChild(removeButton);
    list.appendChild(newHouse);
}

function removeHouse(house) {

    const list = document.querySelector("ul[id='List']");
    list.removeChild(house.parentNode);

}