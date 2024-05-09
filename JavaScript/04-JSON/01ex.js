// Representação do objeto
// 2 metodos: 
// 1º parse = Pega uma string e transforma em objeto JSON
// 2º stringify = pega o objeto JSON e transforma em string

let a = {
    nome: "Igor",
    nota: 8.5
}

let b = JSON.stringify(a);

let a2 = '{"nome": "fabio", "nota": 7.8}'

let b2 = JSON.parse(a2)

console.log(a)
console.log(b)

console.log(a2)
