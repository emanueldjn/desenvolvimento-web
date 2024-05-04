// =     x = y      x = y
// +=    x += y     x = x + y
// -=    x -= y     x = x - y
// *=    x *= y     x = x * y
// /=    x /= y     x = x / y
// %=    x %= y     x = x % y


var a = 30;
a += 1;
console.log(a); // 31

var a = 30;
a -= 1;
console.log(a); //  29

var a = 30;
a *= 2;
console.log(a); // 60

var a = 30;
a %= 28;
console.log(a);  // 2

// a mesma maneira de fazer isso: 
var a = 30;
a = a % 28;
console.log(a);  // 2