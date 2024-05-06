// Criando um objeto com uma função
function obj(n, s) {
   return {nome: n, sobrenome: s}
}

let func = obj("emanuel", "nascimento")

console.log(func)

console.log("-------------------------------")

// Criando um objeto
let aluno = {
    nome: "emanuel",
    notas: [7.5, 8,5]
}

aluno.matricula = 1234
aluno["sobrenome"] = ["Nascimento"]

console.log(aluno, func)