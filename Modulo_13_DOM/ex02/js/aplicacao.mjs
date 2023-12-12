const list = document.querySelector("ul[id='house-list']");
function removeFunction(button) {
    
    list.removeChild(button.parentNode);
    
}


class Application {
    constructor() {
    }

    addHouse(house) {

        //li used to support the new immobile data, in the ul element 
        let newLi = document.createElement('li');
        newLi.textContent = (` Tipo: ${house.type}\nArea: ${house.area}\nAlugada: ${house.rented} - `);
        return newLi;
    }
    
    removeButton() {
        
        const liButton = document.createElement("button");
        liButton.textContent = 'Remove';
        liButton.addEventListener('click', () => removeFunction(liButton));
        return liButton;
    }
    
    
    updateList(li,butto) {

        li.appendChild(butto);
        list.appendChild(li);

    }

    listHouses() {
        
        return this.houseList;
    }
}
