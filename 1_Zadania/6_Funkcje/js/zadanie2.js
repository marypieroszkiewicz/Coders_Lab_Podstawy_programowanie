/* ------- Zadania z wykładowcą - Funkcje ------- */

/* ----- Zadanie 2 ----- */
console.log ("--- Zadanie 2 ---");

function mathPower(number, power){
    var result = 1;
    for(var i=1; i<=power; i++){
        result *= number; // result = result * number;
    }
    return result;
}

var test = mathPower(2,4);
console.log(test);
