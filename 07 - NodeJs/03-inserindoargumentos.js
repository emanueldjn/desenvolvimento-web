// Argumentos: cada uma das palavras/caracteres
let calc = require('./03.03-calc')

let args = process.argv.slice(2) // corte dos 2 primeiros elementos


let a = Number(args[1]); // 0
let b = Number(args[2]); // 1
let c = ""; // soma(a, b)

if(args[0] == 's') {
    c = calc.soma(a, b)
} else if (args[0] == 'm') {
    c = calc.mult(a, b);
} else {
    c = 'opção invalida'
}

console.log(c)

// return 50 30 
// quando passa um valor numero por argumento, entende que é stringcomo uma concatenação
// por isso em que faze a conversão Com Number pois nao sabe se é float ou int
// e agora retorna a soma = 50 30 = 80