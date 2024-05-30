// 3 possibilades de importar modulos
// 1 a gente mesmo criou; 2- original do node.js; 3- terceira pessoa criou

// modulo respoonsavel para ligar com arquivos que o node ja da =>

// fs = file systems sistema de arquivos 
let fs = require('fs')

// criando o arquivo: possui 3 argumentos: nome, o que quer escrever, callback pra saber se deu certo ou nao
//append file => juntar-concatentar
fs.appendFile('teste.txt',' - Olá Mundo ', function(error) {

    if (error) {
        throw error
    };
    console.log('Arquivo Atualizado com sucesso!')

})


// fs.unlink('teste.txt', function(error) {

   // if (error) {
     //   throw error
   // };
    // console.log('Arquivo Apagado com sucesso!')

// })
