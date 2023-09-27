function addHouse() {
  // coletando valores dos campos input
  const numero = document.getElementById("numero").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const area = document.getElementById("area").value;
  const divList = document.querySelector(".list"); 
  const houseQuantity = divList.children.length + 1; //Para informar a posição da casa

  // criando um parágrafo para adicionar as informações da casa
  const newHouse = document.createElement("p");
  newHouse.setAttribute("id", houseQuantity); //Id único para cada parágrafo 
  newHouse.textContent = `Casa Nº ${houseQuantity} - Número: ${numero}, Bairro: ${bairro}, Cidade: ${cidade}, Área da Casa: ${area}`;

  // adicionando casa ao parágrafo + butão removeHouse
  divList.appendChild(newHouse);
  addRemoveHouseButton();
};
//função para botão remove house
function addRemoveHouseButton() {
  const divList = document.querySelector(".list");
  const houseQuantity = divList.children.length;
  const houseId = houseQuantity;
  
  
  //Criando botão de remoção
  const removeHouseButton = document.createElement("button");
  const removeHouseButtonId = `Button-${houseQuantity}`;
  removeHouseButton.setAttribute("id", removeHouseButtonId);
  removeHouseButton.textContent = `Remover Casa N° ${houseQuantity}`;
  
  // Adicionando o botão de remoção à div de botões 
  const divButton = document.querySelector(".button");
  divButton.appendChild(removeHouseButton);
  
  // Adicionando o evento de remoção da casa e do botão
  removeHouseButton.addEventListener("click", () => {
    const houseToRemove = document.getElementById(houseId);
    if(houseToRemove) {
      divList.removeChild(houseToRemove);
    }
    if(removeHouseButton) {
      const buttonToRemove = document.getElementById(removeHouseButtonId);
      divButton.removeChild(buttonToRemove);
    }
  });

};