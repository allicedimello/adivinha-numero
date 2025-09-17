/*
alert("Bem vindo(a) ao jogo do número secreto!");

let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let numeroChute;
let numeroTentativas = 1;

while (numeroChute != numeroSecreto) {
    numeroChute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (numeroChute == numeroSecreto) {
        break
    } else {
        if (numeroChute > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroChute}!`);
        } else if (numeroChute < numeroSecreto) {
            alert(`O número secreto é maior que ${numeroChute}!`);
        }

        numeroTentativas++
    }
}

let palavraTentativa = numeroTentativas > 1 ? "tentativas" : "tentativa"
alert(`Parabéns, você adivinhou o número secreto com ${numeroTentativas} ${palavraTentativa}!`);
*/

let numeroSecreto = gerarNumero();

function exibitTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibitTexto("h1", "Adivinhe o número");
exibitTexto("p", "Digite um número entre 1 e 100:");

function verificarChute(){
    console.log("o botão foi clicado"); // >>>>>>>>>> retirar do código
}

function gerarNumero(){
    return parseInt(Math.random() * 100 +1);
}

console.log(numeroSecreto); // >>>>>>>>>> retirar do código