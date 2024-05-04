// Crear un ARRAY 
const miArray = ["Manuel", "Juan", "Luis"]; // RECOMENDABLE;

// Propiedad LENGTH (longitude);
// não sabemos quantos objetos tem no banco de dados;

let otroArray  = ["Emanuel", "David", "Juan"];
let cant = otroArray.length;
console.log(cant) // Imprime: 3

// Acceder a los elementos
// Primeiro elemento de um ARRAY tem indice 0

const miArray = ["Emanuel", "Juan", "Kevin"];
var nombre = miArray[0] 
console.log(nombre) // Imprime Emanuel

nome = miArray[1];
console.log(nome); // Imprime Juan

nome = miArray[2];
console.log(nome); // Imprime Kevin

nome = miArray[3];
console.log(nome); // Undefined, porque el array tiene solo tres elementos;

//----------------------------//

// Agregar elementos, 2 métodos: 1º ao final do array e outro no inicio do array;

const miArray = ["David", "Juan", "Kevin"];
console.log(miArray); //  [David, Juan, Kevin]

miArray.push("Carlo"); 
console.log(miArray); //  [David, Juan, Kevin, Carlo]

miArray.unshift("Andres");
console.log(miArray); // Andres, David, Juan, Kevin, Carlo]


//  Eliminar elementos;
const miArray = ["David","Juan","Kevin"];
console.log(miArray); // Imprime: Davi, Juan, Kevin

let final = miArray.pop();
console.log(miArray); // Imprime: David, Juan
console.log(final);   // Imprime: Kevin (elemento que foi removido)

let inicio = miArray.shift();
console.log(miArray); // Imprime: Juan
console.log(inicio);  // Imprime: David (Elemento que foi removido)

// Recorrer /  Iterar el array
const nombres = ["David", "Juan", "Kevin"]
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]); // imprime : David, Juan, Kevin
}

// Crear um objeto
const persona = {
    nombre: "David",
    edad: 24,
    comidaFavorita: "Hamburguesas"
};

// Acceder a una propriedad de un objeto: colocar um ponto '.'
const persona = {
    nombre: "David",
    edad: 24,
    comidaFavorita: "Hamburguesas"
}; 
let edad = persona.edad;
console.log(edad); // Imprime: 24

// Agregar una nueva propriedad a un objeto:
persona.deporteFavorito = "Tenis";

// Apagar una propriedad
delete persona.comidaFavorita;

// Recorrer / iterar un objeto: key in [key]
const persona = {
    nombre: "David",
    edad: 24,
    comidaFavorita: "Hamburguesas"
};
for (let key in persona) {
    console.log(key, persona[key]); 
}
// imprime:  nombre David, edad 24, comidaFavorita Hamburguesas