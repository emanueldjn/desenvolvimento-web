// Criando um sisteminha de colegio onde tem alunos e notas
// Lista onde tem o nome do aluno separado pera nota 1 e nota 2 com a media 
// valor se ta aprovado ou reprovado 


let nomes = ["Emanuel", "Jose", "Maria"];
let notasA = [7.0, 6.5, 9.5];
let notasB = [8.0, 7.0, 8.5];

// Função para calcular a media
function media(n1, n2) {
    return (n1 + n2) / 2
}

function passou(media){
    if (media > 7) {
        return 'aprovado'
    } else {
        return 'reprovado'
    }
}


// Criando lista

for(let index in nomes) {
    let nota1 = notasA[index];
    let nota2 = notasB[index];

    let m = media(nota1, nota2)

    console.log(nomes[index] +
        " - " +
        nota1 + 
        " - " + 
        nota2 +
        " - " +
        m +
        " - " +
        passou(m))
}