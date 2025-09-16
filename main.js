alert("Bem vindo(a) ao jogo do número secreto!");

let numeroMaximo = 100
let numeroSecreto = 5;
let numeroChute;
let numeroTentativas = 1;

while (numeroChute != numeroSecreto) {
    numeroChute = prompt("Escolha um número entre 1 e 100");

    if (numeroChute == numeroSecreto) {
        alert(`Parabéns, você adivinhou o número secreto com ${numeroTentativas} tentativas!`);
    } else {
        if (numeroChute > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroChute}!`);
        } else if (numeroChute < numeroSecreto) {
            alert(`O número secreto é maior que ${numeroChute}!`);
        }

        numeroTentativas++
    }
}