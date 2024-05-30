// Promises
// Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

function esperarPor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

esperarPor(2000).then(() => console.log('Passaram-se 2 segundos'));


// Async / Await

// async e await são sintaxes para escrever código assíncrono de maneira mais síncrona e legível.

function esperarPor2(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function executar() {
    console.log("iniciando...")
    await esperarPor2(2000);
    console.log("Passaram-se 2 segundos")
}

executar()