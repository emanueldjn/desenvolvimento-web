// Mostrar nome da pessoa sorteada 
let pessoas = ["Emanuel", "Esteffany", "Juan", "fernanda", "Isabel"]




// função para sortear
function sortear() {
    let numeroPessoas = pessoas.length
    let numeroSorteado = Math.floor(Math.random() * numeroPessoas)

    document.getElementById("display").innerHTML = pessoas[numeroSorteado]

}