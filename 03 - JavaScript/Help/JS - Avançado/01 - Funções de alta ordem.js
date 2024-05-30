// Funções de alta ordem são funções que recebem outras funções como argumentos ou retornam funções como resultado.

// Função que recebe outra função como argumento

function executar(funcao) {
    funcao();
}

function saudacao() {
    console.log('Olá, mundo!');
}

executar(saudacao) // Saida: "Olá, mundo!"

// Função que retorna outra função

function criarMultipliador(mutiplicador) {
    return function (numero) {
        return numero * mutiplicador;
    }
}

const dobrar = criarMultipliador(2);
const triplicar = criarMultipliador(2);

console.log(dobrar(5)); // Saída: 10
console.log(triplicar(5)); // Saída: 15