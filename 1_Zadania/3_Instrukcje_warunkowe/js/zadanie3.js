// function myEval(a, b, operation) {
//     var result = 0;
//     switch(operation) {
//         case'+': result = a + b;
//         case'-': result = a - value.b;
//         case'/': result = a / b;
//         case'*': result = a * b;
//         case'%': result = a % b;
//         case'*': result = Math.pow(a, b);
//     }
//     return result;
// }

// console.log(" 2 + 4 = " + myEval(2, 4, "+"));
// console.log(" 5 - 2 = " + myEval(5, 2, "-"));
// console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));

/* ------- Zadania do samodzielnego wykonania - Instrukcje warunkowe ------- */

/* ----- Zadanie 3 ----- */
console.log ("--- Zadanie 3 ---");

function myEval(a, b, operation) {
    var result = 0;
    switch(operation) {
        case'+': result = a + b; break;
        case'-': result = a - b; break;
        case'/': result = a / b; break;
        case'*': result = a * b; break;
        case'%': result = a % b; break;
        case'^': result = Math.pow(a, b);
    }
    return result;
}

console.log(" 2 + 4 = " + myEval(2, 4, "+"));
console.log(" 5 - 2 = " + myEval(5, 2, "-"));
console.log(" 6 / 2 = " + myEval(6, 2, "/"));
console.log(" 3 * 5 = " + myEval(3, 5, "*"));
console.log(" 6 % 2 = " + myEval(6, 2, "%"));
console.log(" 4 ^ 8 = " + myEval(4, 8, "^"));
