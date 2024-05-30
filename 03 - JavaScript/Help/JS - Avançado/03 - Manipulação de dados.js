// Map, Filter, Reduce

let numeros = [1, 2, 3, 4, 5];

// Map: Aplica uma função em cada elemento do array
let dobrados = numeros.map(n => n * 2);
console.log(dobrados); // Saída: [2, 4, 6, 8, 10]

// Filter: Filtra os elementos do array com base em uma condição
let pares = numeros.filter(n => n % 2 == 0);
console.log(pares); // Saída: [2, 4]

// Reduce: Reduz o array a um único valor
let soma = numeros.reduce((total, n) => total + n, 0);
console.log(soma); // Saída: 15