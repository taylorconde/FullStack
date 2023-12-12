
function newHouse() {
    
    event.preventDefault();
    const application = new Application();

    //New immobile data
    let type = document.querySelector("select[name='type'] option:checked").value;
    let area = document.querySelector("input[name='area']").value;
    let rented = document.querySelector("select[name='rented'] option:checked").value;

    //Pushing data to NewHouse class and adding the object to the list
    let imovel = new NewHouse(type, area, rented);
    
    // application that creates a new Li 
    let newLi = application.addHouse(imovel);
    let liButton = application.removeButton();

    if(rented === "Yes") {
        const rentedLabel = document.createElement('span');
        rentedLabel.textContent = 'RENTED!';
        rentedLabel.style.backgroundColor = 'red';
        rentedLabel.style.color = "white";
        rentedLabel.setAttribute("role", "alert");
        newLi.prepend(rentedLabel)
    }


    application.updateList(newLi, liButton);
    
    
}


//Add event listener to the "SAVE" button and change it's atribute
document.getElementById('newHouseButton').addEventListener('click', newHouse);
// document.getElementById('newHouseButton').setAttribute('type', 'button');
