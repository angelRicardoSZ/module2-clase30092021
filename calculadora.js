let sumar = require("./modulosS");
let restar = require(".//moduloR");
let multiplicar = require(".//moduloM");
let dividir = require(".//moduloD");

let val1 = 2;
let val2 = 10;

// 1
console.log(sumar(val1,val2));
// 2
console.log(restar(val1,val2));
//3
console.log(multiplicar(val1,val2));

//4
let val5 = 0;
console.log(multiplicar(val5,val2));

console.log(multiplicar(val2,val5));



//5
console.log(dividir(val1,val2));



//6

// val3 = 0
let val3 = 0;
console.log(dividir(val1,val3));

// val4 = 0
let val4 = 0;
let val6 = 4;
console.log(dividir(val4,val6));

