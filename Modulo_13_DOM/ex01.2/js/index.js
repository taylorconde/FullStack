function addHouse() {
    //coletando cada um dos dados da casa
    const number = document.querySelector("input[name='number']").value;
    const neighborhood = document.querySelector("input[name='neighborhood']").value;
    const city = document.querySelector("input[name='city']").value;
    const area = document.querySelector("input[name='area']").value;
    
    //lista de casas e contador de casas
    houseList = document.querySelector("ul[id='houseList']");
    houseQuantity = houseList.children.length +1;

    //unificando dados 
    let newHouse = document.createElement("li");
    newHouse.innerText = `${houseQuantity}º Casa: - Área: ${area}m², N°${number} (${city} - ${neighborhood}) `;

    // remove house button 
    removeHouse = document.createElement("button");
    removeHouse.type = "button";
    removeHouse.innerText = `Remover`;
    removeHouse.setAttribute("onclick", "removeThisHouse(this)");

    //adicionando botão à li e li ao ul.
    newHouse.appendChild(removeHouse);
    houseList.appendChild(newHouse);

    number.innerText = "";

}

function removeThisHouse(house) {
    const houseList = document.querySelector("ul[id='houseList']");
    const houseToRemove = house.parentNode;
    houseList.removeChild(houseToRemove);
}