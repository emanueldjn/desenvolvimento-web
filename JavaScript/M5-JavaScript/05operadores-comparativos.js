// VALOR DE COMPARAÇÃO IRÁ RETORNAR SE É TRUE OU FALSE;
// == igual a;
// === valor igual e igual; COMPARA TAMBÉM O TIME (STRING OU NÃO)
// != não é igual;
// !== não igual ou não igual; 
// > maior que; 
// < menor que; 
// >= maior que ou igual a; 
// <= menor ou igual a;


// == igual a;
var a = 2;
var b = 3;
console.log( a == b); // false

var a = 3;
var b = 3;
console.log( a == b); // true
//-----------------------------//

console.log( a == 3); // false
console.log( 2 == 2); // true


// === valor igual e igual; COMPARA TAMBÉM O TIPO (STRING OU NÃO)
var a = 2;
var b = '3';
console.log( a === b); // false; porque o tipo deles são diferentes (string e number)


// != não é igual; (diferente)
var a = 3;
var b = 3;
console.log( a != b); // false

var a = 3;
var b = '3';
console.log( a !== b); // true



// > maior que; 
var a = 3;
var b = 4;
console.log( a > b); // false

// >= maior que ou igual a; 
var a = 4;
var b = 4;
console.log( a >= b); // true (tudo que for acima de 4 ou 4 é verdadeiro, tudo que for abaixo de 4, falso. )

