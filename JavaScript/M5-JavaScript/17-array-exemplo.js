const arrayDeObjetos = [
    {
        nome: "Emanuel",
        edad: 23,
        comidaFavorita: "Lasanha",
    },
    {
        nome: "Sally",
        edad: 18,
        comidaFavorita: "Pizza",
    },
    {
        nome: "Juan",
        edad: 45,
        comidaFavorita: "Risoto",
    },
];

for (let i = 0; i < arrayDeObjetos.length; i++) {
    console.log("===============================================")
    console.log("Nome: " + arrayDeObjetos[i].nome);
    console.log("Edad: " + arrayDeObjetos[i].edad);
    console.log("Comida favorita: " + arrayDeObjetos[i].comidaFavorita);
}