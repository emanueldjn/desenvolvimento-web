const objetoComArray = {
    nome: "Objeto com Array",
    arr: ["abeja", "banana", "caminon", "dado"]
};

/* objetoComArray.arr.forEach(elemento => {
    console.log(elemento + " jajaja");
}); */

// jeito tradiconal 
const arrayAparte = objetoComArray.arr
for (let i = 0; i < arrayAparte.length; i++) {
    console.log(objetoComArray.arr[i] + " jaajja2")
}