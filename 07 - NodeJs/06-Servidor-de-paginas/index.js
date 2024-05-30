// criar um servidor, esperar a requisição do usuario
// de acordo com a requisição, enviar um dos dois aquivos html

const http = require('http');
const url = require('url');
// abrir o arquivo
const fs = require('fs');

http.createServer((request, response) => {

    let path = url.parse(request.url).pathname
    if (path == "" || path == "/") {
        path = "/index.html";
    }
    let fileName = "." + path;

    // abrir o arquivo
    fs.readFile(fileName, (err, data) => {
        if (err) {
            response.writeHead(404, {"Content-Type":"text/html;charset=utf-8"});
            response.end("<h1>Pagina não encontrada</h1>")
        } else {
            response.writeHead(200, {"Content-Type":"text/html"})
            response.write(data)
            response.end();
        }
    })


}).listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Servidor Rodando na Porta 3000")
    }
})