// Classe e Herança 

class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        console.log(`${this.nome} faz um som.`)
    }    
}

class Cachorro extends Animal {
    falar() {
        console.log(`${this.nome} late.`)
    }
}

let animal = new Animal('Animal');
let cachorro = new Cachorro('Rex');

animal.falar();
cachorro.falar()