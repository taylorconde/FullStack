//first person name and age

let firstPersonName = prompt("Informe seu nome: ")
let firstPersonAge = prompt("Informe sua idade: ")

//second person name and age

let secondPersonName = prompt("Informe seu nome: ")
let secondPersonAge = prompt("Informe sua idade: ")


//age difference among then

let differenceAge = firstPersonAge - secondPersonAge

if (differenceAge < 0) {
    differenceAge *= -1
}

/*alert oldest person and their age
alert youngest person and their age*/

if(firstPersonAge > secondPersonAge){
    alert(`A pessoa mais velha é : ${firstPersonName} Idade: ${firstPersonAge} \nA pessoa mais nova é: ${secondPersonName} Idade: ${secondPersonAge} \nDiferença de idade: ${differenceAge}`)
}else{
    alert(`A pessoa mais velha é : ${secondPersonName} Idade: ${secondPersonAge} \nA pessoa mais nova é: ${firstPersonName} Idade: ${firstPersonAge} \nDiferença de idade: ${differenceAge}`)
}
