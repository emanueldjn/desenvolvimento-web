let usuario = {
    nome: 'Emanuel',
    idade: 23,
    ativo: true
};

// Convertendo um objeto para JSON

let usuarioJSON = JSON.stringify(usuario);
console.log(usuarioJSON); // {"nome":"Emanuel","idade":23,"ativo":true}

// Convertendo JSON para um objeto
let usuarioObj = JSON.parse(usuarioJSON);
console.log(usuarioObj); // { nome: 'Emanuel', idade: 23, ativo