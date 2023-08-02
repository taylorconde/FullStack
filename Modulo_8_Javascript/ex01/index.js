let validAnswers = ["1", "sim", "s"];
let answer;
let dobra = 0;

// noma da nave
let spaceshipName = prompt("Qual o nome da nave?");

/* perguntar se deseja entrar na dobra com a mensagem:
Deseja entrar na dobra espacial?
1- Sim
2- Nao
se a resposta for sim, contabilizaremos uma dobra , a pergunta deve se repetir ate que o (nao) seja escolhido.
*/
do {
    answer = prompt("Deseja entrar na dobra espacial? \n1- Sim  \n2- Nao").toLowerCase();
    if (validAnswers.includes(answer)) {
        dobra ++;
    }
} while (validAnswers.includes(answer));

//Informar o nome da nave e o numero de vezes sequidas que a dobra espacial foi realizada.

alert(`Nome da nave: \n${spaceshipName}\n\nNumero de dobras realizadas:\n (${dobra})`);