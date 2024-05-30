const http = require('http');


// metodo: 2 parametros: requisição e resposta
// ter requisição e gerar a resposta de acordo com a requisição
http.createServer((request, response) => {

    // criar resposta
    response.writeHead(200, {'Content-Type': 'application/json'}); //plain; /html
    response.end(JSON.stringify({texto:"<h1>Hello World</h1>"})); // "<h1>Hello World</h1>"

    // definir qual porta ser acessada na internet
    // 8080 ou 80 é a porta padrão

}).listen(3000, (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("Servidor Rodando na Porta 3000")
    }
})