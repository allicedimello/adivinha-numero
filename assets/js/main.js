let substituirCampo;
let numerosSorteados;
let numeroEscolhido;
let quantidadeElementos;
let numeroSecreto;
let numeroPalpite;
let numeroMaximo;
let numeroTentativas;
let mensagemInicio;
let mensagemInvalido;
let singularOuPlural;
let mensagemAcerto;
let maiorOuMenor;
let mensagemErro;

iniciarJogo();
mensagemInicial();

function exibirTexto(tag, texto){
    substituirCampo = document.querySelector(tag);
    substituirCampo.innerHTML = texto;
}

function gerarNumero(){
    if (!Array.isArray(numerosSorteados)) {
        numerosSorteados = [];
    }

    numeroMaximo = 100;
    numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    quantidadeElementos = numerosSorteados.length;

    if (quantidadeElementos === numeroMaximo){
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumero();

    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados); // >>>>>>>>>> retirar do código
        return numeroEscolhido;
    }
}

function iniciarJogo(){
    numeroSecreto = gerarNumero();
    numeroTentativas = 1;
    document.getElementById('jogar').removeAttribute('disabled');
}

function mensagemInicial(){
    mensagemInicio = `Digite um número entre 1 e ${numeroMaximo}:`;
    exibirTexto('h1', 'Adivinhe o número');
    exibirTexto('p', mensagemInicio);
}

function validarPalpite() {
    if (numeroPalpite === '' || isNaN(numeroPalpite)) {
        exibirTexto('p', 'Digite um número válido!');
        limparCampo();
        return false;
    }

    if (numeroPalpite < 1 || numeroPalpite > numeroMaximo) {
        mensagemInvalido = `${numeroPalpite} não é um número válido, digite um número entre 1 e ${numeroMaximo}!`;
        exibirTexto('p', mensagemInvalido);
        limparCampo();
        return false;
    }
    return true;
}

function verificarChute(){
    numeroPalpite = document.querySelector('input').value;

    if (validarPalpite()) {
        numeroPalpite = Number(numeroPalpite);

        if (numeroPalpite === numeroSecreto){
            exibirTexto('h1', 'Acertou!');
            singularOuPlural = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
            mensagemAcerto = `Você descobriu o número secreto com ${numeroTentativas} ${singularOuPlural}`;
            exibirTexto('p', mensagemAcerto);

            document.getElementById('jogar').setAttribute('disabled', true);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('input').disabled = true;

        } else {
            maiorOuMenor = numeroPalpite > numeroSecreto ? 'menor' : 'maior';
            mensagemErro = `O número secreto é ${maiorOuMenor} que ${numeroPalpite}`;
            exibirTexto('p', mensagemErro);

            numeroTentativas++;
            limparCampo();
        }
    }  
}

function limparCampo(){
    numeroPalpite = document.querySelector('input');
    numeroPalpite.value = '';
}

function reiniciarJogo(){
    iniciarJogo();
    mensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.querySelector('input').disabled = false;

    console.log(numeroSecreto); // >>>>>>>>>> retirar do código
}

console.log(numeroSecreto); // >>>>>>>>>> retirar do código