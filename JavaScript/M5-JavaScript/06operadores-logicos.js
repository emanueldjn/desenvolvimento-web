// e && 
// ou ||
// Negativo


var a = true;
var b = false;

var c = a && b; // A é verdadeiro e B tbm é verdadeiro? R=false
// so retorna verdadeiro se os dois forem verdadeiros; 

 var idade = 25;

var maior20 = idade >= 20;
var menor30 = idade <= 30;
console.log('Maior que vinte', maior20);
console.log('Menor que trinta', menor30);

var entre = maior20 && menor30;
console.log('entre 20 e 30', entre);

//------------------------------------------//
var idade = 9;

var menor10 = idade <= 10;
var maior65 = idade >= 65;

var gratuidade = menor10 || maior65;

console.log('Maior que 65', maior65);
console.log('Menor que 10', menor10);


console.log('Tem direito a gratuidade?', gratuidade);

//-----------------------------------//
// NEGAÇÂO 

//------------------------------------------//
var idade = 35;

var maior20 = idade >= 20;
var menor20 = !maior20;

console.log('Maior que 20', maior20);
console.log('Menor que 20', menor20);

console.log(!true)