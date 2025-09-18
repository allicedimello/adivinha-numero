let numeroSecreto = gerarNumero();
let numeroPalpite;
let numeroMaximo = 100
let numeroTentativas = 1;
let mensagemNumero = `Digite um número entre 1 e ${numeroMaximo}:`

exibitTexto("h1", "Adivinhe o número");
exibitTexto("p", mensagemNumero);

function exibitTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function validarPalpite() {
    if (numeroPalpite === "" || isNaN(numeroPalpite)) {
        exibitTexto("p", "Digite um número válido!");
        document.querySelector("input").value = "";
        return false;
    }
    if (numeroPalpite < 1 || numeroPalpite > 100) {
        exibitTexto("p", mensagemNumero);
        document.querySelector("input").value = "";
        return false;
    }
    return true;
}

function verificarChute(){
    numeroPalpite = document.querySelector("input").value;

     if (!validarPalpite(numeroPalpite)) {
        document.querySelector("input").value = "";
        return;
    }

    if (numeroPalpite == numeroSecreto){
        exibitTexto("h1", "Acertou!");
        let palavraTentativa = numeroTentativas > 1 ? "tentativas" : "tentativa"
        let mensagemTentativas = `Você descobriu o número secreto com ${numeroTentativas} ${palavraTentativa}`
        exibitTexto("p", mensagemTentativas);

        document.querySelector("input").disabled = true;
        document.querySelector("button").disabled = true;
    } else {
        let palavra = numeroPalpite > numeroSecreto ? "menor" : "maior"
        let mensagemPalpite = `O número secreto é ${palavra} que ${numeroPalpite}`
        if (numeroPalpite > numeroSecreto){
            exibitTexto("p", mensagemPalpite);
        } else if (numeroPalpite < numeroSecreto) {
            exibitTexto("p", mensagemPalpite);
        }

        numeroTentativas++
    }
    
    document.querySelector("input").value = "";
}

function gerarNumero(){
    return parseInt(Math.random() * 100 +1);
}

console.log(numeroSecreto); // >>>>>>>>>> retirar do código